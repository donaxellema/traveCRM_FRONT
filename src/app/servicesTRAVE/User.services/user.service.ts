import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserCRM } from 'app/models/user.model';
import { map, Observable, ReplaySubject, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserServiceCRM
{
    private _httpClient = inject(HttpClient);
    private _user: ReplaySubject<UserCRM> = new ReplaySubject<UserCRM>(1);

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */
    set user(value: UserCRM)
    {
        // Store the value
        this._user.next(value);
    }

    get user$(): Observable<UserCRM>
    {
        return this._user.asObservable();
    }

}
