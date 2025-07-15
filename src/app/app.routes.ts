import { Routes } from '@angular/router';
import { TeamDashboardComponent } from './views/team-dashboard/team-dashboard.component';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
  // use component layout
    {
    path: '',
    component: LayoutComponent,
    children: [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }, //lazy loading use standalone
        {path:'home',loadComponent:()=>import('./views/home/home.component').then(l=>l.HomeComponent)}, //lazy loading use standalone
        {path:'team-dashboard',loadComponent:()=>import('./views/team-dashboard/team-dashboard.component').then(l=>l.TeamDashboardComponent)}, //lazy loading use standalone
        {path:'create-item',loadComponent:()=>import('./views/team-dashboard/add-item/add-item.component').then(l=>l.AddItemComponent)}, //lazy loading use standalone
        {path:'edit-item/:id',loadComponent:()=>import('./views/team-dashboard/edit-item/edit-item.component').then(l=>l.EditItemComponent)}, //lazy loading use standalone
]},

 {path:'**',

    // component:NotFoundComponent
loadComponent:()=>import('../app/shared/components/not-found/not-found.component').then(component=>component.NotFoundComponent)
  },
];
