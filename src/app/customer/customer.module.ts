import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CustomerModule { 
  const routeCustomer: Routes = [
    {path: 'customer', component:CustomerComponent},
  ];
}

export const routing = RouterModule.forChild(routeCustomer);
