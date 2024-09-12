import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FuseCardComponent } from '@fuse/components/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import {global} from '../../servicesTRAVE/global';
import { campaniasServiceCRM } from 'app/servicesTRAVE/campanias/campanias.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { SystemServices } from 'app/servicesTRAVE/systemServices/alerts.service';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CampaniasAllDialogComponent } from 'app/forms_dialog/campanias-all-dialog/campanias-all-dialog.component';
import { perfilServiceCRM } from 'app/servicesTRAVE/perfil/perfil.service';
import { FormsModule } from '@angular/forms';
import { ActualizaDatosDialogComponent } from 'app/forms_dialog/actualiza-datos-dialog/actualiza-datos-dialog.component';
import { ImageUploadService } from 'app/servicesTRAVE/subirArchivos/subirArchivos.service';


/* @Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
}) */
  @Component({
    selector       : 'app-perfil',
    templateUrl: './perfil.component.html',
    styleUrl: './perfil.component.scss',
    //encapsulation  : ViewEncapsulation.None,
    //changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [RouterLink, FuseCardComponent, MatIconModule, MatButtonModule, 
      MatMenuModule, MatFormFieldModule, MatInputModule, TextFieldModule,
      MatDividerModule, MatTooltipModule, NgClass,CommonModule,DatePipe,FormsModule],
})

export class PerfilComponent implements OnInit {


  campaniasDataCambiante = new BehaviorSubject<any[]>([]);
  campaniasData : any;
  private searchSubject: Subject<string> = new Subject();
  searchTerm: string = '';
  public index:number = 0
  public limit:number = 5
  public offset:number = 0
  totalElementos = 0;
  public pageEvent: PageEvent = new PageEvent;
  constructor(
    public dialog: MatDialog,
    private _imageUploadService: ImageUploadService,
    private _campaniasServices : campaniasServiceCRM,
    private _perfilServices: perfilServiceCRM,
    private _systemServices : SystemServices
  ){

  }

