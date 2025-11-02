import { Routes } from '@angular/router';

export const workflowsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./workflows.component').then(m => m.WorkflowsComponent)
  }
];