import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SystemServices } from 'app/servicesTRAVE/systemServices/alerts.service';
import { ImportContactosServiceCRM } from 'app/servicesTRAVE/importarContactos/importarcontactos.service';

@Component({
  selector: 'app-carga-masiva-whatsapp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carga-masiva-whatsapp.component.html',
  styleUrl: './carga-masiva-whatsapp.component.scss'
})
export class CargaMasivaWhatsappComponent {


  loading: boolean = false;
  progress: number = 0;
  contacts: any[] = [];

  constructor(
    private http: HttpClient,
    private _importContactosServices :ImportContactosServiceCRM,
    private _systemServices: SystemServices
  ) {}

  totalElementos=0;
  loadContacts() {
    this.loading = true;
    this.progress = 0;
    
    this._importContactosServices.getContactosWhatsapp().subscribe(
      (response: any) => {
        const data = response.data; // Suponiendo que los contactos vienen en `response.data`.
        const total = data.length; // Total de contactos.
        this.contacts = [];
        this.totalElementos = response.totalItems; // Si la respuesta incluye un total de elementos.
        this.loading = true; // Inicia la carga.
    
        data.forEach((contact: any, index: number) => {
          setTimeout(() => {
            this.contacts.push(contact);
            this.progress = ((index + 1) / total) * 100; // Calcula el progreso.
    
            if (this.progress === 100) {
              this.loading = false; // Finaliza la carga al 100%.
            }
          }, 100 * index); // Simula la carga progresiva.
        });
    
        console.log('Contactos cargados:', this.contacts);
      },
      (error) => {
        console.error('Error al cargar contactos:', error);
        this._systemServices.showAlertError(error.error?.error || 'Error desconocido');
        this.loading = false; // Detiene la carga en caso de error.
      }
    );

    /*
    this.http.get<any[]>('/api/whatsapp/contacts').subscribe({
      next: (data) => {
        const total = data.length;
        this.contacts = [];

        data.forEach((contact, index) => {
          setTimeout(() => {
            this.contacts.push(contact);
            this.progress = ((index + 1) / total) * 100;

            if (this.progress === 100) {
              this.loading = false;
            }
          }, 100 * index); // Simula una carga progresiva.
        });
      },
      error: (err) => {
        console.error('Error al cargar contactos:', err);
        this.loading = false;
      },
    });*/

  }

}
