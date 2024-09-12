import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { perfilServiceCRM } from 'app/servicesTRAVE/perfil/perfil.service';
import { SystemServices } from 'app/servicesTRAVE/systemServices/alerts.service';


@Component({
  selector: 'app-actualiza-password-dialog',
  standalone: true,
  imports: [CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule],
  templateUrl: './actualiza-password-dialog.component.html',
  styleUrl: './actualiza-password-dialog.component.scss'
})
export class ActualizaPasswordDialogComponent {

  changePasswordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _perfilService: perfilServiceCRM,
    private _systemService: SystemServices
  ) 
  {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordsMatchValidator  });
    
  }

  /* passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('newPassword')?.value === formGroup.get('confirmPassword')?.value
      ? null : { mismatch: true };
  } */
 //public password:any;
 //public confirmPassword:any;
      passwordsMatchValidator(form: AbstractControl) {
        const password = form.get('newPassword')?.value;
        const confirmPassword = form.get('confirmPassword')?.value;
    
        if (password !== confirmPassword) {
          form.get('confirmPassword')?.setErrors({ passwordsMismatch: true });
        } else {
          return null;
        }
      }

  private userLocal:any;
  onSubmit() {
    if (this.changePasswordForm.valid) {
      const formData = this.changePasswordForm.value;
      this.userLocal=JSON.parse(localStorage.getItem('user'));
      // Aquí puedes manejar el envío del formulario al backend
      const obj={
        usu_password_new:formData.confirmPassword,
        usu_password1:formData.currentPassword,
        usu_id:this.userLocal.usu_id,
        usu_email:this.userLocal.usu_email
      }
      console.log(obj)
      this._perfilService.postPassword(obj).subscribe(
        (response:any)=>{
          console.log(response)
          this._systemService.showAlertSuccessTop(response.message)
        }
      )
      console.log('Password Change Request:', formData);
    }
  }

}
