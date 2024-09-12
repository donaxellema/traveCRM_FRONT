// image-upload.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {global} from '../global';


@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
    private _authenticated: boolean = false;
    private _httpClient = inject(HttpClient);
    private apiUrl = global.url;
    //private _userService = inject(UserServiceCRM);
    authToken:any;

    get accessToken(): string
  {
      return localStorage.getItem('accessToken') ?? '';
  }

  set authenticated(estado: string)
  {
      localStorage.setItem('authenticated', estado  );
  }

  get authenticated(): string
  {
      return localStorage.getItem('authenticated') ?? '';
  }

  

  constructor(
    private http: HttpClient,
    
) {
    //this.token = localStorage.getItem('token');
}


  uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post(`${this.apiUrl}upload/`, formData);
  }
}