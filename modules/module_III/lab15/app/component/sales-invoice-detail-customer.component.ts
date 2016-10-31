import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {SalesInvoice} from "../model/sales-invoice";
import {SalesInvoiceService} from "../service/sales-invoice.service";


@Component({
    selector: 'sales-invoice-detail-app',
    templateUrl: 'app/templates/sales-invoice-customer-detail.html',
    providers: [SalesInvoiceService]
})

export class SalesInvoiceCustomerDetailComponent implements OnInit {

    salesInvoices: SalesInvoice[];

    constructor(
        private salesInvoiceService: SalesInvoiceService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.salesInvoiceService.getSalesInvoicesCustomerDetail(id)
                .then(salesInvoices => this.salesInvoices = salesInvoices);
        });
    }
}