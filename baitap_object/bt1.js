let person = {
    name: 'vương',
    age: 18,
    address: 'Hải Dương',
}
for (const key in person) {
    console.log(key,person[key]);
}
person.birth = '15-11-2005';
for (const key in person) {
    console.log(key,person[key]);
}
delete person.age;
for (const key in person) {
    console.log(key,person[key]);
}