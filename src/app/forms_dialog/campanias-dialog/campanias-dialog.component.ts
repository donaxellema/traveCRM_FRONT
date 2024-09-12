import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SystemServices } from 'app/servicesTRAVE/systemServices/alerts.service';
import { etiquetasServiceCRM } from 'app/servicesTRAVE/etiquetas/etiquetas.service';
import { campaniasServiceCRM } from 'app/servicesTRAVE/campanias/campanias.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { ImageUploadService } from 'app/servicesTRAVE/subirArchivos/subirArchivos.service';
import {global} from '../../servicesTRAVE/global';


@Component({
  selector: 'app-campanias-dialog',
  standalone: true,
  imports: [ MatProgressBarModule,FormsModule,TextFieldModule,
    MatIconModule,CommonModule,MatButtonModule,MatSelectModule,
    MatFormFieldModule, MatInputModule, MatTableModule,MatPaginatorModule,MatDatepickerModule
  ],
  templateUrl: './campanias-dialog.component.html',
  styleUrl: './campanias-dialog.component.scss'
})
export class CampaniasDialogComponent {
  private searchSubject: Subject<string> = new Subject();
  searchTerm: string = '';
  public index:number = 0
  public limit:number = 5
  public offset:number = 0
  totalElementos = 0;
  public pageEvent: PageEvent = new PageEvent;


  etiquetaSeleccionada:number;
  public urlImagen = global.urlImagen;

  constructor (
    private imageUploadService: ImageUploadService,
    public dialogRef: MatDialogRef<CampaniasDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    //private _personasServices:personasServiceCRM,
    private _campaniasServices:campaniasServiceCRM,
    private _etiquetasServices:etiquetasServiceCRM,
    private _systemServices:SystemServices,
    private cdr: ChangeDetectorRef,
  ) {
  }
  tipoDialog:any;


  isLoading: boolean = false;
  ngOnInit(){
      
    if(this.data.tipodialogo=='Editar'){
      
      //alert(this.data.etiq_id)
      this.etiquetaSeleccionada=this.data.etiq_id
      this.urlImagendesdeServer=this.data.camp_fotoCampania[0].src
      
    }


    setTimeout(() => {
      this.isLoading = true;
      this.cdr.detectChanges(); // Forzar detección de cambios
      this.tipoDialog=this.data.tipodialogo;
      this.getEtiquetas();
      
      console.log(this.data)
    }, 50);



    
  }


  onChange(event: any) {
    console.log(event.value);
  }




  onCancel(): void {
    this.dialogRef.close();
  }

 

  public etiquetasData:any;
  getEtiquetas(){
    const obj={
      etiq_id:"",
      opcion:"C",
      _limite:this.limit,
      _offset:this.offset
  }
    
    this._etiquetasServices.getEtiquetas(obj).subscribe(
      (response:any) => {
        console.log(response.data)
        this.etiquetasData=response.data
      },
      (error) => {
         
        console.log(error);
          this._systemServices.showAlertError(error.error.error);
        //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });

      }
    );
  } 

  onSave(): void {
    /* console.log("this.data en el dialog")
    console.log(this.data) */
    this.data.etiq_id=this.seleccionado;
    if(this.tipoDialog=='Editar'){
      this.data.etiq_id=this.etiquetaSeleccionada
      this.data.camp_fotoCampania=this.urlImagendesdeServer
      const objeto = {
        data:this.data,
        opcion:'U',
        _limite:0,
        _offset:0
      };
      this._campaniasServices.putCampanias(objeto).subscribe(
        (response:any) => {
          console.log(response)
          if(response.code==200){
            this._systemServices.showAlertSuccessCenter(response.message);
          }
          this.dialogRef.close();

        },
        (error) => {
           
          console.log(error);
            this._systemServices.showAlertError(error.error.error);
          this.dialogRef.close();
        }
      );
    }else{
      console.log("this.data")
      console.log(this.data)
      this.data.etiq_id=this.etiquetaSeleccionada;
      const objeto = {
        
        data:this.data,
        opcion:'I',
        _limite:0,
        _offset:0
      };
      this._campaniasServices.postCampanias(objeto).subscribe(
        (response:any) => {
          console.log(response)
          if(response.code==200){
            this._systemServices.showAlertSuccessCenter(response.message);
          }
          this.dialogRef.close();

        },
        (error) => {
           
          console.log(error);
            this._systemServices.showAlertError(error.error.error);
          this.dialogRef.close();

        }
      );
    }

  }




  fechaInicial: Date | null = null;
  fechaFinal: Date | null = null;
  
  onChangeOpcion(event: any) {
    console.log(event.value);
    this.etiquetaSeleccionada=event.value
  }

  datos = [
    { id: 1, nombre: 'Nombre 1' },
    { id: 2, nombre: 'Nombre 2' },
    { id: 3, nombre: 'Nombre 3' },
    { id: 4, nombre: 'Nombre 4' },
  ];

  seleccionado: any;



  imageUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;
  urlImagendesdeServer: any;
  onFileChange(event: any) {
    this.urlImagendesdeServer=null;
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = e => this.imageUrl = reader.result;
      reader.readAsDataURL(file);
    }
  }




  onUpload() {
    if (this.selectedFile) {
      console.log(this.selectedFile)
      this.imageUploadService.uploadImage(this.selectedFile).subscribe(
        (response) => {
          console.log('Imagen subida exitosamente:', response);
          this.urlImagendesdeServer=response.filename
          this.data.camp_fotoCampania=[{"src":response.filename}]

        },
        (error) => {
          console.error('Error subiendo la imagen:', error);
        }
      );
    } else {
      console.error('No se ha seleccionado ninguna imagen');
      this._systemServices.showAlertErrorTop("No se ha seleccionado ninguna imagen")
    }
  }

}
