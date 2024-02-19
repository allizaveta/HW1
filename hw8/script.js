//1
const peopl = [{ name: 'Глеб', age: 29 },{ name: 'Анна', age: 17 },{ name: 'Олег', age: 7 },{ name: 'Оксана', age: 47 }];
function ageSort(a, b){
return a.age - b.age;
}
console.log(peopl.sort(ageSort));
//2
function isPositive(num) {
    return num > 0;
    }

    function isMale(hum) {
    return hum.gender === 'male';
    }

    function filter(array, ruleFunction) {
    const result = [];
    for(let element of array){
        if (ruleFunction(element)){
            result.push(element);
        }
    }
    return result;
    }
    console.log(filter([3, -4, 1, 9], isPositive));
    const people = [
        {name: 'Глеб', gender: 'male'},
        {name: 'Анна', gender: 'female'},
        {name: 'Олег', gender: 'male'},
        {name: 'Оксана', gender: 'female'}
     ];
     
     console.log(filter(people, isMale));
//3 
let i = 0;
const interval = setInterval(() => {
    console.log(new Date());
i += 3;
if(i >= 30){
    clearInterval(interval);
    console.log('Прошло 30 секунд');
}
},3000)
//4
function delayForSecondd(callback) {
    
  setTimeout(callback, 1000);
}

delayForSecondd(function () {
  console.log('Привет, Глеб!');
})
//5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'))