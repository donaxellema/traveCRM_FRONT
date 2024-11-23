import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { TranslocoModule } from '@ngneat/transloco';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { ApexLegend, ApexMarkers, ApexOptions, ApexStroke, NgApexchartsModule } from 'ng-apexcharts';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AgentesServiceCRM } from 'app/servicesTRAVE/agentes/agentes.service';

import {global} from '../../../app/servicesTRAVE/global';
import { ChatComponent } from "../chat/chat.component";
import { PersonaObservableCRM } from 'app/servicesTRAVE/observables/chats/chat.service';
import { ClientesServiceCRM } from 'app/servicesTRAVE/clientes/cliente.service';
import { SystemServices } from 'app/servicesTRAVE/systemServices/alerts.service';
import { campaniasServiceCRM } from 'app/servicesTRAVE/campanias/campanias.service';

import { ChartComponent, ApexChart, ApexAxisChartSeries, ApexXAxis, ApexDataLabels, ApexTitleSubtitle } from "ng-apexcharts";
import { dashboardServiceCRM } from 'app/servicesTRAVE/dashboard/dashboard.service';


export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    title: ApexTitleSubtitle;
  };


  export type chartOptions_Cliente = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    stroke: ApexStroke;
    markers: ApexMarkers;
    title: ApexTitleSubtitle;
    legend: ApexLegend;
  };

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule, MatTabsModule,
    MatButtonToggleModule, NgApexchartsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, ChatComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})




export class DashboardComponent implements OnInit, OnDestroy
{

    public urlImagen = global.urlImagen;
    public agentesResponse:any[]=[];

    chartGithubIssues: ApexOptions = {};
    chartTaskDistribution: ApexOptions = {};
    chartBudgetDistribution: ApexOptions = {};
    chartWeeklyExpenses: ApexOptions = {};
    chartMonthlyExpenses: ApexOptions = {};
    chartYearlyExpenses: ApexOptions = {};
    data: any;
    selectedProject: string = 'La crianza';
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */

    public chartOptions: Partial<ChartOptions>;
    public chartOptions_Cliente: Partial<chartOptions_Cliente>;

    
    constructor(
        //private _projectService: ProjectService,
        private _router: Router,
        private _AgentesServices: AgentesServiceCRM,
        private _personaObservableServices: PersonaObservableCRM,
        private _clienteservice: ClientesServiceCRM,
        private _systemServices: SystemServices,
        private _campaniasServices: campaniasServiceCRM,
        private _dashboard: dashboardServiceCRM
    )
    {
        this.chartOptions = {
            series: [
              {
                name: "Personas",
                data: []  // Los datos de las personas por provincia se cargan aquí
              }
            ],
            chart: {
              type: "bar",
              height: 350
            },
            title: {
              text: "Personas por Provincia"
            },
            xaxis: {
              categories: []  // Las provincias se cargan aquí
            },
            dataLabels: {
              enabled: false
            }
          };



          this.chartOptions_Cliente = {
            series: [],
            chart: { type: "bar" },
            xaxis: { categories: [] },
            dataLabels: { enabled: true },
            stroke: { show: true, width: 2 },
            markers: { size: 5 },
            legend: { position: 'top' }
          };
        
    }








    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    usuario:any;
    ngOnInit(): void
    {

    this.loadProvinciaData();
    //this.loadClientData();
    this.loadAgentesyClientes();

      this.usuario=localStorage.getItem('user');
      this.usuario=JSON.parse(this.usuario);


      const dataA={ 
        opcion:"C_USU_ONLINE"
        //opcion:"C"
        }

        this._AgentesServices.getAgentesY_PersonasEN_LINIEA(dataA).subscribe(
            (response:any) => {
                this.agentesResponse=response
            },
            (error) => {
                
            }
        )

        this.getClientes();
        
        this.getCampanias();

        window['Apex'] = {
            chart: {
                events: {
                    mounted: (chart: any, options?: any): void =>
                    {
                        this._fixSvgFill(chart.el);
                    },
                    updated: (chart: any, options?: any): void =>
                    {
                        this._fixSvgFill(chart.el);
                    },
                },
            },
        };

        this.cargarAgentes();
        
    }



