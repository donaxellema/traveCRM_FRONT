import { Component } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';


import * as XLSX from 'xlsx';
import { ImportContactosServiceCRM } from 'app/servicesTRAVE/importarContactos/importarcontactos.service';
// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'app-cargamasiva',
    standalone: true,
    imports: [MatFormFieldModule,MatInputModule,CommonModule, MatInputModule,MatButtonModule,MatCardModule,MatProgressBarModule,
        MatSelectModule,MatIconModule],
    templateUrl: './carga_masiva.component.html',
    styleUrl: './carga_masiva.component.scss',
    
  })
  export class CargaMasivaComponent {
    fileName: string = '';
  progress: number = 0;
  isUploading: boolean = false;
  uploadMessage: string = '';

  constructor(private fileUploadService: ImportContactosServiceCRM) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this.fileName = file.name;
      this.isUploading = true;
      this.progress = 0;

      this.fileUploadService.uploadFile(file).subscribe({
        next: (event) => {
          if (event.type === HttpEventType.UploadProgress && event.total) {
            this.progress = Math.round((100 * event.loaded) / event.total);
          } else if (event.type === HttpEventType.Response) {
            this.uploadMessage = `Archivo cargado exitosamente. Total contactos: ${event.body.total}`;
            this.isUploading = false;
          }
        },
        error: () => {
          this.uploadMessage = 'Error al cargar el archivo.';
          this.isUploading = false;
        },
      });
    }
  }

  restartUpload(): void {
    this.fileName = '';
    this.progress = 0;
    this.uploadMessage = '';
  }

  }  