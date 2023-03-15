//Пользователь вводит ТРИ числа вывести в консоль наибольшее из них. В этой задаче необходимо сделать проверку на число (нужно убедиться, что пользователь ввел именно число)
let num1 = prompt('Введите первое число:')
let num2 = prompt('Введите второе число:')
let num3 = prompt('Введите третье число:')

if(isNaN(num1) || isNaN(num2) || isNaN (num3)){
    console.log('Ошибка! Введите число.')
}else{
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    let max = num1;
    if(num2 > max){
        max = num2;
    }
    if(num3 > max) {
        max = num3;
    }
    console.log('Наибольшое число:' + max);
}
//Используя конструкцию switch, напишите программу, которая переводит числа в слова. Например: пользователь вводит число 2, программа выводит «Два». Программу необходимо сделать для цифр от 0 до 5 (включительно)

let number = prompt('Введите число от 0 до 5');

switch (Number(number)) {
    case 0:
        console.log('Ноль');
        break;
    case 1:
        console.log('Один');
        break;
    case 2:
        console.log('Два');
        break;
    case 3:
        console.log('Три');
        break;
    case 4:
        console.log('Четыре');
        break;
    case 5:
        console.log('Пять');
        break;
    default:
        console.log('Ошибка! Введите число от 0 до 5')
}
//Дан следующий код:

// let age = 10;

// if (age < 10) {
//     console.log('hi!');
// } else if (age < 20) {
//     console.log('hello!');
// } else {
//     console.log('good day!');
// }
// Необходимо переписать этот код используя тернарный оператор

let age = 10;

let greeting = (age < 10) ? 'hi!' : (age < 20) ? 'hello' : 'goood day!';
console.log(greeting);

// //Написать программу для проверки таблицы умножения:
// Пользователь вводит число a
// Пользователь вводит число b
// Пользователь вводит ответ на a * b
// Нам необходимо проверить ответ пользователя на корректность, если пользователь ответил неправильно то выводим ответ вида: Ошибка! Правильный ответ: correctAnswer

let a = prompt('Введите первый множитель');
let b = prompt('Введите второй множитель');
let userAnswer = prompt('Сколько будет' + a + ' * ' + b + '?');

let correctAnswer = a * b;

if(userAnswer === correctAnswer) {
    console.log('Правильный');
}else{
    console.log('Ошибка! Правильный ответ' + correctAnswer)
}