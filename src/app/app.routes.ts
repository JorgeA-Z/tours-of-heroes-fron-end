import { Routes } from '@angular/router';

export const routes: Routes = [
    {

        path: '',
        loadChildren: ()=> import('./CTH/home/routes/home.routing').then(m => m.routes)

    },


];
