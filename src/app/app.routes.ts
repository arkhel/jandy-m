import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirige a Dashboard por defecto
    { path: 'dashboard', component: DashboardComponent } // Ruta para el componente Dashboard
];