    public  provincias = [
        "Azuay", "Bolívar", "Cañar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", 
        "Esmeraldas", "Galápagos", "Guayas", "Imbabura", "Loja", "Los Ríos", 
        "Manabí", "Morona Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", 
        "Santa Elena","Santo Domingo de los Tsachilas"];

    loadProvinciaData() {
        

        const obj={
            opcion:"PROV",
            _limite:0,
            _offset:0
        }

        this._dashboard.getDataBarraClientes(obj).subscribe(
            (response:any) => {
                this.clientes_Provincias = response.data;

                const personasPorProvincia = this.provincias.map(provincia => {
                    const match = this.clientes_Provincias.find(item => item.provincia === provincia);
                    return match ? match.total_personas : 0;
                });
        
                // Configuración del gráfico
                this.chartOptions.series = [{ name: 'Personas', data: personasPorProvincia }];
                this.chartOptions.xaxis = { categories: this.provincias };
            },
            (error) => {
                //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });
    
            }
        );


      }



      // Simulando datos de clientes asignados y etiquetas
      public clientes_Provincias:any;
  loadClientData() {

    


    const agentes = ['Agente A', 'Agente B', 'Agente C'];
    const clientesPorAgente = [10, 15, 8];  // Clientes por agente
    const vipPorAgente = [5, 7, 2];  // VIP por agente
    const regularPorAgente = [0, 5, 4];  // Regular por agente
    const regularPorAgente1 = [2, 2, 1];  // Regular por agente
    const regularPorAgente2 = [0, 1, 1];  // Regular por agente
    const regularPorAgente3 = [2, 0, 0];  // Regular por agente

    // Asignar datos al gráfico
    this.chartOptions_Cliente.series = [
      { name: "Clientes Asignados", type: "column", data: clientesPorAgente },
      { name: "VIP", type: "line", data: vipPorAgente },
      { name: "Regular", type: "line", data: regularPorAgente },
      { name: "Nuevo", type: "line", data: regularPorAgente1 },
      { name: "Nuevo2", type: "line", data: regularPorAgente2 },
      { name: "Nuevo3", type: "line", data: regularPorAgente3 }
    ];
    this.chartOptions_Cliente.xaxis = { categories: agentes };
  }


    public clientes:any;
    public clientes_Agentes:any[];
      //OBTENER CLIENTES DEL SISTEMA
    getClientes(){
            const obj={
            usu_id:0,
            opcion:"CC",
            _limite:0,
            _offset:0
        }

            this._clienteservice.getClientesY_Personas(obj).subscribe(
            (response:any) => {
                this.clientes = response
                
            },
            (error) => {
                this._systemServices.showAlertError(error.message);
            }
            );
    }

    loadAgentesyClientes(){
        const obj={
            opcion:"CAB",
            _limite:0,
            _offset:0
        }
            this._dashboard.getDataBarraAgentes(obj).subscribe(
                (response:any) => {
                    this.clientes_Agentes = response.data


                    // Extraer agentes
                        const agentes = this.clientes_Agentes.map((item: any) => item.agente);

                        // Series para el total de clientes (barras)
                        const totalClientes = this.clientes_Agentes.map((item: any) => item.total_clientes);

                        // Obtener todas las etiquetas (asumimos que cada agente tiene las mismas etiquetas)
                        const etiquetas = this.clientes_Agentes[0]?.detalles_clientes.map((detalle: any) => detalle.etiqueta) || [];

                        // Series para cada etiqueta (líneas)
                        const seriesPorEtiquetas = etiquetas.map((etiqueta: string) => {
                            return {
                            name: etiqueta,
                            type: "line", // Tipo línea para las etiquetas
                            data: this.clientes_Agentes.map((item: any) => {
                                const cliente = item.detalles_clientes.find((d: any) => d.etiqueta === etiqueta);
                                return cliente ? cliente.total : 0;
                            })
                            };
                        });

                        // Configurar las opciones del gráfico
                        this.chartOptions_Cliente = {
                            series: [
                            { name: "Total Clientes", type: "column", data: totalClientes }, // Barras para el total
                            ...seriesPorEtiquetas // Líneas para los totales por etiquetas
                            ],
                            chart: {
                            type: "line", // Puedes especificar el tipo base como "line", pero cada serie tiene su propio tipo
                            },
                            xaxis: {
                            categories: agentes // Mostrar los nombres de los agentes
                            },
                            stroke: {
                            width: [0, 2, 2, 2] // Grosor de las líneas
                            },
                            dataLabels: {
                            enabled: true // Habilitar etiquetas de datos
                            },
                            markers: {
                            size: 5 // Tamaño de los marcadores para las líneas
                            },
                            title: {
                            text: "Total de Clientes por Agente y Etiquetas"
                            },
                            legend: {
                            show: true // Mostrar leyenda para identificar las etiquetas
                            }
                        };

                    
                },
                (error) => {
                    this._systemServices.showAlertError(error.message);
                }
                );
    }


