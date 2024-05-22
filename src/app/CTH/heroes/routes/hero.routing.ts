import { Routes } from '@angular/router';
import { HeroListComponent } from '../components/hero-list/hero-list.component';
import { HeroComponent } from '../pages/hero/hero.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
    children: [
      {
        path: 'list',
        component: HeroListComponent
      }
    ]  
  },
];

