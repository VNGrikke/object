class information {
    constructor(id, name, phone, address){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.address = address;
    }
}
let id = +prompt('nhập id');
let name = prompt('nhập name');
let phone = prompt('nhập phone');
let address = prompt('nhập address');
let person = new information(id, name, phone, address);
for (const key in person) {
    console.log(key, person[key]);
}