    public campaniasData:any
    getCampanias(){
      const obj={
        etiq_id:"",
        opcion:"CC",
        _limite:0,
        _offset:0
    }
  
      this._campaniasServices.getCampanias(obj).subscribe(
        (response:any) => {
          //console.log(response)
          //this.totalElementos = response.totalItems
          //this.campaniasDataCambiante.next(response.data)
          this.campaniasData= response
        },
        (error) => {
           
            this._systemServices.showAlertError(error.error.error);
          //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });
  
        }
      );
    }







    //funcion para actualizar el observable 
    setIdPersona(id:any){
        this._personaObservableServices.setId_Persona(id);
    }


    public agentesBDD:any[]=[];
    public agentes_tot_BDD:any[]=[];
    public totalAgentes:any=0;
    cargarAgentes(){

    const dataA={ 
        opcion:"C_USU_ONLINE"
        //opcion:"C"
    }

        this._AgentesServices.getAgentesY_PersonasEN_LINIEA(dataA).subscribe(
            (response:any) => {
                console.log(response);
                this.totalAgentes=response.totalItems;
                this.agentesBDD=response.data

                console.log("this.agentesBDD")
                console.log(this.agentesBDD)
            },
            (error) => {
                
            
                //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });
    
            }
        )



        const dataB={ 
            opcion:"C_USU_AGENTES"
            //opcion:"C"
        }
        console.log("llamando a los agentes")
            this._AgentesServices.getAgentesY_PersonasTotal(dataB).subscribe(
                (response:any) => {
                    console.log("response+++++++");
                    console.log(response);
                    //this.totalAgentes=response.data.length;
                    this.agentes_tot_BDD=response.data
                    //console.log(this.agentes_tot_BDD)
                },
                (error) => {
                    
                
                    //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });
        
                }
            )


    }




    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Fix the SVG fill references. This fix must be applied to all ApexCharts
     * charts in order to fix 'black color on gradient fills on certain browsers'
     * issue caused by the '<base>' tag.
     *
     * Fix based on https://gist.github.com/Kamshak/c84cdc175209d1a30f711abd6a81d472
     *
     * @param element
     * @private
     */
    private _fixSvgFill(element: Element): void
    {
        // Current URL
        const currentURL = this._router.url;

        // 1. Find all elements with 'fill' attribute within the element
        // 2. Filter out the ones that doesn't have cross reference so we only left with the ones that use the 'url(#id)' syntax
        // 3. Insert the 'currentURL' at the front of the 'fill' attribute value
        Array.from(element.querySelectorAll('*[fill]'))
            .filter(el => el.getAttribute('fill').indexOf('url(') !== -1)
            .forEach((el) =>
            {
                const attrVal = el.getAttribute('fill');
                el.setAttribute('fill', `url(${currentURL}${attrVal.slice(attrVal.indexOf('#'))}`);
            });
    }

