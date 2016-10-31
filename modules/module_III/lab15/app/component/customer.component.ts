import {Component} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../service/customer.service";

@Component({
    selector: 'customer-app',
    templateUrl: 'app/templates/customer.html',
    providers: [CustomerService]
})

export class CustomerComponent {
    title: string = 'Clientes';
    customers: Customer[];

    constructor(private customerService: CustomerService){}

    getCustomers() {
        this.customerService.getCustomers().then(customers => this.customers = customers);
    }

    ngOnInit(){
        this.getCustomers();
    }
}
