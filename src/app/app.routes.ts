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
    {path: '', pathMatch : 'full', redirectTo: 'example'},

    // Redirect signed-in user to the '/example'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'example'},

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

    // Landing routes
    /* {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.routes')},
        ]
    }, */

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
            {path: 'example', loadChildren: () => import('app/modules/admin/example/example.routes')},

            // Pages
            {path: 'pages', children: [

                /* // Activities
                {path: 'activities', loadChildren: () => import('app/modules/admin/pages/activities/activities.routes')},

                // Authentication
                {path: 'authentication', loadChildren: () => import('app/modules/admin/pages/authentication/authentication.routes')},

                // Coming Soon
                {path: 'coming-soon', loadChildren: () => import('app/modules/admin/pages/coming-soon/coming-soon.routes')},

                // Error
                {path: 'error', children: [
                    {path: '404', loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.routes')},
                    {path: '500', loadChildren: () => import('app/modules/admin/pages/error/error-500/error-500.routes')}
                ]},

                // Invoice
                {path: 'invoice', children: [
                    {path: 'printable', children: [
                        {path: 'compact', loadChildren: () => import('app/modules/admin/pages/invoice/printable/compact/compact.routes')},
                        {path: 'modern', loadChildren: () => import('app/modules/admin/pages/invoice/printable/modern/modern.routes')}
                    ]}
                ]},

                // Maintenance
                {path: 'maintenance', loadChildren: () => import('app/modules/admin/pages/maintenance/maintenance.routes')},

                // Pricing
                {path: 'pricing', children: [
                    {path: 'modern', loadChildren: () => import('app/modules/admin/pages/pricing/modern/modern.routes')},
                    {path: 'simple', loadChildren: () => import('app/modules/admin/pages/pricing/simple/simple.routes')},
                    {path: 'single', loadChildren: () => import('app/modules/admin/pages/pricing/single/single.routes')},
                    {path: 'table', loadChildren: () => import('app/modules/admin/pages/pricing/table/table.routes')}
                ]},

                // Profile
                {path: 'profile', loadChildren: () => import('app/modules/admin/pages/profile/profile.routes')},

                // Settings */
                {path: 'campanias', loadChildren: () => import('app/forms/campanias/campanias.routes')},
                {path: 'perfil', loadChildren: () => import('app/forms/perfil/perfiles.routes')},
                {path: 'dashboard', loadChildren: () => import('app/forms/dashboard/dashboard.routes')},
                {path: 'clientes', loadChildren: () => import('app/forms/usuarios/usuarios.routes')},
                {path: 'agentes', loadChildren: () => import('app/forms/agentes/agentes.routes')},
                {path: 'personas', loadChildren: () => import('app/forms/personas/personas.routes')},
                {path: 'settings', loadChildren: () => import('app/forms/configuraciones/configuraciones.routes')},
            ]},

        ]
    }
];
