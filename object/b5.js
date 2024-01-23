function findBook(word) {
    let check = false;
    for (const i in bookList) {
        if(bookList[i].name == word){
            console.log(bookList[i]);
            check = true;
        }
    }
    return check;
}
class Book{
    constructor(name, author){
        this.name = name;
        this.author = author;
    }
}
let bookList =[
    {name: 'làm chủ bản thân',author:'Vương'},
    {name: 'tuổi 20',author:'Vương'},
    {name: 'leo top bằng heartsteel ',author:'Vương'},
];
let word = prompt('nhập tên sách bạn muốn tìm');
let result = findBook(word);
if (!result) {
    console.log('Không tìm thấy sách');
}

