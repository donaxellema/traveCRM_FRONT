import { NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';


import { ChatService } from 'app/forms/chat/chat.service';
import { Chat, ChatNew, Profile, ProfileN } from 'app/forms/chat/chat.types';
import { NewChatComponent } from '../new-chat/new-chat.component';
import { ProfileComponent } from '../profile/profile.component';

import { Observable } from 'rxjs';

//import { ChatService } from 'app/modules/admin/apps/chat/chat.service';
//import { Chat, Profile } from 'app/modules/admin/apps/chat/chat.types';
//import { NewChatComponent } from 'app/modules/admin/apps/chat/new-chat/new-chat.component';
//import { ProfileComponent } from 'app/modules/admin/apps/chat/profile/profile.component';


import { Subject, takeUntil } from 'rxjs';
import { AgentesServiceCRM } from 'app/servicesTRAVE/agentes/agentes.service';
import { PersonaObservableCRM } from 'app/servicesTRAVE/observables/chats/chat.service';
import {global} from './../../../servicesTRAVE/global';

@Component({
    selector       : 'chat-chats',
    templateUrl    : './chats.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [MatSidenavModule, NgIf, NewChatComponent, ProfileComponent, MatButtonModule, MatIconModule, MatMenuModule, MatFormFieldModule, MatInputModule, NgFor, NgClass, RouterLink, RouterOutlet],
})
export class ChatsComponent implements OnInit, OnDestroy
{
    public urlImagen = global.urlImagen;
    chats: Chat[];
    chatsN: ChatNew[];
    drawerComponent: 'profile' | 'new-chat';
    drawerOpened: boolean = false;
    filteredChats: Chat[];
    filteredChatsN: ChatNew[];
    profile: Profile;
    selectedChat: Chat;
    selectedChatN: ChatNew;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _chatService: ChatService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _AgentesServices:AgentesServiceCRM,
        private _personaObservableServices: PersonaObservableCRM
    )
    {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /* profileN={
        name:'Nombre example',
        email:'example@gmail.com',
        avatar:'imagen.jpg',
        about:'example asasdasd'
    } */
    profileN:any;
    
    
    /**
     * On init
     */
    public chatBDD:any;
    public pers_id:any;
    
    public data_usu_sender:any;
    public data_chats:any;
    public data_mensaje_by_chat:any;
    ngOnInit(): void
    {
          this._personaObservableServices.getId_Persona().subscribe((id:any) => {
            this.pers_id=id;
          });


        // Chats
        
            this._chatService.chats$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((chats: Chat[]) =>
            {
                this.chats = this.filteredChats = chats;
                console.log("this.chats en el inicio de NG ONINIT")
                console.log(this.chats)

                // Mark for check
                this._changeDetectorRef.markForCheck();
            }); 
       

            this.chatsN=this.filteredChatsN=[
                {
                pers_id:0,
                nombres_usu:'Pepe Alfa',
                pers_nombres:'Pepe',
                pers_apellidos:'Alfa',
                usu_imagen:null,
                unreadCount:0,
                lastMessage:'Ultimo mensaje',
                muted:false,
                lastMessageAt:'26/04/2024'
                
                //name:'Nombre example',
                //email:'example@gmail.com',
                //avatar:'imagen.jpg',
                //about:'example asasdasd'
            },
            {
                pers_id:1,
                nombres_usu:'Sarbina Piedra',
                pers_nombres:'Sarbina',
                pers_apellidos:'Piedra',
                usu_imagen:null,
                unreadCount:0,
                lastMessage:'Ultimo mensaje',
                muted:false,
                lastMessageAt:'26/04/2024'
            },
            {
                pers_id:11,
                nombres_usu:'Sarbina Piedra',
                pers_nombres:'Sarbina',
                pers_apellidos:'Piedra',
                usu_imagen:null,
                unreadCount:0,
                lastMessage:'Ultimo mensaje',
                muted:false,
                lastMessageAt:'26/04/2024'
            },
            {
                pers_id:"ff6bc7f1-449a-4419-af62-b89ce6cae0aa",
                nombres_usu:'El pepe',
                pers_nombres:'PEpe',
                pers_apellidos:'Piedra',
                usu_imagen:null,
                unreadCount:0,
                lastMessage:'Ultimo mensaje',
                muted:false,
                lastMessageAt:'26/04/2024'
            }
        ]
            const dataA={ 
                opcion:"C_LIST_CHAT_BY_USER",
                pers_id:this.pers_id
                //opcion:"C"
            }
    
            this._AgentesServices.getAgentesY_Mensaje(dataA).subscribe(
                (response:any) => {
                    console.log("response++++++++++++++++")
                    console.log(response)
                    this.profileN=response.data_sender;
                    console.log("this.profileN")
                    console.log(this.profileN)
                    //this.data_usu_sender=response.data_sender[0];
                    this.data_chats= response.data
                    console.log("mi consola aaa this.data_chats");
                    console.log(this.data_chats);
                    //this.chats = this.filteredChats = response.data;
                    this.chatsN = this.filteredChatsN = response.data;
                    //this.chatsN = this.filteredChatsN = response.data;
                    /* console.log("this.chatsN 94")
                    console.log(this.chatsN) */
                  },
                  (error) => {
                     
          
                  }
            )

        



        // Profile
        this._chatService.profile$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((profile: Profile) =>
            {
                this.profile = profile;

                // Mark for check
                console.log("this.selectedChat 151");
                this._changeDetectorRef.markForCheck();
            });

        // Selected chat
        /* this._chatService.chat$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((chat: ChatNew) =>
            {
                console.log("160"+chat);
                this.selectedChatN = chat;
                console.log("this.selectedChat 161");
                console.log(this.selectedChatN);
                // Mark for check
                this._changeDetectorRef.markForCheck();
            }); */


            this.getIdPersona();
    }



    //funcion para actualizar el observable 
    getIdPersona(){
        this._personaObservableServices.getId_Persona().subscribe({
            next:(reveidData)=>{
                console.log(reveidData)
            }
        })
    }

    getChats_byChat(){

    }




    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();

        // Reset the chat
        this._chatService.resetChat();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Filter the chats
     *
     * @param query
     */
    filterChats(query: string): void
    {
        // Reset the filter
        if ( !query )
        {
            this.filteredChats = this.chats;
            return;
        }

        this.filteredChats = this.chats.filter(chat => chat.contact.name.toLowerCase().includes(query.toLowerCase()));
    }
    //Adaptada para la busqueda actual
    filterChatsN(query: string): void
    {
        // Reset the filter
        if ( !query )
        {
            this.filteredChatsN = this.chatsN;
            return;
        }

        this.filteredChatsN = this.chatsN.filter(chat => chat.nombres_usu.toLowerCase().includes(query.toLowerCase()));
    }

    /**
     * Open the new chat sidebar
     */
    openNewChat(): void
    {
        this.drawerComponent = 'new-chat';
        this.drawerOpened = true;

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Open the profile sidebar
     */
    openProfile(): void
    {
        this.drawerComponent = 'profile';
        this.drawerOpened = true;

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}
