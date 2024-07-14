import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './component/card/card.component';

export const Approutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      { path: 'feedbacks', component: CardsComponent },
    ]
  },
  { path: '**', component:DashboardComponent },
];
