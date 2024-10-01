import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes } from '@angular/router';


import { ChatComponent } from './chat.component';
import { ChatsComponent } from './chats/chats.component';
import { ChatService } from './chat.service';
import { ConversationComponent } from './conversation/conversation.component';
import { EmptyConversationComponent } from './empty-conversation/empty-conversation.component';


//import { ChatComponent } from 'app/modules/admin/apps/chat/chat.component';
//import { ChatService } from 'app/modules/admin/apps/chat/chat.service';
//import { ChatsComponent } from 'app/modules/admin/apps/chat/chats/chats.component';
//import { ConversationComponent } from 'app/modules/admin/apps/chat/conversation/conversation.component';
//import { EmptyConversationComponent } from 'app/modules/admin/apps/chat/empty-conversation/empty-conversation.component';

import { catchError, throwError } from 'rxjs';
import { ChatsServiceCRM } from 'app/servicesTRAVE/chats/chats.service';

/**
 * Conversation resolver
 *
 * @param route
 * @param state
 */
const conversationResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
{
    const _chatService = inject(ChatService);
    const chatService = inject(ChatsServiceCRM);
    const router = inject(Router);
    console.log('id + 30 ');
    console.log(route.paramMap.get('pers_id'));
    

    
    return chatService.getChatByIDConversation(
        { 
            pers_id: route.paramMap.get('pers_id'),
            chat_id: route.paramMap.get('chat_id'),
            opcion:'C_LIST_MESSAGES_BY_CHAT',
            pers_sender: route.paramMap.get('pers_sender')
        }).pipe(
        // Error here means the requested chat is not available
        catchError((error) =>
        {
            // Log the error
            console.error(error);

            // Get the parent url
            const parentUrl = state.url.split('/').slice(0, -1).join('/');

            // Navigate to there
            router.navigateByUrl(parentUrl);

            // Throw an error
            return throwError(error);
        }),
    );
    /* return chatService.getChatById(route.paramMap.get('id')).pipe(
        // Error here means the requested chat is not available
        catchError((error) =>
        {
            // Log the error
            console.error(error);

            // Get the parent url
            const parentUrl = state.url.split('/').slice(0, -1).join('/');

            // Navigate to there
            router.navigateByUrl(parentUrl);

            // Throw an error
            return throwError(error);
        }),
    ); */
};

export default [
    {
        path     : '',
        component: ChatComponent,
        resolve  : {
            chats   : () => inject(ChatService).getChats(),
            contacts: () => inject(ChatService).getContacts(),
            profile : () => inject(ChatService).getProfile(),
        },
        children : [
            {
                path     : '',
                component: ChatsComponent,
                children : [
                    {
                        path     : '',
                        pathMatch: 'full',
                        component: EmptyConversationComponent,
                    },
                    {
                        path     : ':chat_id/:pers_id/:pers_sender',
                        component: ConversationComponent,
                        resolve  : {
                            conversation: conversationResolver,
                        },
                    },
                ],
            },
        ],
    },
] as Routes;
