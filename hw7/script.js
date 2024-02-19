//1
let str = 'js'
str = str.toUpperCase();
//2
function searchStart(product, search){
product.forEach((product) => {
	if (product.toLowerCase().startsWith(search.toLowerCase())) {
		console.log(product);
	}
});
}
//3
let num = 32.58884;
Math.floor(num);
Math.ceil(num);
Math.round(num);
//4
let numbers = [52, 53, 49, 77, 21, 32];
Math.min(...numbers);
Math.max(...numbers);
//5
function random(){
    return Math.round(Math.random()*10)+1;
}
//6
function randomNum(j){
    let result = [];
    for(let i = 0; i < j/2; i++ ){
        result.push(Math.round(Math.random() * j))
    }
    return result;
}
//7
function randomInt(minValue, maxValue){
    return Math.floor(Math.random()*(maxValue - minValue + 1))+minValue;
}
//8
console.log(new Date());
//9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate()+ 73);
//10
function dateRu(date){
    let day = ['Воскресенье','понедельник','вторник','срелда','четверг','пятница','суббота'];
    let month = ['Января','февраля','мапиа','апреоя','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    return `Дата: ${date.getDate()}  ${month[date.getMonth()]} ${date.getFullYear()} - это ${day[date.getDay()]}
    Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}