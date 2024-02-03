export class Operation{
    private id: string;
    private amount: number;
    private date: Date;
    private customerId: number;
    private operationType: string;

    constructor(id: string, amount: number, date: Date, customerId: number, operationType: string) {
        this.id = id; 
        this.amount = amount;
        this.date = date;
        this.customerId = customerId;
        this.operationType = operationType;
    }
    get getId() {
        return this.id;
    }
    get getAmount() {
        return this.amount;
    }
    get getCustomerId() {
        return this.customerId;
    }
    get getOperationType() {
        return this.operationType;
    }

    set setId(newId: string) {
        this.id = newId;
    }
    set setAmount(newAmount: number) {
        this.amount = newAmount;
    }
    set setCustomerId(newCustomerId: number) {
        this.customerId = newCustomerId;
    }
    set setOperationType(newOperationType: string) {
        this.operationType = newOperationType;
    }
}