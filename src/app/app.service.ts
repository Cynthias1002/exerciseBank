import { Injectable } from '@angular/core';
import { User } from './users';
import { Customer } from './customers';
import { listCustomer } from './list-customer';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  user!: User;
  customer!: Customer;
  userList: Customer[] = listCustomer;

  constructor() { }

  isLogged(email: string, password: string) {
    let role!: string;
    let isValuesCustomer: boolean;
    let isValuesAdmin: boolean;
    let isValid: string;
    isValuesCustomer = (email == "user@gmail.com" && password == "user");
    isValuesAdmin = (email == "admin@gmail.com" && password == "admin");
    if (isValuesCustomer == true && role == "user") {
      isValid = "true"
    } else if (isValuesAdmin == true && role == "admin") {
      isValid = "true"
    } else {
      isValid = "false"
    }
  }

  withdrawal(amount: number) {
    if (amount > 0 && this.customer.getBalance >= amount) {
        this.customer.setBalance = this.customer.getBalance - amount
    } else {
        console.log("Insuffisance")
    }
  }

  transaction(myCustomer: Customer, amount: number) {
    if (amount > 0) {
      myCustomer.setBalance = myCustomer.getBalance + amount;
    }
  }

  customerList() {
    return this.userList;
  }

  historyOperations() {
    
  }


}
