import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { twilioServiceCRM } from './../../../servicesTRAVE/twilio/twilio.service';
import { SystemServices } from 'app/servicesTRAVE/systemServices/alerts.service';

@Component({
  selector: 'app-parametros',
  standalone: true,
  imports        : [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatInputModule, TextFieldModule, MatSelectModule, MatOptionModule, MatButtonModule],

  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './parametros.component.html',
  styleUrl: './parametros.component.scss'
})
export class ParametrosComponent {

  accountForm: UntypedFormGroup;
  accountForm_Tiempo: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _parametrosTiempoService: twilioServiceCRM,
    private _systemServices:SystemServices

  )
  {
  }

  ngOnInit(): void
    {
      this.accountForm_Tiempo = this._formBuilder.group({
        param_id:null,
        param_tipo:'',
        accountsid:'',
        authtoken:'',
        numtelephone:''
      });
      this.getCuentaTwilio();

    }



    getCuentaTwilio(){
      const obj={
        param_tipo:"Tiempo",
        opcion:"CP",
        _limite:null,
        _offset:null
    }

      this._parametrosTiempoService.getTwilio(obj).subscribe(
        (response:any) => {
          console.log(response)
          this.accountForm_Tiempo.patchValue({
            param_id: response.data.param_id,
            param_tipo: response.data.param_tipo,
            accountsid:  response.data.accountsid,
            authtoken:  response.data.authtoken,
            numtelephone: response.data.numtelephone
        });
          //this.router.navigate(['']);
          //this.router.navigate(['/auth']);
        },
        (error) => {
           
          console.log(error);
            this._systemServices.showAlertError(error.error.error);
          //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });

        }
      );
    }


    updateCuentaTiempo(){
      const obj={
        data:this.accountForm_Tiempo.value,
        opcion:"U",
        _limite:0,
        _offset:0
    }

      console.log(this.accountForm_Tiempo.value)
      this._parametrosTiempoService.putTwilio(obj).subscribe(
        (response:any) => {
          console.log(response)
          if (response.code=200){
            this._systemServices.showAlertSuccessCenter(response.message);
            /* this.accountForm_1.patchValue({
              param_tipo: response.data.param_tipo,
              accountsid:  response.data.accountsid,
              authtoken   :  response.data.authtoken,
              numtelephone : response.data.numtelephone
            }); */
          }
          
          //this.router.navigate(['']);
          //this.router.navigate(['/auth']);
        },
        (error) => {
           
            this._systemServices.showAlertError(JSON.stringify (error));
          

          //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });
          console.log(error);

        }
      );
    }


}
