export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = client;
        // this.details = details;
        // this.amount = amount;
    }
    format() {
        return `${this.client} owes pounds${this.amount} for ${this.details}`;
    }
}
