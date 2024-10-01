import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDrawer } from '@angular/material/sidenav';
// import { ChatService } from 'app/modules/admin/apps/chat/chat.service';
//import { Profile } from 'app/modules/admin/apps/chat/chat.types';

import {global} from './../../../servicesTRAVE/global';
import { ChatService } from 'app/forms/chat/chat.service';
import { Profile } from 'app/forms/chat/chat.types';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector       : 'chat-profile',
    templateUrl    : './profile.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [MatButtonModule, MatIconModule, NgIf, MatFormFieldModule, MatInputModule, FormsModule],
})
export class ProfileComponent implements OnInit, OnDestroy
{
    public urlImagen = global.urlImagen;
    @Input() dataProfile: any;
    @Input() drawer: MatDrawer;
    _profile: Profile;
    profile: any;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(private _chatService: ChatService)
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
        console.log("this.dataProfile desde el perfil")
        console.log(this.dataProfile)
        // Profile
        this.profile=this.dataProfile;
        console.log("this.profile")
        console.log(this.profile)
        /* this._chatService.profile$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((dataProfile: any) =>
            {
                this.profile = dataProfile;
            }); */
        /* this._chatService.profile$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((profile: Profile) =>
            {
                this.profile = profile;
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
}
