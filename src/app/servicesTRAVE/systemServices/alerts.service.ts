import { Injectable, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
  })
  export class SystemServices {
  
  
    //private sucursal: Sucursal = new Sucursal()
    mostrarSpinner: boolean = false;
    settingSystem:any;
    constructor(
      //public spinner: NgxSpinnerService,
      private http: HttpClient,
    ) {
        
    }




  /* INICIO Seccion de Alertas  */
  showAlertSuccessTop(mensaje: string) {

    swal.fire({
        position: "top-end",
        //title: mensaje,
        text: mensaje,
        buttonsStyling: false,
        customClass: {
            confirmButton: "btn btn-success",
        },
        icon: "success"
    });

}

showAlertSuccessTopCorto(mensaje: string) {

    swal.fire({
        position: "top-end",
        icon: "success",
        title: mensaje,
        showConfirmButton: false,
        timer: 3000
    });

}

showAlertSuccessCenter(mensaje: string) {
    swal.fire({
        title: mensaje,
        //text: mensaje,
        buttonsStyling: true,
       /*  customClass: {
            confirmButton: "btn btn-success",
        }, */
        icon: "success"
    });
}

showAlertSuccessCenterDetail(mensaje: string, detalle: string) {

    swal.fire({
        title: mensaje,
        text: detalle,
        buttonsStyling: false,
        customClass: {
            confirmButton: "btn btn-success",
        },
        icon: "success"
    });

}

showAlertError(mensaje: string) {

    swal.fire({
        position: "center",
        icon: "error",
        title: mensaje,
        showConfirmButton: false,
        //timer: 2000
    });

}

showAlertErrorTop(mensaje: string) {

    swal.fire({
        position: "top-end",
        icon: "error",
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
    });

}

showAlertInfo(mensaje: string) {
    swal.fire({
        position: "center",
        icon: "info",
        //title: mensaje,
        text: mensaje,
        showConfirmButton: false,

    });
}

showAlertInfoDetail(titulo: string, mensaje: string) {
    swal.fire({
        position: "center",
        icon: "info",
        title: titulo,
        text: mensaje,
        showConfirmButton: false,

    });
}

showAlertInfoTiempo(mensaje: string, tiempo: number = 2000) {
    swal.fire({
        position: "center",
        icon: "info",
        //title: mensaje,
        text: mensaje,
        showConfirmButton: false,
        timer: tiempo
    });
}

showAlertInfoTop(mensaje: string) {
    swal.fire({
        position: "top-end",
        icon: "info",
        //title: mensaje,
        text: mensaje,
        showConfirmButton: false,

    });
  }

  

 
  /* FIN Seccion de Alertas  */

  }