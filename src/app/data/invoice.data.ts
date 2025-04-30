export const invoiceData: any = {
    id: 1,
    name: 'PC Components',
    client: {
        name: 'Luis',
        lastname: 'Zambrano',
        address: {
            country: 'Chile',
            city: 'Concepción',
            street: 'Example Street',
            number: 15
        }
    },
    company: {
        name: 'New Age',
        fiscalNumber: 3123123
    },
    items: [
        {
            id: 1,
            product: 'CPU Intel i9',
            price: 599,
            quantity: 1
        },
        {
            id: 2,
            product: 'Corsair Mechanic Keyboard',
            price: 399,
            quantity: 1
        },
        {
            id: 3,
            product: 'Screen ASUS',
            price: 899,
            quantity: 3
        },
    ]
}