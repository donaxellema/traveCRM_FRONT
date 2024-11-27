import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    //{path: '', pathMatch : 'full', redirectTo: 'example'},  -->funcional
    {path: '', pathMatch : 'full', redirectTo: 'pages/dashboard'},

    // Redirect signed-in user to the '/example'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    //{path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'example'}, ---funcional
    // me redirigira a la ruta 'signed-in-redirect' para luego arrojarme a mi pages/dashboard 
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'pages/dashboard'},

    // Auth routes for guests
    {
        path: '',
        //canActivate: [NoAuthGuard],
        //canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.routes')},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.routes')},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.routes')},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.routes')},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.routes')}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.routes')},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.routes')}
        ]
    },

    

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        children: [
            //{path: 'example', loadChildren: () => import('app/modules/admin/example/example.routes')},
            {path: 'dashboard', loadChildren: () => import('app/forms/dashboard/dashboard.routes')},

            // Pages
            {path: 'pages', children: [
                // Settings */
                {path: 'carga_masiva_whatsapp', loadChildren: () => import('app/forms/carga-masiva-whatsapp/carga-masiva.routes')},
                {path: 'campanias', loadChildren: () => import('app/forms/campanias/campanias.routes')},
                {path: 'perfil', loadChildren: () => import('app/forms/perfil/perfiles.routes')},
                {path: 'dashboard', loadChildren: () => import('app/forms/dashboard/dashboard.routes')},
                {path: 'clientes', loadChildren: () => import('app/forms/usuarios/usuarios.routes')},
                {path: 'carga_masiva', loadChildren: () => import('app/forms/carga_masiva/carga_masiva.routes')},
                {path: 'agentes', loadChildren: () => import('app/forms/agentes/agentes.routes')},
                {path: 'personas', loadChildren: () => import('app/forms/personas/personas.routes')},
                {path: 'settings', loadChildren: () => import('app/forms/configuraciones/configuraciones.routes')},
                {path: 'chats', loadChildren: () => import('app/forms/chat/chat.routes')},
            ]},

        ]
    }
];
