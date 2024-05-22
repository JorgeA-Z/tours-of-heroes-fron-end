import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'hero',
        loadChildren: () => import('../../heroes/routes/hero.routing').then(m => m.routes)
      }
    ]
  }

];
