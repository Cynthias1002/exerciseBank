import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { AdminComponent } from './admin/admin/admin.component';

export const routes: Routes = [
    {path: 'admin', component:AdminComponent},
    {path: 'customer', component:CustomerComponent},
    {path: 'login', component:LoginComponent},
    {path: '', redirectTo:'login', pathMatch:'full'},
];

export const routing = RouterModule.forRoot(routes);
