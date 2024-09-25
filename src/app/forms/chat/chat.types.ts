export interface Profile
{
    id?: string;
    name?: string;
    email?: string;
    avatar?: string;
    about?: string;
}

export interface Contact
{
    id?: string;
    avatar?: string;
    name?: string;
    about?: string;
    details?: {
        emails?: {
            email?: string;
            label?: string;
        }[];
        phoneNumbers?: {
            country?: string;
            phoneNumber?: string;
            label?: string;
        }[];
        title?: string;
        company?: string;
        birthday?: string;
        address?: string;
    };
    attachments?: {
        media?: any[];
        docs?: any[];
        links?: any[];
    };
}

export interface Chat
{
    id?: string;
    contactId?: string;
    contact?: Contact;
    unreadCount?: number;
    muted?: boolean;
    lastMessage?: string;
    lastMessageAt?: string;
    messages?: {
        id?: string;
        chatId?: string;
        contactId?: string;
        isMine?: boolean;
        value?: string;
        createdAt?: string;
    }[];
}


export interface ChatNew
{

    pers_id?: number;
    nombres_usu?:string;
    pers_nombres?:string;
    pers_apellidos?:string;
    usu_imagen?:string;
    unreadCount?:number;
    lastMessage?:string;
    muted?:boolean;
    lastMessageAt?:String
    /* msg_id?: number;
    chat_id?: number;
    pers_id_sender?: number;
    msg_emisrecep?: number;
    msg_tipo?: string;
    msg_contenido?: string;
    msg_fchreg?: string; */
}

