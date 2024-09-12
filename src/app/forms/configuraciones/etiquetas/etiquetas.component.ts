import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgFor,CommonModule, NgIf,TitleCasePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatDialog } from '@angular/material/dialog';
import { EtiquetasDialogComponent } from './../../../forms_dialog/etiquetas/etiquetas.component'
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { BehaviorSubject,Observable, Subject  } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';



import { etiquetasServiceCRM } from './../../../servicesTRAVE/etiquetas/etiquetas.service';
import { SystemServices } from 'app/servicesTRAVE/systemServices/alerts.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-etiquetas',
  standalone: true,
  imports        : [
      NgIf,MatProgressBarModule,FormsModule, ReactiveFormsModule, MatFormFieldModule,
      MatIconModule, MatInputModule, TextFieldModule, MatSelectModule,MatOptionModule, 
      MatButtonModule, CommonModule,MatPaginatorModule],
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './etiquetas.component.html',
  styleUrl: './etiquetas.component.scss'
})
export class EtiquetasComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  etiquetasCambiantes = new BehaviorSubject<any[]>([]);
  isLoading: boolean = false;
  accountForm: UntypedFormGroup;
  searchInputControl: UntypedFormControl = new UntypedFormControl();
  dataSource: any;



  totalItems = 10;
  members: any[];
  roles: any[];
  etiquetas: any[];
  color: string = '#3498db';
  paginatorLength = 0;

  public index:number = 0
  public limit:number = 5
  public offset:number = 0
  totalElementos = 0;
  public pageEvent: PageEvent = new PageEvent;


  private searchSubject: Subject<string> = new Subject();
  searchTerm: string = '';

  //pageSize = 2; 
  constructor(
    private _formBuilder: UntypedFormBuilder,
    public dialog: MatDialog,
    private _etiquetasService: etiquetasServiceCRM,
    private _systemServices:SystemServices
  )
  {


    this.searchSubject.pipe(
      debounceTime(300), // Retardo de 300 ms para evitar múltiples llamadas rápidas
      distinctUntilChanged() // Evita llamadas si el valor no ha cambiado
    ).subscribe(searchTerm => {
      if (searchTerm.length >= 3) {
        //this.performSearch(searchTerm);
        this.getEtiquetasSearch()
      }else{
        this.getEtiquetas()
      }
    });



  }

  onSearchChange(searchTerm: string): void {
    this.searchSubject.next(searchTerm);
  }

  performSearch(searchTerm: string): void {
    console.log(`Buscando: ${searchTerm}`);
    // Lógica para la búsqueda
  }




  ngOnInit(): void
    {
        this.getEtiquetas();
      }

      public getServerData(event: PageEvent): PageEvent {
        this.index = event.pageIndex
        this.limit = event.pageSize
        this.offset=this.index * this.limit
        this.getEtiquetas();
        return event
      }




      getEtiquetas(){
        console.log(this.limit)
        console.log(this.offset)
        const obj={
          etiq_id:"",
          opcion:"C",
          _limite:this.limit,
          _offset:this.offset
      }
  
        this._etiquetasService.getEtiquetas(obj).subscribe(
          (response:any) => {
            console.log(response)
            this.totalElementos = response.totalItems
            this.etiquetasCambiantes.next(response.data)
          },
          (error) => {
             
            console.log(error);
              this._systemServices.showAlertError(error.error.error);
            //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });
  
          }
        );
      }
      
      public buscar:any;
      getEtiquetasSearch(){
        console.log(this.limit)
        console.log(this.offset)
        const obj={
          buscar:this.searchTerm,
          opcion:"S",
          _limite:this.limit,
          _offset:this.offset
      }
  
        this._etiquetasService.getEtiquetasSearch(obj).subscribe(
          (response:any) => {
            this.totalElementos = response.totalItems
            this.etiquetasCambiantes.next(response.data)
          },
          (error) => {
             
            console.log(error);
              this._systemServices.showAlertError(error.error.error);
            //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });
  
          }
        );
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





      dialogoEtiqueta(data:any):void{
        data.tipodialogo="Editar"
        const dialogRef = this.dialog.open(EtiquetasDialogComponent, {
          width: '450px',
          data: data ,
          disableClose: true,
          
        });
    
        dialogRef.afterClosed().subscribe(result => {
          /* console.log("result")
          console.log(result)
          if (result) {
            console.log('Datos recibidos:', result);
            // Aquí puedes manejar los datos recibidos
          } */
            this.getEtiquetas();
        });

        }
      
        public data:any;
        dialogoPostEtiqueta():void{
        this.data={
          tipodialogo:"Registrar"}
        const dialogRef = this.dialog.open(EtiquetasDialogComponent, {
          width: '450px',
          data: this.data ,
          disableClose: true,
          
        });
    
        dialogRef.afterClosed().subscribe(result => {
          /* console.log("result")
          console.log(result)
          if (result) {
            console.log('Datos recibidos:', result);
            // Aquí puedes manejar los datos recibidos
          } */
            this.getEtiquetas();
        });

        }
        
        
        dialogoEliminarEtiqueta(id:any):void{

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
              etiq_id:id,
              opcion:"D",
              _limite:0,
              _offset:0
            }
            this._etiquetasService.deleteEtiquetas(obj).subscribe(
              (response:any) => {
                console.log(response)
                if(response.code==200){
                  this._systemServices.showAlertSuccessCenter(response.message);
                this.getEtiquetas();

                }
              },
              (error) => {
                
                console.log(error);
                  this._systemServices.showAlertError(error.error.error);
                  this.getEtiquetas();

                //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });
      
              }
            );

            }
          });



        }

      }




    //createProduct(): void
    //{
        // Create the product
        //console.log("crear un producto")
        /* this._inventoryService.createProduct().subscribe((newProduct) =>
        {
            // Go to new product
            this.selectedProduct = newProduct;

            // Fill the form
            this.selectedProductForm.patchValue(newProduct);

            // Mark for check
            this._changeDetectorRef.markForCheck();
        }); */
    //}


    












    

//}
