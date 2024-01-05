// 1
let i = 1;
while(i <= 2) {
console.log('Привет');
    i++;
}
//2
let b = 0;
do {
    b++
    console.log(b);
} while(b <= 4)

//3
for(let a = 7; a <= 22; a++){
    console.log(a);
}
//4
let obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400,
}
for ( let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов`)
  }
  
//5
let n = 1000;
let num = 0;

while(n >= 50){
    n = n / 2;
    num++;
}
console.log(n);
console.log(num);
//6
let friday = 3;
do{
    console.log(`Сегодня пятница, ${friday}-e число. Необходимо подготовить отчет.`);
    friday += 7;
}while(friday <= 31)