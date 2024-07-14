import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { BadgeComponent } from './badge/badge.component';
import { NgbdButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { authGuard } from './guard/auth.guard';

export const ComponentsRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'table',
        component: TableComponent
        , canActivate:[authGuard]
 
      },
      {
        path: 'card',
        component: CardsComponent
        , canActivate:[authGuard]
      },
      {
        path: 'pagination',
        component: NgbdpaginationBasicComponent
        , canActivate:[authGuard]
      },
      {
        path: 'badges/:id', 
        component: BadgeComponent
        , canActivate:[authGuard]
      },
      {
        path: 'alert',
        component: NgbdAlertBasicComponent
        , canActivate:[authGuard]
      },
      {
        path: 'dropdown',
        component: NgbdDropdownBasicComponent
        , canActivate:[authGuard]
      },
      {
        path: 'nav',
        component: NgbdnavBasicComponent
        , canActivate:[authGuard]
      },
      {
        path: 'buttons',
        component: NgbdButtonsComponent
        , canActivate:[authGuard]
      },
      { path: 'feedbacks', component: CardsComponent, canActivate:[authGuard] },
    ]
  }
];
