import { Component, OnInit,ChangeDetectionStrategy,ViewChild, ViewEncapsulation } from '@angular/core';
import { NgFor,CommonModule, NgIf,TitleCasePipe  } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { personasServiceCRM } from 'app/servicesTRAVE/personas/personas.service';
import { SystemServices } from 'app/servicesTRAVE/systemServices/alerts.service';
import { PersonasDialogComponent } from 'app/forms_dialog/personas/personas.component';
import Swal from 'sweetalert2';
import { AgentesServiceCRM } from 'app/servicesTRAVE/agentes/agentes.service';
import { AgentesdialogComponent } from 'app/forms_dialog/agentesdialog/agentesdialog.component';
import { ClientesServiceCRM } from 'app/servicesTRAVE/clientes/cliente.service';
import { ClientesdialogComponent } from 'app/forms_dialog/clientesdialog/clientesdialog.component';




@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [ MatProgressBarModule,FormsModule,TextFieldModule,
    MatIconModule,CommonModule,MatButtonModule,
    MatFormFieldModule, MatInputModule, MatTableModule,MatPaginatorModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit {

  
  clienteDataCambiante = new BehaviorSubject<any[]>([]);
  private searchSubject: Subject<string> = new Subject();
  searchTerm: string = '';
  public index:number = 0
  public limit:number = 5
  public offset:number = 0
  totalElementos = 0;
  public pageEvent: PageEvent = new PageEvent;
  constructor(
    public dialog: MatDialog,
    //private _personaService: personasServiceCRM,
    private _clienteservice: ClientesServiceCRM,
    //private _agentesService: AgentesServiceCRM,
    private _systemServices:SystemServices
  ){


    this.searchSubject.pipe(
      debounceTime(300), // Retardo de 300 ms para evitar múltiples llamadas rápidas
      distinctUntilChanged() // Evita llamadas si el valor no ha cambiado
    ).subscribe(searchTerm => {
      if (searchTerm.length >= 3) {
        //this.performSearch(searchTerm);
        this.getAgentesSearch()
      }else{
        this.getClientes()
      }
    });

  }


  onSearchChange(searchTerm: string): void {
    this.searchSubject.next(searchTerm);
  }

  ngOnInit(){
    
    this.getClientes();
    this.extraeUser();
  }


  
  //public agenteDataCambiante:any[]
  public getServerData(event: PageEvent): PageEvent {
    this.index = event.pageIndex
    this.limit = event.pageSize
    this.offset=this.index * this.limit
    this.getClientes();
    return event
  }

  //OBTENER AGENTES DEL SISTEMA
  getClientes(){
    const obj={
      usu_id:0,
      opcion:"C",
      _limite:this.limit *1,
      _offset:this.offset *1
  }

    this._clienteservice.getClientesY_Personas(obj).subscribe(
      (response:any) => {
        this.totalElementos = response.totalItems
        this.clienteDataCambiante.next(response.data)
        //console.log("this.agenteDataCambiante.value")
        //console.log(this.agenteDataCambiante.value)
        
      },
      (error) => {
          this._systemServices.showAlertError(error.message);
      }
    );
  }




  
  //BUSCAR AGENTES DENTRO DEL SISTEMA
  getAgentesSearch(){
    const obj={
      buscar:this.searchTerm,
      opcion:"S",
      _limite:this.limit,
      _offset:this.offset
  }
    this._clienteservice.getClientesYPersonasSearch(obj).subscribe(
      (response:any) => {
        this.totalElementos = response.totalItems
        this.clienteDataCambiante.next(response.data)
      },
      (error) => {
          this._systemServices.showAlertError(error.error.error);
        //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });

      }
    );
  }
  

  //PERMITE EXTRAER DATOS COMO PERSONAS Y AGENTES DATOS POR ID 
  getAgenteBY_ID(usu_id:any){
    const obj={
      usu_id:usu_id,
      opcion:"CP",
      _limite:this.limit,
      _offset:this.offset
  }
    this._clienteservice.getClientesYPersonasBY_ID(obj).subscribe(
      (response:any) => {
        if(response.code=200){
          console.log("response")
          console.log(response)
          this.dialogoEditarAGENTE_Persona(response.data,response.persona)
        }
      },
      (error) => {
          this._systemServices.showAlertError(error.error.error);
      }
    );
  }

  //ABRE EL CUADRO DE DIALOGO PARA EDITAR AL AGENTE
  dialogoEditarAGENTE_Persona(data:any, persona:any):void{
    console.log(data)
    console.log(persona)

    data.persona=persona;
    data.tipodialogo="Editar"
    data.usuario=this.userLocal.pers_nombres
    const dialogRef = this.dialog.open(ClientesdialogComponent, {
      width: '850px',
      height: '800px',
      data: {data:data, persona:persona},
      disableClose: true,
      
    });

    dialogRef.afterClosed().subscribe(result => {
      
        this.getClientes();
    });
    }





  public data:any;
  dialogoPostPersonas():void{
    this.data={
      tipodialogo:"Registrar",
      usuario:this.userLocal.pers_nombres
    }
    const dialogRef = this.dialog.open(ClientesdialogComponent, {
      width: '850px',
      height: '800px',
      data: {data:this.data} ,
      disableClose: true
      
    });

    dialogRef.afterClosed().subscribe(result => {
        this.getClientes();
    });

  }


 
  
    public userLocal:any;
    extraeUser(){
      this.userLocal= JSON.parse(localStorage.getItem('user'));
    }

    dialogoEliminarPersona(pers_id:any,usu_id:any):void{
      console.log("id")
      console.log(pers_id)
      
      console.log(this.userLocal)
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'No podrás revertir esto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo!'
      }).then((result) => {
        if (result.isConfirmed) {
        const obj={
          data:{
            usuario: this.userLocal.pers_nombres,
            pers_id:pers_id,
            usu_id:usu_id
          },
          opcion:"D",
          _limite:0,
          _offset:0
        }
        this._clienteservice.postDELETEclientes(obj).subscribe(
          (response:any) => {
            console.log(response)
            if(response.code==200){
              this._systemServices.showAlertSuccessCenter(response.message);
            this.getClientes();

            }
          },
          (error) => {
            
            console.log(error);
              this._systemServices.showAlertError(error.error.error);
              this.getClientes();

            //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });
  
          }
        );

        }
      });



    }

}
