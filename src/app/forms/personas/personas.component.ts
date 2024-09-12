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


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [ MatProgressBarModule,FormsModule,TextFieldModule,
    MatIconModule,CommonModule,MatButtonModule,
    MatFormFieldModule, MatInputModule, MatTableModule,MatPaginatorModule],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.scss'
})
export class PersonasComponent implements OnInit {
  /*Inicio Seccion de prueba*/
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /*Fin Seccion de prueba*/

  personDataCambiante = new BehaviorSubject<any[]>([]);
  private searchSubject: Subject<string> = new Subject();
  searchTerm: string = '';
  public index:number = 0
  public limit:number = 5
  public offset:number = 0
  totalElementos = 0;
  public pageEvent: PageEvent = new PageEvent;
  constructor(
    public dialog: MatDialog,
    private _personaService: personasServiceCRM,
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
        this.getPersonas()
      }
    });



  }


  onSearchChange(searchTerm: string): void {
    this.searchSubject.next(searchTerm);
  }

  ngOnInit(){
    
    this.getPersonas();
    this.extraeUser();
  }


  

  public getServerData(event: PageEvent): PageEvent {
    this.index = event.pageIndex
    this.limit = event.pageSize
    this.offset=this.index * this.limit
    this.getPersonas();
    return event
  }

  getPersonas(){
    console.log(this.limit)
    console.log(this.offset)
    const obj={
      etiq_id:"",
      opcion:"C",
      _limite:this.limit,
      _offset:this.offset
  }

    this._personaService.getPersonas(obj).subscribe(
      (response:any) => {
        console.log(response)
        this.totalElementos = response.totalItems
        this.personDataCambiante.next(response.data)

        console.log("this.personDataCambiante")
        console.log(this.personDataCambiante.value)
      },
      (error) => {
         
        console.log(error);
          this._systemServices.showAlertError(error.error.error);
        //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });

      }
    );
  }



  getEtiquetasSearch(){
    console.log(this.limit)
    console.log(this.offset)
    const obj={
      buscar:this.searchTerm,
      opcion:"S",
      _limite:this.limit,
      _offset:this.offset
  }

    this._personaService.getPersonasSearch(obj).subscribe(
      (response:any) => {
        console.log(response)
        this.totalElementos = response.totalItems
        this.personDataCambiante.next(response.data)
      },
      (error) => {
         
        console.log(error);
          this._systemServices.showAlertError(error.error.error);
        //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });

      }
    );
  }


  public data:any;
  dialogoPostPersonas():void{
    this.data={
      tipodialogo:"Registrar",
      usuario:this.userLocal.pers_nombres
    }
    const dialogRef = this.dialog.open(PersonasDialogComponent, {
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
        this.getPersonas();
    });

  }


  dialogoEditarPersona(data:any):void{
    console.log("data")
    console.log(data)
    data.tipodialogo="Editar"
    data.usuario=this.userLocal.pers_nombres
    const dialogRef = this.dialog.open(PersonasDialogComponent, {
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
        this.getPersonas();
    });

    }
  
    public userLocal:any;
    extraeUser(){
      this.userLocal= JSON.parse(localStorage.getItem('user'));
    }

    dialogoEliminarPersona(id:any):void{
      console.log("id")
      console.log(id)
      
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
            pers_id:id
          },
          opcion:"D",
          _limite:0,
          _offset:0
        }
        this._personaService.deletePersonas(obj).subscribe(
          (response:any) => {
            console.log(response)
            if(response.code==200){
              this._systemServices.showAlertSuccessCenter(response.message);
            this.getPersonas();

            }
          },
          (error) => {
            
            console.log(error);
              this._systemServices.showAlertError(error.error.error);
              this.getPersonas();

            //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });
  
          }
        );

        }
      });



    }
}
