//1
let numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) {
        console.log(numbers[i]);;
        break;
    }
    else {
        console.log(numbers[i]);;
    }
}
//2
numbers = [1, 5, 4, 10, 0, 3];

console.log(numbers.indexOf(4));
//3
numbers = [1, 3, 5, 10, 20];

numbers = numbers.join(' ');
console.log(numbers);
//4
const arr = [];
    for(i = 0; i < 3; i++){
        const el = []
        for(j = 0; j < 3; j++){
            el.push(1);
        }
        arr.push(el);
    }
    console.log(arr);
//5
numbers = [1, 1, 1];
    for(i = 0; i < 3; i++){
        numbers.push(2);
    }
console.log(numbers);

//6
numbers = [9, 8, 7, 'a', 6, 5];
numbers.sort();
numbers.pop();
console.log(numbers);

//7
numbers = [9, 8, 7, 6, 5];
const answer = Number(prompt('Введи число'))
    if(isNaN(answer)){
        alert('Божжж..чел...да я это по рофлянчику скинул');
    }
    else {
        if(numbers.includes(answer)){
            alert('угадал');
        }
        else {
            alert('Не угадал');
        }
    }

//8
let str = 'abcdef';
    str = str.split('');
    str.reverse();
    str = str.join('');
    console.log(str);

//9
numbers = [
    [1, 2, 3],
    [4, 5, 6]
];
numbers = numbers.join(',');
numbers = numbers.split(',');
numbers = numbers.map(Number);
console.log(numbers);

//10
numbers = [7, 2, 8, 1, 6 ,3];
for(i = 0; i < numbers.length - 1; i++){
    console.log(numbers[i] + numbers[i + 1]);
}

//11
numbers = [4, 3, 8, 1];
function sq(){
    return numbers.map(a => a ** 2);
}
console.log(sq(numbers));
//12
const words = ['слово', '', 'слог', 'длинное предложение', 'буква']
function wordLength(){
    return words.map(words => words.length);
}
console.log(wordLength(words));

//13
function filterPositive(array) {
    let minus = [];
    for(i = 0; i < array.length; i++){
        if(array[i] < 0){
            minus.push(array[i]);
        }
    }
    return minus;
}
  console.log(filterPositive([-1, 0, 5, -10, 56]))
  console.log(filterPositive([-25, 25, 0, -1000, -2]))