    /**
     * Prepare the chart data from the data
     *
     * @private
     */
    private _prepareChartData(): void
    {
        // Github issues
        this.chartGithubIssues = {
            chart      : {
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'line',
                toolbar   : {
                    show: false,
                },
                zoom      : {
                    enabled: false,
                },
            },
            colors     : ['#64748B', '#94A3B8'],
            dataLabels : {
                enabled        : true,
                enabledOnSeries: [0],
                background     : {
                    borderWidth: 0,
                },
            },
            grid       : {
                borderColor: 'var(--fuse-border)',
            },
            labels     : this.data.githubIssues.labels,
            legend     : {
                show: false,
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%',
                },
            },
            series     : this.data.githubIssues.series,
            states     : {
                hover: {
                    filter: {
                        type : 'darken',
                        value: 0.75,
                    },
                },
            },
            stroke     : {
                width: [3, 0],
            },
            tooltip    : {
                followCursor: true,
                theme       : 'dark',
            },
            xaxis      : {
                axisBorder: {
                    show: false,
                },
                axisTicks : {
                    color: 'var(--fuse-border)',
                },
                labels    : {
                    style: {
                        colors: 'var(--fuse-text-secondary)',
                    },
                },
                tooltip   : {
                    enabled: false,
                },
            },
            yaxis      : {
                labels: {
                    offsetX: -16,
                    style  : {
                        colors: 'var(--fuse-text-secondary)',
                    },
                },
            },
        };

        // Task distribution
        this.chartTaskDistribution = {
            chart      : {
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'polarArea',
                toolbar   : {
                    show: false,
                },
                zoom      : {
                    enabled: false,
                },
            },
            labels     : this.data.taskDistribution.labels,
            legend     : {
                position: 'bottom',
            },
            plotOptions: {
                polarArea: {
                    spokes: {
                        connectorColors: 'var(--fuse-border)',
                    },
                    rings : {
                        strokeColor: 'var(--fuse-border)',
                    },
                },
            },
            series     : this.data.taskDistribution.series,
            states     : {
                hover: {
                    filter: {
                        type : 'darken',
                        value: 0.75,
                    },
                },
            },
            stroke     : {
                width: 2,
            },
            theme      : {
                monochrome: {
                    enabled       : true,
                    color         : '#93C5FD',
                    shadeIntensity: 0.75,
                    shadeTo       : 'dark',
                },
            },
            tooltip    : {
                followCursor: true,
                theme       : 'dark',
            },
            yaxis      : {
                labels: {
                    style: {
                        colors: 'var(--fuse-text-secondary)',
                    },
                },
            },
        };

        // Budget distribution
        this.chartBudgetDistribution = {
            chart      : {
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'radar',
                sparkline : {
                    enabled: true,
                },
            },
            colors     : ['#818CF8'],
            dataLabels : {
                enabled   : true,
                formatter : (val: number): string | number => `${val}%`,
                textAnchor: 'start',
                style     : {
                    fontSize  : '13px',
                    fontWeight: 500,
                },
                background: {
                    borderWidth: 0,
                    padding    : 4,
                },
                offsetY   : -15,
            },
            markers    : {
                strokeColors: '#818CF8',
                strokeWidth : 4,
            },
            plotOptions: {
                radar: {
                    polygons: {
                        strokeColors   : 'var(--fuse-border)',
                        connectorColors: 'var(--fuse-border)',
                    },
                },
            },
            series     : this.data.budgetDistribution.series,
            stroke     : {
                width: 2,
            },
            tooltip    : {
                theme: 'dark',
                y    : {
                    formatter: (val: number): string => `${val}%`,
                },
            },
            xaxis      : {
                labels    : {
                    show : true,
                    style: {
                        fontSize  : '12px',
                        fontWeight: '500',
                    },
                },
                categories: this.data.budgetDistribution.categories,
            },
            yaxis      : {
                max       : (max: number): number => parseInt((max + 10).toFixed(0), 10),
                tickAmount: 7,
            },
        };

