import { BooleanInput } from '@angular/cdk/coercion';
import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
//import { UserService } from 'app/core/user/user.service';
//import { UserServiceCRM } from 'app/servicesTRAVE/User.services/user.service';
import { UsuarioObservableCRM} from 'app/servicesTRAVE/observables/usuarios/usuarios.service'
//import { User } from 'app/core/user/user.types';
import { UserCRM } from 'app/models/user.model';
import { Subject, takeUntil } from 'rxjs';
import {global} from '../../../servicesTRAVE/global';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthServiceCRM } from 'app/servicesTRAVE/auth.service';
// servicesTRAVE/global';


@Component({
    selector       : 'user',
    templateUrl    : './user.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'user',
    standalone     : true,
    imports        : [MatButtonModule,RouterModule, MatMenuModule, NgIf, MatIconModule, NgClass, MatDividerModule],
})
export class UserComponent implements OnInit, OnDestroy
{
  public urlImagen = global.urlImagen;

    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_showAvatar: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() showAvatar: boolean = true;
    //user: UserCRM;
    user: any;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _UsuarioObservableCRM: UsuarioObservableCRM,
        private _authServices : AuthServiceCRM
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.user=JSON.parse(localStorage.getItem('user'));
        console.log(this.user)
        /* this._UsuarioObservableCRM.getUser().subscribe(user => {
                console.log("user")
                console.log(user)
                this.user = user;
              }); */
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Update the user status
     *
     * @param status
     */
    updateUserStatus(usu_status: string): void
    {
        // Return if user is not available
        /* if ( !this.user )
        {
            return;
        }

        // Update the user
        this._userService.update({
            ...this.user,
            usu_status,
        }).subscribe(); */
    }

    /**
     * Sign out
     */
    public usu:any;
    signOut(): void
    {
        this.usu=localStorage.getItem('user');
        this.usu=JSON.parse(this.usu)

        localStorage.removeItem('accessToken');
        localStorage.removeItem('authenticated');
        this._router.navigate(['/sign-out']);
        const obj={
            usu_id:this.usu.usu_id,
            usu_status:'Off line'
        }
        this._authServices.logout(obj).subscribe(
            (response:any) => {

            }
        )

        /* this._agentesService.putAgentes(objeto).subscribe(
            (response:any) => {
              console.log(response)
              if(response.code==200){
                this._systemServices.showAlertSuccessCenter(response.message);
              }
              this.dialogRef.close();
    
            },
            (error) => {
               
              console.log(error);
                this._systemServices.showAlertError(error.error.error);
              this.dialogRef.close();
            }
          ); */

    }
}
