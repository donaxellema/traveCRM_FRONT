import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { personasServiceCRM } from 'app/servicesTRAVE/personas/personas.service';
import { SystemServices } from 'app/servicesTRAVE/systemServices/alerts.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { etiquetasServiceCRM } from 'app/servicesTRAVE/etiquetas/etiquetas.service';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule
  ],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.scss'
})
export class PersonasDialogComponent implements OnInit{
  constructor (
    public dialogRef: MatDialogRef<PersonasDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _personasServices:personasServiceCRM,
    private _etiquetasServices:etiquetasServiceCRM,
    private _systemServices:SystemServices,
    private cdr: ChangeDetectorRef,
  ) {
  }
  tipoDialog:any;


  isLoading: boolean = false;
  ngOnInit(){
    
    setTimeout(() => {
      this.isLoading = true;
      this.cdr.detectChanges(); // Forzar detección de cambios
      this.tipoDialog=this.data.tipodialogo;
      this.getEtiquetas();
      this.seleccionado=this.data.etiq_id 
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
    //console.log(this.limit)
    //console.log(this.offset)
    const obj={
      etiq_id:"",
      opcion:"C",
      _limite:100,
      _offset:0
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
      const objeto = {
        data:this.data,
        opcion:'U',
        _limite:0,
        _offset:0
      };
      this._personasServices.putPersonas(objeto).subscribe(
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
      const objeto = {
        data:{
          pers_nombres:this.data.pers_nombres,
          pers_apellidos:this.data.pers_apellidos,
          pers_email:this.data.pers_email,
          pers_telefono:this.data.pers_telefono,
          etiq_id:this.seleccionado,
          usuario:this.data.usuario
        },
        opcion:'I',
        _limite:0,
        _offset:0
      };
      this._personasServices.postPersonas(objeto).subscribe(
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




  datos = [
    { id: 1, nombre: 'Nombre 1' },
    { id: 2, nombre: 'Nombre 2' },
    { id: 3, nombre: 'Nombre 3' },
    { id: 4, nombre: 'Nombre 4' },
  ];

  seleccionado: any;

  /* onChange(event: any) {
    console.log(event);
    //console.log(event.value);
  } */

}
