class Student{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

let stdList = new Array();
let size = +prompt('nhập số lượng sinh viên');
for (let i = 1; i <= size; i++) {
    let id = +prompt(`nhập id của sinh viên thứ ${i}`);
    let name = prompt(`nhập tên của sinh viên thứ ${i}`);
    stdList[i-1] = new Student(id, name);
}
for (let key in stdList) {
    console.log(`student ${key}` ,stdList[key]);
}