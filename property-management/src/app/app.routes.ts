import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'enquiries',
        loadChildren: () => import('./views/enquiries/routes').then((m)  => m.routes),
        
      }
      




    ]
  },
  
  { path: '**', redirectTo: 'dashboard' }
];