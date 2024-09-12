import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { SystemServices } from 'app/servicesTRAVE/systemServices/alerts.service';
import { perfilServiceCRM } from 'app/servicesTRAVE/perfil/perfil.service';
import { ActualizaPasswordDialogComponent } from "../actualiza-password-dialog/actualiza-password-dialog.component";

@Component({
  selector: 'app-actualiza-datos-dialog',
  standalone: true,
  imports: [CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule, ActualizaPasswordDialogComponent],
  templateUrl: './actualiza-datos-dialog.component.html',
  styleUrl: './actualiza-datos-dialog.component.scss'
})
export class ActualizaDatosDialogComponent {

  constructor (
    public dialogRef: MatDialogRef<ActualizaDatosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    //private _personasServices:personasServiceCRM,
    //private _etiquetasServices:etiquetasServiceCRM,
    private _perfilServices: perfilServiceCRM,
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
      //this.getEtiquetas();
      //this.seleccionado=this.data.etiq_id 
      console.log("this.data de mi dialog ")
      console.log(this.data)
    }, 50);
  }


  onCancel(): void {
    this.dialogRef.close();
  }




  public nuevaPass:any
  onSave(): void {
      const objeto = {
        data:this.data,
        opcion:'UP',
        _limite:0,
        _offset:0
      };
      this._perfilServices.putPerfil(objeto).subscribe(
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

  



    showChangePassword = false;

    toggleChangePassword() {
      this.showChangePassword = !this.showChangePassword;
    }



}
