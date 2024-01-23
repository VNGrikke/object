function sort(products) {
    let size = products.length;
    let swap;
    do {
        swap = false;
        for (let i = 0; i < size - 1; i++) {
            if (products[i].price > products[i + 1].price) {
                let temp = products[i];
                products[i] = products[i + 1];
                products[i + 1] = temp;
                swap = true;
            }
        }
    } while (swap);
    
    return products;
}
class Product{
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
let products = [
    {id: 1, name: 'iphone12', price: 20000000},
    {id: 2, name: 'iphone11', price: 10000000},
    {id: 3, name: 'samsung note 10', price: 50000000},
];
let i = 0;
for (const key in products) {  
    console.log(`${i} :`,products[key]);
    i++;
}
let afterSort = sort(products);
i = 0;
for (const key in afterSort) {  
    console.log(`${i} :`,afterSort[key]);
    i++;
}

