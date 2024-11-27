/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';


/* Dashboard 
Clientes
Agentes
Campañas
Reportes
Configuraciones */ 

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        subtitle: 'Unique dashboard designs',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dashboards.dashboard',
                title: 'dashboard',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-document-check',
                link : '/pages/dashboard',
            },
            {
                id   : 'dashboards.clientes',
                title: 'Clientes',
                type : 'basic',
                icon : 'heroicons_outline:user-circle',
                link : '/pages/clientes',
            },
            {
                id   : 'configuracion.campañas',
                title: 'Campañas',
                type : 'basic',
                icon : 'heroicons_outline:megaphone',
                link : '/pages/campanias',
            },
            {
                id      : 'configuracion.carga_masiva',
                title   : 'Carga Masiva',
                type    : 'collapsable',
                icon    : 'heroicons_outline:information-circle',
                link    : '/pages/carga_masiva',
                children: [
                    {
                        id        : 'apps.help-center.home',
                        title     : 'Carga Masiva Excel',
                        type      : 'basic',
                        link      : '/pages/carga_masiva',
                        exactMatch: true,
                    },
                    {
                        id   : 'apps.help-center.faqs',
                        title: 'Cargar Contactos desde Whastapp',
                        type : 'basic',
                        link : '/pages/carga_masiva_whatsapp',
                    },
                    /*
                    {
                        id   : 'apps.help-center.guides',
                        title: 'Guides',
                        type : 'basic',
                        link : '/apps/help-center/guides',
                    },
                    {
                        id   : 'apps.help-center.support',
                        title: 'Support',
                        type : 'basic',
                        link : '/apps/help-center/support',
                    },*/
                ],
            },
            
        ]
    },
    {
        id      : 'configuraciones',
        title   : 'Configuraciones',
        subtitle: 'Configuraciones del Sitio',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'configuracion.agentes',
                title: 'Agentes',
                type : 'basic',
                icon : 'heroicons_outline:user-group',
                link : '/pages/agentes',
            },
            {
                id   : 'configuracion.personas',
                title: 'Personas',
                type : 'basic',
                icon : 'heroicons_outline:user',
                link : '/pages/personas',
            },
            {
                id   : 'configuracion.reportes',
                title: 'Reportes',
                type : 'basic',
                icon : 'heroicons_outline:document-chart-bar',
                link : '/pages/reportes',
            },
            {
                id   : 'configuracion.configuraciones',
                title: 'Configuraciones',
                type : 'basic',
                icon : 'heroicons_outline:cog-8-tooth',
                link : '/pages/settings',
            },
            /* {
                id   : 'configuracion.usuarios',
                title: 'Usuarios',
                type : 'basic',
                icon : 'heroicons_outline:user-circle',
                link : '/dashboards/analytics',
            },
            {
                id   : 'configuracion.productos',
                title: 'Productos',
                type : 'basic',
                icon : 'heroicons_outline:shopping-cart',
                link : '/dashboards/analytics',
            }, */
            /*{
                id   : 'dashboards.finance',
                title: 'Finance',
                type : 'basic',
                icon : 'heroicons_outline:banknotes',
                link : '/dashboards/finance',
            } */
        ]
    }
    /* {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    } */
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
