import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { AuthUtils } from 'app/core/auth/auth.utils';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import {global} from '../global';


import Base64 from 'crypto-js/enc-base64';
import HmacSHA256 from 'crypto-js/hmac-sha256';


@Injectable({
  providedIn: 'root'
})
export class AgentesServiceCRM {
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
  


    /* 


    getPersonas(data:any, prefix: string = ''): Observable<any> {
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
        
        appendParams(data);
          console.log("mi parametro seteado "+ paramsSeteados)
          console.log("this.accessToken")
          console.log(this.accessToken)
        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', this.accessToken ?  `${this.accessToken}`:'');
        return this.http.get(`${this.apiUrl}agentes/`, { headers: headers, params: paramsSeteados });
    }
     */
    

    /*
    
    
    
    deleteAgentes(data:any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('Authorization', (this.accessToken != null) ? this.accessToken : '');
        let httpParams = new HttpParams()
            //.set("id", id)
        return this.http.post(`${this.apiUrl}agentesDelete/`, data,{ headers: headers, params: httpParams });
    } */

    // DELETE AGENTES 
    postDELETEAgentes(data:any): Observable<any> {
      let headers = new HttpHeaders().set('Content-Type', 'application/json')
          .set('Authorization', (this.accessToken != null) ? this.accessToken : '');
      let httpParams = new HttpParams()
          //.set("id", id)
      return this.http.post(`${this.apiUrl}agentes_delete/`, data,{ headers: headers, params: httpParams });
  }


    //PERMITE VERIFICAR SI EXISTE UN USUARIO CON EL PERFIL DE AGENTE 
    getVerificacionDEAgentes(data:any, prefix: string = ''): Observable<any> {
        let paramsSeteados = new HttpParams();
        console.log("data services")
        console.log(data)
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
        
        appendParams(data);
          console.log("mi parametro seteado "+ paramsSeteados)
          console.log("this.accessToken")
          console.log(this.accessToken)
        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', this.accessToken ?  `${this.accessToken}`:'');
        return this.http.get(`${this.apiUrl}agentes_verifica/`, { headers: headers, params: paramsSeteados });
    }


    // CREAR AGENTES 
    postAgentes(data:any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('Authorization', (this.accessToken != null) ? this.accessToken : '');
        let httpParams = new HttpParams()
            //.set("id", id)
        return this.http.post(`${this.apiUrl}agentes/`, data,{ headers: headers, params: httpParams });
    }

    putAgentes(data:any): Observable<any> {
        console.log(data)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('Authorization', (this.accessToken != null) ? this.accessToken : '');
        let httpParams = new HttpParams()
            //.set("id", id)
        return this.http.put(`${this.apiUrl}agentes/`, data,{ headers: headers, params: httpParams });
    }

    getAgentesYPersonasBY_ID(data:any, prefix: string = ''): Observable<any> {
        let paramsSeteados = new HttpParams();
        console.log("data services")
        console.log(data)
    
        
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
        
        appendParams(data);
          console.log("mi parametro seteado "+ paramsSeteados)
          console.log("this.accessToken")
          console.log(this.accessToken)
        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', this.accessToken ?  `${this.accessToken}`:'');
        return this.http.get(`${this.apiUrl}agentes_by_id/`, { headers: headers, params: paramsSeteados });
    }
    
    
    
    getAgentesYPersonasSearch(data:any, prefix: string = ''): Observable<any> {
        let paramsSeteados = new HttpParams();
        console.log("data services")
        console.log(data)
    
        
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
        
        appendParams(data);
          console.log("mi parametro seteado "+ paramsSeteados)
          console.log("this.accessToken")
          console.log(this.accessToken)
        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', this.accessToken ?  `${this.accessToken}`:'');
        return this.http.get(`${this.apiUrl}agentes_search/`, { headers: headers, params: paramsSeteados });
    }


    
    
    getAgentesY_Personas(data:any, prefix: string = ''): Observable<any> {
        let paramsSeteados = new HttpParams();
        console.log("data services")
        console.log(data)
    
        
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
        
        appendParams(data);
          console.log(this.accessToken)
        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', this.accessToken ?  `${this.accessToken}`:'');
        return this.http.get(`${this.apiUrl}agentes/`, { headers: headers, params: paramsSeteados });
    }



    //CARGA DE USUARIOS EN LINEA
    getAgentesY_PersonasEN_LINIEA(data:any, prefix: string = ''): Observable<any> {
      let paramsSeteados = new HttpParams();
      console.log("data services")
      console.log(data)
  
      
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
      
      appendParams(data);
        console.log(this.accessToken)
      let headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.accessToken ?  `${this.accessToken}`:'');
      return this.http.get(`${this.apiUrl}agentes_on_line/`, { headers: headers, params: paramsSeteados });
  }
    
  
  //CARGA DE USUARIOS EN LINEA CON EL ULTIMO MENSAJE ENVIADO
    getAgentesY_Mensaje(data:any, prefix: string = ''): Observable<any> {
      let paramsSeteados = new HttpParams();
      console.log("data services")
      console.log(data)
  
      
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
      
      appendParams(data);
        console.log(this.accessToken)
      let headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this.accessToken ?  `${this.accessToken}`:'');
      return this.http.get(`${this.apiUrl}agentes_with_message/`, { headers: headers, params: paramsSeteados });
  }





  /**
     * Sign in using the access token
     */
  signInUsingToken(): Observable<any>
  {
    this.authenticated=="true"
      // Sign in using the token
      this.authToken = this.accessToken

      if ( this._verifyJWTToken(this.accessToken) )
        {
            return of( [
                200,
                {
                    //user       : this._userService,
                    accessToken: this.accessToken,
                    tokenType  : 'bearer',
                },
            ]);
        }

      //return (this.authToken);
  }



  check(): Observable<boolean>
    {
        // Check if the user is logged in
        if ( localStorage.getItem('authenticated')  == "true" )
        {
            return of(true);
        }

        // Check the access token availability
        if ( ! localStorage.getItem('accessToken') )
        {
            return of(false);
        }

        // Check the access token expire date
        if ( AuthUtils.isTokenExpired(this.accessToken) )
        {
            return of(false);
        }

        // If the access token exists, and it didn't expire, sign in using it
        return this.signInUsingToken();
    }
 




    private _verifyJWTToken(token: string): boolean
    {
        // Split the token into parts
        const parts = token.split('.');
        const header = parts[0];
        const payload = parts[1];
        const signature = parts[2];

        // Re-sign and encode the header and payload using the secret
        const signatureCheck = this._base64url(HmacSHA256(header + '.' + payload, this.accessToken));

        // Verify that the resulting signature is valid
        return (signature === signatureCheck);
    }


    private _base64url(source: any): string
    {
        // Encode in classical base64
        let encodedSource = Base64.stringify(source);

        // Remove padding equal characters
        encodedSource = encodedSource.replace(/=+$/, '');

        // Replace characters according to base64url specifications
        encodedSource = encodedSource.replace(/\+/g, '-');
        encodedSource = encodedSource.replace(/\//g, '_');

        // Return the base64 encoded string
        return encodedSource;
    }


}