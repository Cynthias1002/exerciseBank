import { User } from "./users";
import { Operation } from "./operation";

export class Customer extends User{
    private fullName: string;
    protected phone: string;
    protected balance: number;
    

    constructor(fullName: string, phone: string, balance: number,
        id: number, userName: string, password: string, operation: Operation[]) {
            super(id, userName, password, operation)
        this.fullName = fullName; 
        this.phone = phone;
        this.balance = balance;
    }
    
    get getPhone() {
        return this.phone;
    }
    get getBalance() {
        return this.balance;
    }

    set setPhone(newPhone: string) {
        this.phone = newPhone;
    }
    set setBalance(newBalance: number) {
        this.balance = newBalance;
    }
}