        // Weekly expenses
        this.chartWeeklyExpenses = {
            chart  : {
                animations: {
                    enabled: false,
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'line',
                sparkline : {
                    enabled: true,
                },
            },
            colors : ['#22D3EE'],
            series : this.data.weeklyExpenses.series,
            stroke : {
                curve: 'smooth',
            },
            tooltip: {
                theme: 'dark',
            },
            xaxis  : {
                type      : 'category',
                categories: this.data.weeklyExpenses.labels,
            },
            yaxis  : {
                labels: {
                    formatter: (val): string => `$${val}`,
                },
            },
        };

        // Monthly expenses
        this.chartMonthlyExpenses = {
            chart  : {
                animations: {
                    enabled: false,
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'line',
                sparkline : {
                    enabled: true,
                },
            },
            colors : ['#4ADE80'],
            series : this.data.monthlyExpenses.series,
            stroke : {
                curve: 'smooth',
            },
            tooltip: {
                theme: 'dark',
            },
            xaxis  : {
                type      : 'category',
                categories: this.data.monthlyExpenses.labels,
            },
            yaxis  : {
                labels: {
                    formatter: (val): string => `$${val}`,
                },
            },
        };

        // Yearly expenses
        this.chartYearlyExpenses = {
            chart  : {
                animations: {
                    enabled: false,
                },
                fontFamily: 'inherit',
                foreColor : 'inherit',
                height    : '100%',
                type      : 'line',
                sparkline : {
                    enabled: true,
                },
            },
            colors : ['#FB7185'],
            series : this.data.yearlyExpenses.series,
            stroke : {
                curve: 'smooth',
            },
            tooltip: {
                theme: 'dark',
            },
            xaxis  : {
                type      : 'category',
                categories: this.data.yearlyExpenses.labels,
            },
            yaxis  : {
                labels: {
                    formatter: (val): string => `$${val}`,
                },
            },
        };
    }





    public  teamMembers      = [
        {
            id    : '2bfa2be5-7688-48d5-b5ac-dc0d9ac97f14',
            avatar: 'assets/images/avatars/female-10.jpg',
            name  : 'Nadia Mcknight',
            email : 'nadiamcknight@mail.com',
            phone : '+1-943-511-2203',
            title : 'Project Director',
        },
        {
            id    : '77a4383b-b5a5-4943-bc46-04c3431d1566',
            avatar: 'assets/images/avatars/male-19.jpg',
            name  : 'Best Blackburn',
            email : 'blackburn.best@beadzza.me',
            phone : '+1-814-498-3701',
            title : 'Senior Developer',
        },
        {
            id    : '8bb0f597-673a-47ca-8c77-2f83219cb9af',
            avatar: 'assets/images/avatars/male-14.jpg',
            name  : 'Duncan Carver',
            email : 'duncancarver@mail.info',
            phone : '+1-968-547-2111',
            title : 'Senior Developer',
        },
        {
            id    : 'c318e31f-1d74-49c5-8dae-2bc5805e2fdb',
            avatar: 'assets/images/avatars/male-01.jpg',
            name  : 'Martin Richards',
            email : 'martinrichards@mail.biz',
            phone : '+1-902-500-2668',
            title : 'Junior Developer',
        },
        {
            id    : '0a8bc517-631a-4a93-aacc-000fa2e8294c',
            avatar: 'assets/images/avatars/female-20.jpg',
            name  : 'Candice Munoz',
            email : 'candicemunoz@mail.co.uk',
            phone : '+1-838-562-2769',
            title : 'Lead Designer',
        },
        {
            id    : 'a4c9945a-757b-40b0-8942-d20e0543cabd',
            avatar: 'assets/images/avatars/female-01.jpg',
            name  : 'Vickie Mosley',
            email : 'vickiemosley@mail.net',
            phone : '+1-939-555-3054',
            title : 'Designer',
        },
        {
            id    : 'b8258ccf-48b5-46a2-9c95-e0bd7580c645',
            avatar: 'assets/images/avatars/female-02.jpg',
            name  : 'Tina Harris',
            email : 'tinaharris@mail.ca',
            phone : '+1-933-464-2431',
            title : 'Designer',
        },
        {
            id    : 'f004ea79-98fc-436c-9ba5-6cfe32fe583d',
            avatar: 'assets/images/avatars/male-02.jpg',
            name  : 'Holt Manning',
            email : 'holtmanning@mail.org',
            phone : '+1-822-531-2600',
            title : 'Marketing Manager',
        },
        {
            id    : '8b69fe2d-d7cc-4a3d-983d-559173e37d37',
            avatar: 'assets/images/avatars/female-03.jpg',
            name  : 'Misty Ramsey',
            email : 'mistyramsey@mail.us',
            phone : '+1-990-457-2106',
            title : 'Consultant',
        },
    ]

}

