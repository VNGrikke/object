class Contact {
    constructor(name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    showInfo() {
        console.log("Tên: " + this.name);
        console.log("Số điện thoại: " + this.phone);
        console.log("Địa chỉ email: " + this.email);
        console.log("-----------------------------");
    }
}
let phoneBook = {
    contact1: new Contact('Alice', '087-172-8723', 'alice@gmail.com'),
    contact2: new Contact('John', '012-983-8237', 'john@gmail.com')
};
for (var contactKey in phoneBook) {
    phoneBook[contactKey].showInfo();
}
