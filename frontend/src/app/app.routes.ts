import { Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { AccountOperationsComponent } from './components/account-operations/account-operations.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'add', component: AddComponent},
    { path: 'home', component: HomeComponent},
    { path: 'account-operation', component: AccountOperationsComponent},
    { path: '**', component: NotFoundComponent}
];
