import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { SystemServices } from 'app/servicesTRAVE/systemServices/alerts.service';
import Swal from 'sweetalert2';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatIconModule } from '@angular/material/icon';
import { personasServiceCRM } from 'app/servicesTRAVE/personas/personas.service';
import { campaniasServiceCRM } from 'app/servicesTRAVE/campanias/campanias.service';
import { CampaniasDialogComponent } from 'app/forms_dialog/campanias-dialog/campanias-dialog.component';



@Component({
  selector: 'app-campanias',
  standalone: true,
  imports: [MatProgressBarModule,FormsModule,TextFieldModule,
    MatIconModule,CommonModule,MatButtonModule,
    MatFormFieldModule, MatInputModule, MatTableModule,MatPaginatorModule],
  templateUrl: './campanias.component.html',
  styleUrl: './campanias.component.scss'
})
export class CampaniasComponent {




  /*Inicio Seccion de prueba*/
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);

  /* applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } */
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
    private _campaniasServices: campaniasServiceCRM,
    private _systemServices:SystemServices
  )
  {


    this.searchSubject.pipe(
      debounceTime(300), // Retardo de 300 ms para evitar múltiples llamadas rápidas
      distinctUntilChanged() // Evita llamadas si el valor no ha cambiado
    ).subscribe(searchTerm => {
      if (searchTerm.length >= 3) {
        //this.performSearch(searchTerm);
        //this.getEtiquetasSearch()
        this.getCampaniasSearch();
      }else{
        this.getCampanias();
      }
    });



  }


  onSearchChange(searchTerm: string): void {
    this.searchSubject.next(searchTerm);
  }

  ngOnInit(){
    /* 
    this.getPersonas();
    this.extraeUser(); 
    */
    this.getCampanias();
  }




  getCampaniasSearch(){
    console.log(this.limit)
    console.log(this.offset)
    const obj={
      buscar:this.searchTerm,
      opcion:"S",
      _limite:this.limit,
      _offset:this.offset
    }

    this._campaniasServices.getCampaniasSearch(obj).subscribe(
      (response:any) => {
        console.log(response)
        this.totalElementos = response.totalItems
        this.campaniasData=response.data
      },
      (error) => {
         
        console.log(error);
          this._systemServices.showAlertError(error.error.error);
        //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });

      }
    );
  }



  public campaniasData:any
  getCampanias(){
    console.log(this.limit)
    console.log(this.offset)
    const obj={
      etiq_id:"",
      opcion:"C",
      _limite:this.limit,
      _offset:this.offset
  }

    this._campaniasServices.getCampanias(obj).subscribe(
      (response:any) => {
        console.log(response)
        this.totalElementos = response.totalItems
        //this.campaniasDataCambiante.next(response.data)
        this.campaniasData= response.data

        console.log("this.personDataCambiante")
        //console.log(this.campaniasDataCambiante.value)
      },
      (error) => {
         
        console.log(error);
          this._systemServices.showAlertError(error.error.error);
        //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });

      }
    );
  }




  public data:any;
  dialogoPostCampanias():void{
    this.data={
      tipodialogo:"Registrar",
      //usuario:this.userLocal.pers_nombres
    }
    const dialogRef = this.dialog.open(CampaniasDialogComponent, {
      width: '600px',
      height: '800px',
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
        this.getCampanias();
    });

  }


  dialogoEditarCampanias(data:any):void{
    console.log("data")
    console.log(data)
    data.tipodialogo="Editar"
    //data.usuario=this.userLocal.pers_nombres
    const dialogRef = this.dialog.open(CampaniasDialogComponent, {
      width: '600px',
      height: '800px',
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
        this.getCampanias();
    });

    }



    
  dialogoEliminarCampanias(id:any):void{
    console.log("id")
    console.log(id)
    
    //console.log(this.userLocal)
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
          //usuario: this.userLocal.pers_nombres,
          camp_id:id
        },
        opcion:"D",
        _limite:0,
        _offset:0
      }
      this._campaniasServices.deleteCampanias(obj).subscribe(
        (response:any) => {
          console.log(response)
          if(response.code==200){
            this._systemServices.showAlertSuccessCenter(response.message);
            this.getCampanias();

          }
        },
        (error) => {
          
          console.log(error);
            this._systemServices.showAlertError(error.error.error);
            this.getCampanias();

          //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });

        }
      );

      }
    });
  }




  public getServerData(event: PageEvent): PageEvent {
    this.index = event.pageIndex
    this.limit = event.pageSize
    this.offset=this.index * this.limit
    this.getCampanias();
    return event
  }




  
    public userLocal:any;
    extraeUser(){
      this.userLocal= JSON.parse(localStorage.getItem('user'));
    }


}
