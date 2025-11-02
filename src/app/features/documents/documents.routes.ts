import { Routes } from '@angular/router';

export const documentsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./documents.component').then(m => m.DocumentsComponent)
  }
];