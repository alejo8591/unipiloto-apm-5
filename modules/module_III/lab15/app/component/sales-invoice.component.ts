import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {SalesInvoice} from "../model/sales-invoice";
import {SalesInvoiceService} from "../service/sales-invoice.service";

@Component({
    selector: 'sales-invoice-app',
    templateUrl: 'app/templates/sales-invoice.html',
    providers: [SalesInvoiceService]
})

export class SalesInvoiceComponent implements OnInit {
    title: string = "Sales invoice";

    selectedSalesInvoice: SalesInvoice;

    salesInvoices: SalesInvoice[];

    constructor(private router: Router, private salesInvoiceService: SalesInvoiceService) {}

    getSalesInvoices() {
        this.salesInvoiceService.getSalesInvoices().then(salesInvoices => this.salesInvoices = salesInvoices);
    }

    ngOnInit(): void {
        this.getSalesInvoices();
    }

    onSelect(salesInvoice: SalesInvoice){
        this.selectedSalesInvoice = salesInvoice;
    }

    gotoDetail(): void {
        this.router.navigate(['sales-invoice/customer/detail/', this.selectedSalesInvoice.customer.id]);
    }
}
