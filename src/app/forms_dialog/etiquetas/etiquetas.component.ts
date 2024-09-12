import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';




import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { etiquetasServiceCRM } from './../../servicesTRAVE/etiquetas/etiquetas.service';
import { SystemServices } from 'app/servicesTRAVE/systemServices/alerts.service';


@Component({
  selector: 'app-etiquetas',
  standalone: true,
  imports: [CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './etiquetas.component.html',
  styleUrl: './etiquetas.component.scss'
})
export class EtiquetasDialogComponent implements OnInit  {


  etiq_nombre: any;
  etiq_descrip: any;
  etiq_color: any;
  tipoDialog:any;
  constructor (
    public dialogRef: MatDialogRef<EtiquetasDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _etiquetasServices:etiquetasServiceCRM,
    private _systemServices:SystemServices

  ) {
   /*  console.log(this.data)
    this.etiq_color=null
    this.etiq_descrip=this.data.etiq_descrip
    this.etiq_nombre="this.data.etiq_nombre" */
  }

  ngOnInit(){
    console.log("linea 48 "+ JSON.stringify(this.data))
    //this.etiq_nombre=this.data.etiq_nombre
    this.etiq_color=this.data.etiq_color
    this.etiq_descrip=this.data.etiq_descrip
    this.etiq_nombre=this.data.etiq_nombre

    this.tipoDialog=this.data.tipodialogo

  }
  

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    

    if(this.tipoDialog=='Editar'){
      const objeto = {
        data:this.data,
        opcion:'U',
        _limite:0,
        _offset:0
      };
      this._etiquetasServices.putEtiquetas(objeto).subscribe(
        (response:any) => {
          console.log(response)
          if(response.code==200){
            this._systemServices.showAlertSuccessCenter(response.message);
          }
          /* this.accountForm_1.patchValue({
            param_id: response.data.param_id,
            param_tipo: response.data.param_tipo,
            accountsid:  response.data.accountsid,
            authtoken:  response.data.authtoken,
            numtelephone: response.data.numtelephone
          }); */
          //this.router.navigate(['']);
          //this.router.navigate(['/auth']);
          this.dialogRef.close();

        },
        (error) => {
           
          console.log(error);
            this._systemServices.showAlertError(error.error.error);
          this.dialogRef.close();

          //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });

        }
      );
    }else{
      const objeto = {
        data:{
          etiq_nombre:this.data.etiq_nombre,
          etiq_descrip:this.data.etiq_descrip,
          etiq_color:this.data.etiq_color,
        },
        opcion:'I',
        _limite:0,
        _offset:0
      };
      this._etiquetasServices.postEtiquetas(objeto).subscribe(
        (response:any) => {
          console.log(response)
          if(response.code==200){
            this._systemServices.showAlertSuccessCenter(response.message);
          }
          /* this.accountForm_1.patchValue({
            param_id: response.data.param_id,
            param_tipo: response.data.param_tipo,
            accountsid:  response.data.accountsid,
            authtoken:  response.data.authtoken,
            numtelephone: response.data.numtelephone
          }); */
          //this.router.navigate(['']);
          //this.router.navigate(['/auth']);
          this.dialogRef.close();

        },
        (error) => {
           
          console.log(error);
            this._systemServices.showAlertError(error.error.error);
          this.dialogRef.close();

          //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });

        }
      );
    }

    //this.dialogRef.close(data);
  }



  updateColor(newColor: string) {
    this.etiq_color = newColor;
  }


}
