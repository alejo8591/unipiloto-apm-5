import {SalesInvoice} from "../model/sales-invoice";
import {PRODUCTS} from "../mock/product-mock";
import {Product} from "../model/product";
import {Customer} from "../model/customer";
import {CUSTOMERS} from "./customer-mock";

let _PRODUCTS: Product[] = PRODUCTS;
let _CUSTOMERS: Customer[] = CUSTOMERS;

export const SALES_INVOICES: SalesInvoice[] = [
    {
        id: 1,
        customer: _CUSTOMERS[0],
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: _PRODUCTS[1].id,
                purchasePrice: 250000
            }
        ],
        invoiceAmount: 10000,
        tax: 16
    },
    {
        id: 2,
        customer: _CUSTOMERS[0],
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: _PRODUCTS[1].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: _PRODUCTS[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount: 3434334,
        tax: 16
    },
    {
        id: 20,
        customer: _CUSTOMERS[0],
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: _PRODUCTS[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount:121213,
        tax: 16
    },
    {
        id: 19,
        customer: _CUSTOMERS[0],
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: _PRODUCTS[1].id,
                purchasePrice: 250000
            }
        ],
        invoiceAmount: 10000,
        tax: 16
    },
    {
        id: 22,
        customer: _CUSTOMERS[0],
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: _PRODUCTS[1].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: _PRODUCTS[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount: 3434334,
        tax: 16
    },
    {
        id: 200,
        customer: _CUSTOMERS[1],
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: _PRODUCTS[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount:121213,
        tax: 16
    },
    {
        id: 17,
        customer: _CUSTOMERS[2],
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: _PRODUCTS[1].id,
                purchasePrice: 250000
            }
        ],
        invoiceAmount: 10000,
        tax: 16
    },
    {
        id: 29,
        customer: _CUSTOMERS[0],
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: _PRODUCTS[1].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: _PRODUCTS[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount: 3434334,
        tax: 16
    },
    {
        id: 20,
        customer: _CUSTOMERS[1],
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: _PRODUCTS[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount:121213,
        tax: 16
    },
    {
        id: 41,
        customer: _CUSTOMERS[1],
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: _PRODUCTS[1].id,
                purchasePrice: 250000
            }
        ],
        invoiceAmount: 10000,
        tax: 16
    },
    {
        id: 62,
        customer: _CUSTOMERS[2],
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: _PRODUCTS[1].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: _PRODUCTS[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount: 3434334,
        tax: 16
    },
    {
        id: 220,
        customer: _CUSTOMERS[0],
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: _PRODUCTS[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount:121213,
        tax: 16
    },
    {
        id: 123,
        customer: _CUSTOMERS[1],
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: _PRODUCTS[1].id,
                purchasePrice: 250000
            }
        ],
        invoiceAmount: 10000,
        tax: 16
    },
    {
        id: 223,
        customer: _CUSTOMERS[0],
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: _PRODUCTS[1].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: _PRODUCTS[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount: 3434334,
        tax: 16
    },
    {
        id: 2016,
        customer: _CUSTOMERS[2],
        lineItems: [
            {
                id: 1,
                productId: _PRODUCTS[0].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: _PRODUCTS[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount:121213,
        tax: 16
    }
];
