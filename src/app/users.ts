import { Operation } from "./operation";

export class User{
    private id: number;
    protected userName: string;
    protected password: string;
    private operation: Operation[];
    
    constructor(id: number, userName: string, password: string, operation: Operation[]) {
        this.id = id; 
        this.userName = userName;
        this.password = password;
        this.operation = operation
    }

    get getId() {
        return this.id;
    }
    get getName() {
        return this.userName;
    }
    get getPassword() {
        return this.password;
    }
    get getOperation() {
        return this.operation;
    }
}