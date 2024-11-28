import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SystemServices } from 'app/servicesTRAVE/systemServices/alerts.service';
import { ImportContactosServiceCRM } from 'app/servicesTRAVE/importarContactos/importarcontactos.service';


import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-carga-masiva-whatsapp',
  standalone: true,
  imports: [CommonModule,MatProgressBarModule,MatButtonModule,MatCardModule,MatListModule,MatIconModule],
  templateUrl: './carga-masiva-whatsapp.component.html',
  styleUrl: './carga-masiva-whatsapp.component.scss'
})
export class CargaMasivaWhatsappComponent {
  contacts: any[] = [];
  progress = 0; // Progreso de la importación
  loading = false;
  importedContacts = 0; // Porcentaje de contactos importados exitosamente

  constructor(private whatsappContactsService: ImportContactosServiceCRM) {}

  ngOnInit(): void {}

  loadContacts() {
    this.loading = true;
    this.contacts = [];
    this.progress = 0;
    this.importedContacts = 0;

    this.whatsappContactsService.getContactosWhatsapp().subscribe({
      next: (response) => {
        const total = response.data.length;

        // Procesar contactos uno por uno simulando carga progresiva
        response.data.forEach((contact: any, index: number) => {
          setTimeout(() => {
            this.contacts.push(contact);
            this.progress = ((index + 1) / total) * 100; // Actualizar progreso

            if (this.progress === 100) {
              this.loading = false;

              // Simular el porcentaje de contactos importados exitosamente
              // Aquí puedes cambiar la lógica para reflejar los datos reales
              this.importedContacts = Math.round((this.contacts.length / total) * 100);
            }
          }, 200 * index); // Retraso en la carga de cada contacto
        });
      },
      error: (err) => {
        console.error('Error al cargar contactos:', err);
        this.loading = false;
      },
    });
  }

  reloadContacts() {
    this.loadContacts();
  }
}
