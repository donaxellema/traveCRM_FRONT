export interface Profile
{
    id?: string;
    name?: string;
    email?: string;
    avatar?: string;
    about?: string;
}

export interface ProfileN
{
    usu_imagen?: string;
    pers_apellidos?: string;
    pers_nombres?: string;
    pers_email?: string;
    usu_descripcion?: string;
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

    pers_id?: any;
    nombres_usu?:string;
    pers_nombres?:string;
    pers_apellidos?:string;
    usu_imagen?:string;
    unreadCount?:number;
    lastMessage?:string;
    muted?:boolean;
    lastMessageAt?:String,

    messages?: {
        msg_id?: string;
        chat_id?: string;
        pers_id_sender?: string;
        msg_emisrecep?: string;
        msg_tipo?: string;
        msg_contenido?: string;
        msg_fchreg?: string;

        /* isMine?: boolean;
        value?: string;
        createdAt?: string; */
    }[];

    /* msg_id?: number;
    chat_id?: number;
    pers_id_sender?: number;
    msg_emisrecep?: number;
    msg_tipo?: string;
    msg_contenido?: string;
    msg_fchreg?: string; */
}


export interface ChatUser
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


export interface ContactUser
{
    pers_id?: any;
    usu_imagen?: string;
    pers_nombres?: string;
    pers_apellidos?: string;
    usu_descripcion?: string;
    usu_email?: string;
    pers_ciudad?: string;
    pers_telefono?: string;
    etiq_nombre?: string;
            //label?: string;
    /* title?: string;
        company?: string;
        birthday?: string;
        address?: string; */
    
    /* attachments?: {
        media?: any[];
        docs?: any[];
        links?: any[];
    }; */

}