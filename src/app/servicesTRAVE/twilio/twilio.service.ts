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
export class twilioServiceCRM {
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
  


    postTwilio(data:any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('Authorization', (this.accessToken != null) ? this.accessToken : '');
        let httpParams = new HttpParams()
            //.set("id", id)
        return this.http.post(`${this.apiUrl}parametrosTiwilo/`, data,{ headers: headers, params: httpParams });
    }


    getTwilio(data:any, prefix: string = ''): Observable<any> {
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
        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', this.accessToken ?  `${this.accessToken}`:'');
        return this.http.get(`${this.apiUrl}parametrosTiwilo/`, { headers: headers, params: paramsSeteados });
    }



    putTwilio(data:any): Observable<any> {
        console.log(data)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('Authorization', (this.accessToken != null) ? this.accessToken : '');
        let httpParams = new HttpParams()
            //.set("id", id)
        return this.http.put(`${this.apiUrl}parametrosTiwilo/`, data,{ headers: headers, params: httpParams });
    }



  /* registerTwilio(data:any): Observable<any> {
     // Throw error, if the user is already logged in
     if ( !this._authenticated )
      {
          return throwError('No esta logeado.');
      }
      console.log("despues del authenticated")

    return this.http.post(`${this.apiUrl}parametrosTiwilo`, data).pipe(
      switchMap((response: any) =>
      {
          console.log("JSON.stringify(response)")
          console.log(JSON.stringify(response.user))
          // Store the access token in the local storage
          //this.accessToken = response.token;
          // Set the authenticated flag to true
          //this.authenticated = "true";
          // Store the user on the user service
          //this._userService.user = response.data;
          //this.userServiceObserva.setUser(response.user);
          //localStorage.setItem('user',JSON.stringify(response.user));
          
          // Return a new observable with the response
          return of(response);
      }),
  );

  } */




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