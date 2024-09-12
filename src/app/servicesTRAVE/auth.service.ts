import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { AuthUtils } from 'app/core/auth/auth.utils';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import {global} from './global';
import { UserServiceCRM } from './User.services/user.service';

import { UsuarioObservableCRM } from './observables/usuarios/usuarios.service';

import Base64 from 'crypto-js/enc-base64';
import HmacSHA256 from 'crypto-js/hmac-sha256';
import { cloneDeep } from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceCRM {
  private _authenticated: boolean = false;
  private _httpClient = inject(HttpClient);
  private apiUrl = global.url;
  private _userService = inject(UserServiceCRM);
  authToken:any;
  set accessToken(token: string)
  {
      localStorage.setItem('accessToken', token);
  }
  
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
    private userServiceObserva: UsuarioObservableCRM
) {}
  
  login(data:any): Observable<any> {
     // Throw error, if the user is already logged in
     if ( this._authenticated )
      {
          return throwError('User is already logged in.');
      }
      console.log("despues del authenticated")

    return this.http.post(`${this.apiUrl}login`, data).pipe(
      switchMap((response: any) =>
      {
          console.log("JSON.stringify(response)")
          console.log(JSON.stringify(response.user))
          // Store the access token in the local storage
          this.accessToken = response.token;
          // Set the authenticated flag to true
          this.authenticated = "true";
          // Store the user on the user service
          //this._userService.user = response.data;
          this.userServiceObserva.setUser(response.user);
          localStorage.setItem('user',JSON.stringify(response.user));
          
          // Return a new observable with the response
          return of(response);
      }),
  );

  }


  logout(data:any): Observable<any> {
     // Throw error, if the user is already logged in
     if ( this._authenticated )
      {
          return throwError('User is already logged in.');
      }
      console.log("despues del authenticated")

    return this.http.post(`${this.apiUrl}logout`, data).pipe(
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
                    user       : this._userService.user,
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