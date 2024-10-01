import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer } from '@angular/material/sidenav';
import { Chat, ContactUser } from '../chat.types';
// import { Chat } from 'app/modules/admin/apps/chat/chat.types';
import {global} from './../../../servicesTRAVE/global';

@Component({
    selector       : 'chat-contact-info',
    templateUrl    : './contact-info.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [MatButtonModule, MatIconModule, NgIf, NgFor],
})
export class ContactInfoComponent
{
    public urlImagen = global.urlImagen;

    //@Input() chat: Chat;
    @Input() chat: ContactUser;
    @Input() drawer: MatDrawer;

    /**
     * Constructor
     */
    constructor()
    {
    }
}
