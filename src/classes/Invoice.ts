import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter{

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {
        // this.client = client;
        // this.details = details;
        // this.amount = amount;
    }

    format() {
        return `${this.client} owes pounds${this.amount} for ${this.details}`
    }
}