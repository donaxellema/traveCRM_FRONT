import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { AuthUtils } from 'app/core/auth/auth.utils';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
;


import Base64 from 'crypto-js/enc-base64';
import HmacSHA256 from 'crypto-js/hmac-sha256';
import {global} from '../global';


@Injectable({
  providedIn: 'root'
})
export class ImportContactosServiceCRM {
    
    private apiUrl = global.url;

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

    getContactosWhatsapp(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}get-contactos/`);
      }


    /* getContactosWhatsapp(): Observable<any> {
        let paramsSeteados = new HttpParams();
    
        
        const appendParams = (obj: any, prefix: string = '') => {
            for (const key in obj) {
              if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                const paramKey = prefix ? `${prefix}.${key}` : key;
                if (typeof value === 'object' && value !== null) {
                  appendParams(value, paramKey);
                } else {
                    paramsSeteados = paramsSeteados.set(paramKey, value);
                }
              }
            }
          };
        
        //appendParams(data);
        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', this.accessToken ?  `${this.accessToken}`:'');
        return this.http.get(`${this.apiUrl}get-contactos/`, { headers: headers, params: paramsSeteados });
    } */




        //private apiUrl = 'http://localhost:3000/api/upload'; // Cambia esto según tu backend

        //constructor(private http: HttpClient) {}
      
        uploadFile(file: File): Observable<any> {
          const formData = new FormData();
          formData.append('file', file);
      
          return this.http.post(`${this.apiUrl}upload-contacts/`, formData, {
            reportProgress: true,
            observe: 'events',
          });
        }

}