  habilitaChangeFoto:boolean=false;
  user:any;
  public urlImagen = global.urlImagen;
  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('user')); 
    //const direccion='agentes'+this.user.usu_banner;
    //this.user=direccion; 
    
    //this.getCampanias();

    setTimeout(() => {
      //this.isLoading = true;
      //this.cdr.detectChanges(); // Forzar detección de cambios
      //this.tipoDialog=this.data.tipodialogo;
      this.getCampanias();
      //this.seleccionado=this.data.etiq_id 
      //console.log(this.data)
    }, 50);


    this.getDataPerfil();
  }

  habilitaChangePhoto(estado:boolean){
    console.log(estado)
    this.habilitaChangeFoto= !estado

  }




  public getServerData(event: PageEvent): PageEvent {
    this.index = event.pageIndex
    this.limit = event.pageSize
    this.offset=this.index * this.limit
    this.getCampanias();
    return event
  }


  getCampanias(){
    const obj={
      camp_id:"",
      opcion:"C",
      _limite:this.limit,
      _offset:this.offset
    }
    this._campaniasServices.getCampanias(obj).subscribe(
      (response:any) => {
        console.log(response)
        this.campaniasData=response.data
        //alert(JSON.stringify(response.data));
        this.totalElementos = response.totalItems
        //this.campaniasDataCambiante.next(response.data)

        console.log("this.personDataCambiante")
        console.log(this.campaniasData)
      },
      (error) => {
         
        console.log(error);
          this._systemServices.showAlertError(error.error.error);
        //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });

      }
    );
  }


  //actualizar mis datos
  public dataPerf:any
  getDataPerfil(){
    const usu_id= this.user.usu_id
    const obj={
      usu_id:usu_id,
      opcion:"CP",
      _limite:this.limit,
      _offset:this.offset
  }
    this._perfilServices.getPerfilBY_ID(obj).subscribe(
      (response:any) => {
        if(response.code=200){
          console.log("response")
          console.log(response)
          this.dataPerf=response.data[0]
          //this.dialogoEditarAGENTE_Persona(response.data,response.persona)
        }
      },
      (error) => {
          this._systemServices.showAlertError(error.error.error);
      }
    );
  }



  dialogoEditarPerfil(data:any):void{
    console.log("data")
    console.log(data)
    data.tipodialogo="Editar"
    //data.usuario=this.userLocal.pers_nombres
    const dialogRef = this.dialog.open(ActualizaDatosDialogComponent, {
      width: '450px',
      data: data ,
      disableClose: true,
      
    });

    dialogRef.afterClosed().subscribe(result => {
      /* console.log("result")
      console.log(result)
      if (result) {
        console.log('Datos recibidos:', result);
        // Aquí puedes manejar los datos recibidos
      } */
        this.getDataPerfil();
        this.user.usu_descripcion=this.dataPerf.usu_descripcion
    });

    }




  
  //actualizar foto Perfil o Banner
  changueFotoPerfil_Banner(){
    
  }


  //carga los clientes que tiene asignados
  getDataClientesAsignados(){

  }


  public data:any;
  dialogoCampanias():void{
    this.data={
      tipodialogo:"Ver Campanias",
      //usuario:this.userLocal.pers_nombres
    }
    const dialogRef = this.dialog.open(CampaniasAllDialogComponent, {
      width: '700px',
      data: this.data ,
      disableClose: true,
      
    });

    dialogRef.afterClosed().subscribe(result => {
      /* console.log("result")
      console.log(result)
      if (result) {
        console.log('Datos recibidos:', result);
        // Aquí puedes manejar los datos recibidos
      } */
        //this.getPersonas();
    });

  }


  removeAvatar(): void
    {
        // Get the form control for 'avatar'
        //const avatarFormControl = this.contactForm.get('avatar');

        // Set the avatar as null
        //avatarFormControl.setValue(null);
        this.user.usu_imagen='sinImagen.jpg'
        // Set the file input value as null
        //this._avatarFileInput.nativeElement.value = null;

        // Update the contact
        //this.contact.avatar = null;
    }
  
    removeBanner(): void
    {
        // Get the form control for 'avatar'
        //const avatarFormControl = this.contactForm.get('avatar');

        // Set the avatar as null
        //avatarFormControl.setValue(null);
        this.user.usu_banner='sinImagen.jpg';
        // Set the file input value as null
        //this._avatarFileInput.nativeElement.value = null;

        // Update the contact
        //this.contact.avatar = null;
    }


    selectedFile: File | null = null;
    onFileChange(event: any) {
      //this.urlImagendesdeServer=null;
      const file = event.target.files[0];
      if (file) {
        this.selectedFile = file;
        const reader = new FileReader();
        //reader.onload = e => this.user.usu_banner = reader.result;
        reader.readAsDataURL(file);
      }

      if (file) {
        //console.log(this.selectedFile)
        this._imageUploadService.uploadImage(this.selectedFile).subscribe(
          (response) => {
            console.log('Imagen subida exitosamente:', response);
            //this.usuario.usu_imagen=response.filename
            this.user.usu_banner = response.filename;
              const objImagen=
              {
                data:{
                  usu_imagen:this.user.usu_imagen,
                  usu_banner:this.user.usu_banner,
                  usu_id:this.user.usu_id
                },
                opcion:'UI',
                _limite:0,
                _offset:0
            }
              this._perfilServices.putImagen(objImagen).subscribe(
                (response:any) => {
                  //console.log('Imagen subida exitosamente:', response);
                  //this.usuario.usu_imagen=response.filename
                  //this.user.usu_banner = response.filename;
                  this._systemServices.showAlertSuccessCenter(response.message)
                  
                },
                (error) => {
                  console.error('Error subiendo la imagen:', error);
                }
              );
              
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
    
    selectedFileAvatar: File | null = null;
    onFileChangeAvatar(event: any) {
      //this.urlImagendesdeServer=null;
      const file = event.target.files[0];
      if (file) {
        this.selectedFileAvatar = file;
        const reader = new FileReader();
        //reader.onload = e => this.user.usu_imagen = reader.result;
        console.log("this.user.usu_imagen")
        console.log(this.user.usu_imagen)
        reader.readAsDataURL(file);
      }

      if (file) {
        console.log(this.selectedFileAvatar)
        this._imageUploadService.uploadImage(this.selectedFileAvatar).subscribe(
          (response) => {
            this.user.usu_imagen = response.filename;
            console.log("this.user.usu_imagen")
            console.log(this.user.usu_imagen)
            console.log('Imagen subida exitosamente:', response);
            //this.usuario.usu_imagen=response.filename
            //this.user.usu_imagen = response.filename;
              const objImagen=
              {
                data:{
                  usu_imagen:this.user.usu_imagen,
                  usu_banner:this.user.usu_banner,
                  usu_id:this.user.usu_id
                },
                opcion:'UI',
                _limite:0,
                _offset:0
            }
              this._perfilServices.putImagen(objImagen).subscribe(
                (response:any) => {
                  //console.log('Imagen subida exitosamente:', response);
                  //this.usuario.usu_imagen=response.filename
                  //this.user.usu_banner = response.filename;
                  //this._systemServices.showAlertSuccessCenter(response.message)
                  console.log(response)
                },
                (error) => {
                  console.error('Error subiendo la imagen:', error);
                }
              );
              
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

    


    /* onFileChange(event: any) {
      console.log(event)
      //this.urlImagendesdeServer=null;
      const file = event.target.files[0];
      //console.log(file)
      if (file) {
        this.selectedFile = file;
        const reader = new FileReader();
        //this.user.usu_banner='sinImagen.jpg';
        console.log("reader.result")
        console.log(file.name)
        reader.onload = e => this.user.usu_banner = reader.result;
        //reader.onload = e => this.imageUrl = reader.result;
        reader.readAsDataURL(file);
      }
    } */


    /* onFileChange(event: Event): void {
      const input = event.target as HTMLInputElement;
    
      if (input.files && input.files.length > 0) {
        const file = input.files[0]; // Toma el primer archivo (en este caso es solo uno)
        const fileName = file.name;
        //console.log("Nombre del archivo seleccionado:", fileName);
      }
    } */


    /* onFileChange(event: Event): void {
      console.log(event)
      const input = event.target as HTMLInputElement;
    
      if (input.files && input.files.length > 0) {
        const file = input.files[0]; // Toma el primer archivo (solo uno)
        const fileName = file.name;
        console.log("Nombre del archivo seleccionado:", fileName);
        // Aquí puedes hacer algo más con el archivo, como subirlo o mostrar su nombre.
      }
    } */

      /* onFileChange(event: Event): void {
        const input = event.target as HTMLInputElement;
      
        if (input.files && input.files.length > 0) {
          const file = input.files[0]; // Captura el primer archivo
          const fileName = file.name; // Captura el nombre del archivo
          console.log("Nombre del archivo seleccionado:", fileName);
          
          // Aquí puedes manejar el archivo, subirlo a tu backend o hacer otras operaciones
        } else {
          console.log("No se ha seleccionado ningún archivo.");
        }
      } */

    



  darkenColor(color: string, percent: number): string {
    let usePound = false;
    
    if (color[0] === "#") {
      color = color.slice(1);
      usePound = true;
    }
    
    let num = parseInt(color, 16);
    let r = (num >> 16) * (1 - percent / 100);
    let g = ((num >> 8) & 0x00FF) * (1 - percent / 100);
    let b = (num & 0x0000FF) * (1 - percent / 100);
    
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);
    
    return (usePound ? "#" : "") + 
      r.toString(16).padStart(2, '0') + 
      g.toString(16).padStart(2, '0') + 
      b.toString(16).padStart(2, '0');
  }

}
