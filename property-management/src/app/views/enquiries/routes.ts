import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./enquiries.component').then(m => m.EnquiriesComponent),
    data: {
      title: $localize`Enquiries`
    }
  }
];

