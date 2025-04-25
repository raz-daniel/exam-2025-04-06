import { Routes } from '@angular/router';

import { NotFoundComponent } from './components/layout/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/accountOperations/add/add.component';
import { AccountOperationsComponent } from './components/accountOperations/account-operations/account-operations.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'add', component: AddComponent},
    { path: 'home', component: HomeComponent},
    { path: 'account-operations', component: AccountOperationsComponent},
    { path: '**', component: NotFoundComponent}
];
