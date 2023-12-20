   //1
   let a = 10;
   alert(a);
   a = 20;
   alert(a);
   //2
   let year = 2007;
   alert(year);
   //3
   let creater = 'Brendan Eich';
   alert(creater);
   //4
   let x = 10;
   let y = 2;
   let sum = x + y;
   alert(sum);
   let sub = x - y;
   alert(sub);
   let mul = x * y;
   alert(mul);
   let div = x / y;
   alert(div);
   //5
   let result = 2 ** 5;
   alert(result)
   //6
   a = 9;
   b = 2;
   result = a % b;
   alert(result)
   //7
   let num = 1;
   num += 5;
   num -= 3;
   num *= 7;
   num /= 3;
   ++num
   --num
   alert(num);
   //8
   let age = Number(prompt('Сколько вам лет?'));
   alert(age)
   //9.0
   let user = {
       name :'Matvei',
       age : 20,
       isAdmin : false
   }
   //9.1
   user.cityOfResidence = 'Moscow';
   //9.2
   age = 35;
   //9.3
   delete user.cityOfResidence
   //9.4
   user.info = string(prompt("Какую информацию хотите узнать o пользователе?"));
   alert(user[info]);
   //10
   baba = prompt('Как тебя зовут?')
   alert(`Привет, ${baba}!`)