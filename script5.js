//1
function odds(a, b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}
console.log(odds(5,1));
//2
function evenOdd(c){
    if(c % 2 === 0){
        console.log('Число четное');
    }
    else{
        console.log('Число нечетное');
    }
}
evenOdd(7)
//3.1
function squared(a){
    console.log(a ** 2)
}
squared(6)
//3.2 
function sq(a){
    return a ** 2;
}
console.log(sq(5));
//4
function greetings(a){
    a = prompt("Сколько тебе лет?");
    if(a < 0 || isNaN(a)){
        console.log('Вы ввели неправильное значение')
    }
    else if(a < 13){
        console.log('Привет, друг!')
    }
    else{
        console.log('Добро пожаловать!')
    }
}
greetings()
//5
function check(a, b){
    if (isNaN(a) || isNaN(b)){
    console.log('Одно или оба значения не являются числом.');
}
    else{
        console.log(a * b);
    }
}
//6
function squ(){
a = prompt("Введи число")
if(isNaN(a)){
    console.log('Переданный параметр не является числом')
}
else{
    b = a ** 3
    console.log(`${a} в кубе равняется ${b}`)
}
}
squ()
//7
function getCircleArea(){
    return Math.PI * this.radius ** 2
}
function getCirclePerimeter(){
    return 2 * Math.PI * this.radius
}
let circle1 ={
    radius: 7,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
}  
let circle2 ={
    radius: 5,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());