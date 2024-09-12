import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';

import { twilioServiceCRM } from './../../../servicesTRAVE/twilio/twilio.service';
import { SystemServices } from 'app/servicesTRAVE/systemServices/alerts.service';

@Component({
  selector: 'app-cuentas',
  standalone: true,
  imports        : [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatInputModule, TextFieldModule, MatSelectModule, MatOptionModule, MatButtonModule],

  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cuentas.component.html',
  styleUrl: './cuentas.component.scss',
  providers:[]
})
export class CuentasComponent implements OnInit{
  accountForm: UntypedFormGroup;
  accountForm_1: FormGroup;
  constructor(
    //private _formBuilder: UntypedFormBuilder,
    private _formBuilder: FormBuilder,
    private _parametrosTwiloService: twilioServiceCRM,
    private _systemServices:SystemServices
  )
  {
  }

  ngOnInit(): void
    {
        this.accountForm_1 = this._formBuilder.group({
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
        param_tipo:"Twilio",
        opcion:"CP",
        _limite:null,
        _offset:null
    }

      this._parametrosTwiloService.getTwilio(obj).subscribe(
        (response:any) => {
          console.log(response)
          this.accountForm_1.patchValue({
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


    updateCuentaTwilio(){
      const obj={
        data:this.accountForm_1.value,
        opcion:"U",
        _limite:0,
        _offset:0
    }

      console.log(this.accountForm_1.value)
      this._parametrosTwiloService.putTwilio(obj).subscribe(
        (response:any) => {
          console.log(response)
          if (response.code=200){
            this._systemServices.showAlertSuccessCenter(response.message);
            this.accountForm_1.patchValue({
              param_tipo: response.data.param_tipo,
              accountsid:  response.data.accountsid,
              authtoken   :  response.data.authtoken,
              numtelephone : response.data.numtelephone
            });
          }
          
        },
        (error) => {
           
            this._systemServices.showAlertError(JSON.stringify (error));
          

          //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });
          console.log(error);

        }
      );
    }

}
