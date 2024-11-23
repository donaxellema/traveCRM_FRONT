import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';



@Component({
    selector: 'app-cargamasiva',
    standalone: true,
    imports: [MatFormFieldModule,MatInputModule,CommonModule, MatInputModule,
        MatSelectModule,MatIconModule],
    templateUrl: './carga_masiva.component.html',
    styleUrl: './carga_masiva.component.scss',
    
  })
  export class CargaMasivaComponent {
    selectedFile: File | null = null;
  fileName: string = '';
  isLoading: boolean = false;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  // Método que maneja la selección del archivo
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.fileName = this.selectedFile ? this.selectedFile.name : '';
  }

  // Método que maneja el envío del formulario y la carga del archivo
  onUpload(event: Event) {
    event.preventDefault();  // Evita que la página se recargue

    if (this.selectedFile) {
      this.isLoading = true;
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // Enviar archivo al backend
      this.http.post('http://localhost:3000/api/uploadcontac', formData).subscribe(
        (response: any) => {
          this.isLoading = false;
          this.snackBar.open('Archivo cargado exitosamente.', 'Cerrar', { duration: 3000 });
        },
        (error) => {
          this.isLoading = false;
          this.snackBar.open('Error al cargar el archivo.', 'Cerrar', { duration: 3000 });
        }
      );
    }
  }

  }  