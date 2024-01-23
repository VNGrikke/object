let person = {
    id: 1,
    name: 'vương',
    phone: '09128371',
    address: 'Hải Dương',

}
for (const key in person) {
    console.log(key, person[key]);
}
delete person.address;
person.emal = 'Enlove@gmail.com';
for (const key in person) {
    console.log(key, person[key]);
}

