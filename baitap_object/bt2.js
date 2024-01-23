let phoneBook = {
    contact1:{name: 'Alice',phone: '087-172-8723',email: 'alice@gamil.com'},
    contact2:{name: 'John',phone: '012-983-8237',email: 'john@gamil.com'},
};
for (const key in phoneBook) {
    console.log(`Tên: ${phoneBook[key].name}`);
    console.log(`Điện thoại: ${phoneBook[key].phone}`);
    console.log(`Email: ${phoneBook[key].email}`);
    console.log(`---------------------`);
}