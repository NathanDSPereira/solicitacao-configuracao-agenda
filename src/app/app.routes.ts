import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        title: 'Solicitação Configuração de Agenda',
        loadComponent: () => import('./inicio/inicio').then(m => m.Inicio)
    },
    {
        path: 'casu',
        title: 'Solicitação Casu',
        loadComponent: () => import('./formulario-casu/formulario-casu').then(m => m.FormularioCasu)
    },
    {
        path: 'imaginamente',
        title: 'Solicitação Imaginamente',
        loadComponent: () => import('./formulario-imaginamente/formulario-imaginamente').then(m => m.FormularioImaginamente)
    }
];
