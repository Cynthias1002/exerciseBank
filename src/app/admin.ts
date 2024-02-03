import { User } from "./users";
import { Operation } from "./operation";

export class Admin extends User{
    private secretCode: number;;
    
    constructor(secretCode: number,
        id: number, userName: string, password: string, operation: Operation[]) {
        super(id, userName, password, operation)
        this.secretCode = secretCode; 
    }
}