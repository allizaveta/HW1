function arr(array){
    array.sort(() => Math.random() - 0.5);
    alert(array);
    let firstGue = prompt('Чему равнялся первый элемент массива?');
    let secGue = prompt('Чему равнялся последний элемент массива?');
    
    if(firstGue.toLowerCase() === array[0].toLowerCase() && secGue.toLowerCase() === array[array.length - 1].toLowerCase()){
        alert('Ты угадал оба слова');
    }
    else if(firstGue.toLowerCase() === array[0].toLowerCase() || secGue.toLowerCase() === array[array.length - 1].toLowerCase()){
        alert('Вы были близки к победе!');
    }
    else{
        alert('неверно');
    }
}
