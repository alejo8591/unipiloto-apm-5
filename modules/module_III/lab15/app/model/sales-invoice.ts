import {LineItem} from "./line-item";
import {Customer} from "./customer";

export class SalesInvoice {
    id: number;
    customer: Customer;
    lineItems: LineItem[];
    invoiceAmount: number;
    tax: number;
}