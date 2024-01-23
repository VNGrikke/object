let product = {
    id: 1,
    name: 'đồng hồ',
    price: 1200000,
    quatity: 3,

}
for (const key in product) {
    console.log(key, product[key]);
}