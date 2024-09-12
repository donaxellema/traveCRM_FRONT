import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormsModule, NgForm, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthServiceCRM } from 'app/servicesTRAVE/auth.service';
import { SystemServices } from 'app/servicesTRAVE/systemServices/alerts.service';

@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations,
    standalone   : true,
    imports      : [RouterLink, FuseAlertComponent, NgIf, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatProgressSpinnerModule],
})
export class AuthSignInComponent implements OnInit
{
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: '',
    };
    signInForm: UntypedFormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _systemService: SystemServices,
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _authServiceCRM: AuthServiceCRM,
        private _formBuilder: UntypedFormBuilder,
        private _router: Router,
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.signInForm = this._formBuilder.group({
            usu_email: new FormControl('', [Validators.required, Validators.email]),
            usu_password1: new FormControl('', [Validators.required]),
            rememberMe: new FormControl(''),
            /* email     : ['hughes.brian@company.com', [Validators.required, Validators.email]],
            password  : ['admin', Validators.required],
            rememberMe: [''], */
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    obj_JSON:any = {};
    signIn(): void
    {
        // Return if the form is invalid
        //console.log("respuesta")
        //console.log(this.signInForm.invalid )
        if ( this.signInForm.invalid )
        {
            return;
        }

        // Disable the form
        this.signInForm.disable();

        // Hide the alert
        this.showAlert = false;
        console.log("this.signInForm.value")
        console.log(this.signInForm.value)
        // Sign in
        this.obj_JSON={
            data:this.signInForm.value,
            opcion:"L",
            _limite:0,
            _offset:0
        }

        this._authServiceCRM.login(this.obj_JSON).subscribe(
            response => {
              console.log("response 105")
              console.log(response)
              if (response.code == 200) {
                console.log("dento del 200")
                
                const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
                    console.log("antes de redireccionar ")

                    // Navigate to the redirect url
                    this._router.navigateByUrl(redirectURL);
      
              } else {
                this._systemService.showAlertError(response.message);
                this.signInForm.enable();
                localStorage.removeItem('accessToken')
                localStorage.removeItem('authenticated')
                localStorage.removeItem('user')
                //window.location.reload();
                //this.loginIncorrecto = true
                //this.textoError = response.message
              }
      
            },
            error => {
      
              if (error.status == 400) {
                console.log(JSON.stringify ("error"))
                console.log(JSON.stringify (error))
                this._systemService.showAlertError(error.error.message);
                this.signInForm.enable();
                //this._systemService.showAlertErrorTop("Datos incorrectos")
                //this.loginIncorrecto = true
              }
      
              if (error.status == 500) {
                this._systemService.showAlertError("Error en el Servidor");
                //this._systemService.showAlertInfo("Ya supero la cantidad de sesiones activas asignadas a su plan")
              }
      
            }
          );
        






        /* this._authService.signIn(this.signInForm.value)
            .subscribe(
                () =>
                {
                    // Set the redirect url.
                    // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
                    // to the correct page after a successful sign in. This way, that url can be set via
                    // routing file and we don't have to touch here.
                    const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
                    console.log("antes de redireccionar ")

                    // Navigate to the redirect url
                    this._router.navigateByUrl(redirectURL);

                },
                (response) =>
                {
                    console.log("soy response")
                    console.log(response)
                    // Re-enable the form
                    this.signInForm.enable();

                    // Reset the form
                    this.signInNgForm.resetForm();

                    // Set the alert
                    this.alert = {
                        type   : 'error',
                        message: 'Error en email o contraseña',
                    };

                    // Show the alert
                    this.showAlert = true;
                },
            ); */

            
        }
    //seccion de seteado
    
}
