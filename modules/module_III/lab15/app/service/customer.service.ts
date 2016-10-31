import {Injectable} from "@angular/core";
import {Customer} from "../model/customer";
import {CUSTOMERS} from "../mock/customer-mock";

@Injectable()
export class CustomerService{
    getCustomers(): Promise<Customer[]>{
        return Promise.resolve(CUSTOMERS);
    }

    getProduct(id: number): Promise<Customer> {
        return this.getCustomers()
            .then(customers => customers.find(customer => customer.id === id));
    }
}