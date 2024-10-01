import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserCRM } from 'app/models/user.model';
import { BehaviorSubject, map, Observable, ReplaySubject, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PersonaObservableCRM
{
    
    //private id_personaSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    private id_personaSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.getIdFromLocalStorage());


    constructor() {}

    // Método para actualizar el id de Persona
    setId_Persona(id: any): void {
        this.id_personaSubject.next(id);
        localStorage.setItem('idPersona', JSON.stringify(id));
        //alert(id)
    }

    //Metodo para obtener el dato de id de persona
    getId_Persona(): Observable<any> {
        return this.id_personaSubject.asObservable();
    }
    
    
    private getIdFromLocalStorage(): any {
        const storedId = localStorage.getItem('idPersona');
        return storedId ? JSON.parse(storedId) : null;
      }

      
}
