import { Component, Inject,NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {global} from '../../servicesTRAVE/global';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import Swal from 'sweetalert2';
import { campaniasServiceCRM } from 'app/servicesTRAVE/campanias/campanias.service';
import { SystemServices } from 'app/servicesTRAVE/systemServices/alerts.service';

import {ChangeDetectionStrategy} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-campanias-byetiquetas',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatIconModule,CommonModule,MatButtonModule,MatCardModule,
    MatFormFieldModule, MatInputModule,MatDialogModule
  ],
  templateUrl: './campanias-byetiquetas.component.html',
  styleUrl: './campanias-byetiquetas.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaniasBYEtiquetasComponent {

  data$:any;
  note:any;
  public urlImagen = global.urlImagen;

  constructor(
    public dialogRef: MatDialogRef<CampaniasBYEtiquetasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _campaniasServices: campaniasServiceCRM,
    private _systemServices:SystemServices

  ){
  }

  ngOnInit(){
    //console.log(this.data)
    /* 
    this.getPersonas();
    this.extraeUser(); 
    */
    //this.getCampanias();
  }

  aplicaCampania(etiqueta:any,camp_id:any,etiq_id:any){
    
    Swal.fire({
      title: 'Enviaras esta campaña a todos los usuarios que compartan la etiqueta: '+etiqueta+'\n ¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, enviar Campaña',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const obj={
          data:{
            //usuario: this.userLocal.pers_nombres,
            camp_id:camp_id,
            etiq_id:etiq_id
          },
          opcion:"SCU",
          _limite:0,
          _offset:0
        }

        this._campaniasServices.postCampaniasByUsers(obj).subscribe(
          (response:any) => {
            console.log(response)
            if(response.code==200){
              this._systemServices.showAlertSuccessCenter(response.message);
              //this.getCampanias();
  
            }
          },
          (error) => {
            
            console.log(error);
              this._systemServices.showAlertError(error.error.error);
              //this.getCampanias();
  
            //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });
  
          }
        );


        /* const obj={
          opcion:'SCU',

        } */
        Swal.fire('Enviada!', 'Tu campaña se esta enviando a los clientes que comparten esta etiqueta: ' + etiqueta, 'success');
        this.onCancel();
      }
    });
  }


  onCancel(): void {
    this.dialogRef.close();
  }
}
