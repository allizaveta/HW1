//1
let password = 'psw';
let userPassword = prompt('Введите пароль', '');
if(password === userPassword){
    alert('Пароль введен верно');
}
else{
    alert('Пароль введен неправильно');
} 
//2
let c = 6;
if(c > 0 && c < 10){
    alert("Верно");
}
else{
    alert("Неверно");
}

//3
let d = 6
let e = 3
if(d > 100 || e > 100){
    alert("Верно");
}
else{
    alert("Неверно");
}

//4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
//5
let monthNumber = Number(prompt('Введи номер месяца'));
if (!monthNumber.trim()){
    console.log('капец..')
}
else{
switch (monthNumber) {
    case 1:
    case 2:
    case 3:
        alert('Зима');
        break;
    case 4:
    case 5:
    case 6:
        alert('Весна');
        break;
    case 7:
    case 8:
    case 9:
        alert('Лето');
        break;
    case 10:
    case 11:
    case 12:
        alert('Осень');
        break;
    default: alert('Нет такого месяца!!!!!!!!');
        break;
}
}
//7 
let number = Number(prompt('Пожалуйста, введите любое число'));
if (!number.trim()){
    console.log('капец..')
}
else if(number % 2 == 0) {
    alert('Число четное')
}
else{
    alert('Число нечетное')
}

//8,9
let clientOS = prompt('OS телефона: ios = 0 Android = 1', '');
let yearOfCreation = prompt('год выпуска вашего телефона', '');
if(!clientOS.trim()){
    console.log('капец..')
}
else if(!yearOfCreation.trim()){
    console.log('мда..')
}
else if(clientOS === 1 && yearOfCreation >= 2015){
    console.log("Установите версию приложения для Android по ссылке");
}
else if(clientOS = 1 && yearOfCreation <= 2015){
    console.log('Установите облегченную версию приложения для Android по ссылке')
}
else if(clientOS = 0 && yearOfCreation <= 2015){
    console.log('Установите облегченную версию приложения для iOS по ссылке')
}
else{
    console.log("Установите версию приложения для iOS по ссылке");
}
