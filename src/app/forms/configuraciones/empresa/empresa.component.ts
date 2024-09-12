import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { empresaServiceCRM } from 'app/servicesTRAVE/empresa/empresa.service';
import { SystemServices } from 'app/servicesTRAVE/systemServices/alerts.service';

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatInputModule, TextFieldModule, MatSelectModule, MatOptionModule, MatButtonModule],
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.scss'
})

export class EmpresaComponent implements OnInit{
  accountForm1: FormGroup;
  /**
     * Constructor
     */
  constructor(
    private _formBuilder: UntypedFormBuilder,
    private _empresasServices: empresaServiceCRM,
    private _systemServices:SystemServices

  )
  {
    
  }

  ngOnInit(): void
  {
      // Create the form
      this.accountForm1 = this._formBuilder.group({
          emp_id    : '',
          emp_nombre: '',
          emp_ruc : '',
          emp_camp1: '',
          emp_camp2: '',
          emp_camp3: '',
          emp_estado: '',
          emp_camp4: '',
      });

      this.getCuentaEmpresa();

  }


  getCuentaEmpresa(){
    const obj={
      emp_nombre:"",
      opcion:"C",
      _limite:null,
      _offset:null
  }

    this._empresasServices.getEmpresa(obj).subscribe(
      (response:any) => {
        console.log(response)
        this.accountForm1.patchValue({
          emp_id: response.data[0].emp_id,
          emp_nombre: response.data[0].emp_nombre,
          emp_ruc: response.data[0].emp_ruc,
          emp_camp1: response.data[0].emp_camp1,
          emp_camp2: response.data[0].emp_camp2,
          emp_camp3: response.data[0].emp_camp3,
          emp_estado: response.data[0].emp_estado,
          emp_camp4: response.data[0].emp_camp4
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






  updateCuentaEmpresa(){
    const obj={
      data:this.accountForm1.value,
      opcion:"U",
      _limite:0,
      _offset:0
  }

    console.log(this.accountForm1.value)
    this._empresasServices.putEmpresa(obj).subscribe(
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
