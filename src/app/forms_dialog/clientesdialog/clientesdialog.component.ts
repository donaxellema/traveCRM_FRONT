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
import { MatIconModule } from '@angular/material/icon';
import { ImageUploadService } from 'app/servicesTRAVE/subirArchivos/subirArchivos.service';
import Swal from 'sweetalert2';
import {global} from '../../servicesTRAVE/global';
import { AgentesServiceCRM } from 'app/servicesTRAVE/agentes/agentes.service';
import { debounceTime, distinctUntilChanged, of, Subject } from 'rxjs';
import { ClientesServiceCRM } from 'app/servicesTRAVE/clientes/cliente.service';



@Component({
  selector: 'app-clientesdialog',
  standalone: true,
  imports: [CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatIconModule],
  templateUrl: './clientesdialog.component.html',
  styleUrl: './clientesdialog.component.scss'
})
export class ClientesdialogComponent {

  public urlImagen = global.urlImagen;
  public persona:any={};
  public usuario:any={};
  urlImagendesdeServer: any;

  private searchSubject: Subject<string> = new Subject();
  
  constructor (
    private imageUploadService: ImageUploadService,
    private _servicePersona: personasServiceCRM,
    public dialogRef: MatDialogRef<ClientesdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _clientesService:ClientesServiceCRM, 
    private _systemServices:SystemServices,
    private cdr: ChangeDetectorRef,
    private _etiquetasServices:etiquetasServiceCRM,
  ) {
    /* console.log("this.data")
    console.log(this.data) */
    if(this.data.data.tipodialogo =='Editar'){
      this.seleccionado=this.data.data[0].etiq_id;
      /* console.log("this.seleccionado")
      console.log(this.seleccionado) */
      this.usuario=this.data.data[0];
      this.persona=this.data.persona[0];
      this.rolSeleccionado=this.usuario.usu_rol
      this.urlImagendesdeServer=this.usuario.usu_imagen
    }else{

    }
    
  }
  tipoDialog:any;
  isLoading: boolean = false;




  ngOnInit(){

    //this.seleccionado=this.data.data[0].etiq_id;
    if(this.data.data.tipodialogo=='Editar'){
      this.seleccionado=this.data.data[0].etiq_id;
    }
    
    this.searchSubject.pipe(
      debounceTime(300), // Retardo de 300 ms para evitar múltiples llamadas rápidas
      distinctUntilChanged() // Evita llamadas si el valor no ha cambiado
    ).subscribe(searchTerm => {
      if (searchTerm.length >= 3) {
        //this.performSearch(searchTerm);
        this.buscarPersona()
      }else{
        this.persona={}
        //this.getPersonas()
      }
    });


    //setTimeout(() => {
      this.isLoading = true;
      this.cdr.detectChanges(); 
      this.tipoDialog=this.data.data.tipodialogo;
      /* console.log("usuario "+JSON.stringify(this.data.data[0]))
      console.log("persona "+JSON.stringify (this.data.persona[0]) ) */



      setTimeout(() => {
        //this.isLoading = true;
        //this.cdr.detectChanges(); // Forzar detección de cambios
        //this.tipoDialog=this.data.tipodialogo;
        this.getEtiquetas();
        //this.seleccionado=this.data.etiq_id 
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



  public userToken:any
  getToken(){
    this.userToken= localStorage.getItem('user');
    this.userToken= JSON.parse(this.userToken)
  }
  
  passwordNew:any;
  onSave(): void {
    this.getToken()
    /* console.log("this.data en el dialog")
    console.log(this.data)  */

    //this.data.etiq_id=this.seleccionado;
    if(this.estadoPassword==true){
      this.usuario.usu_password=this.passwordNew
    }

    if(this.tipoDialog=='Editar'){
      //this.data[0].personas=this.persona[0]
      this.persona.usuario=this.userToken.pers_nombres
      this.usuario.personas=this.persona
      this.usuario.usuario=this.userToken.pers_nombres
      this.usuario.etiq_id=this.seleccionado;

      const objeto = {
        data:this.usuario,
        opcion:'U',
        _limite:0,
        _offset:0
      };
      this._clientesService.putClientes(objeto).subscribe(
        (response:any) => {
          console.log(response)
          if(response.code==200){
            this._systemServices.showAlertSuccessCenter(response.message);
          }
          this.dialogRef.close();

        },
        (error) => {
           
          //console.log(error);
            this._systemServices.showAlertError(error.error.error);
          this.dialogRef.close();
        }
      );
    }else{
      this.persona.usuario=this.userToken.pers_nombres
      this.usuario.personas=this.persona
      this.usuario.usuario=this.userToken.pers_nombres

      this.usuario.etiq_id=this.seleccionado;


       const objeto = {
        data:this.usuario,
        opcion:'I',
        _limite:0,
        _offset:0
      };

      /* console.log("first 216")
      console.log(JSON.stringify(objeto)) */

      this._clientesService.postClientes(objeto).subscribe(
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






  imageUrl: string | ArrayBuffer | null = null;
    rolSeleccionado:any
  estadoPassword:boolean=false
  selectedFile: File | null = null;
  onFileChange(event: any) {
    this.urlImagendesdeServer=null;
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = e => this.imageUrl = reader.result;
      reader.readAsDataURL(file);
    }
  }


  onUpload() {
    if (this.selectedFile) {
      console.log(this.selectedFile)
      this.imageUploadService.uploadImage(this.selectedFile).subscribe(
        (response) => {
          console.log('Imagen subida exitosamente:', response);
          this.usuario.usu_imagen=response.filename
        },
        (error) => {
          console.error('Error subiendo la imagen:', error);
        }
      );
    } else {
      console.error('No se ha seleccionado ninguna imagen');
      this._systemServices.showAlertErrorTop("No se ha seleccionado ninguna imagen")
    }
  }









  searchQuery = '';
  filteredResults: any[] = [];
  selectedResult: any;



  

  cargaDataEnForm(){
    "me llamaron en carga por cambio"
    this.persona=this.allResults.data
  }


  // Simulación de búsqueda en el servidor
  public allResults:any;
  onSearchChange(searchTerm:string) {
    this.searchSubject.next(searchTerm);
  }

  buscarPersona(){
    const obj={
      buscar:this.searchQuery,
      opcion:"S",
      _limite:100,
      _offset:0
  }
    this._servicePersona.getPersonasSearch(obj).subscribe(
      (result=>
        {
          console.log("result")
          console.log(JSON.stringify(result.data))
          this.allResults = result.data;
          const objV={
            //buscar:this.searchQuery,
            pers_id:result.data[0].pers_id,
            opcion:"V",
            _limite:100,
            _offset:0
          }



          this._clientesService.getVerificacionDEClientes(objV).subscribe(
            (response:any) => {
              console.log(JSON.stringify(response))
              if(response.code=200){
              this.persona=result.data[0]
                
              }
            },
            (error) => {
              console.error('Error :', error);
            }
          );

          //this._agentesService.getVerificacionDEAgentes(objV).subscribe
          //this.persona=result.data[0]


        }
      )

    )    
  }



  onChangeOpcion(event: any) {
    console.log(event.value);
  }
  seleccionado: number;

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
        console.log("response.data")
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




  getColor(etiq_id: number): string {
    const etiqueta = this.etiquetasData.find(e => e.etiq_id === etiq_id);
    return etiqueta ? etiqueta.etiq_color : 'transparent';
  }

}
