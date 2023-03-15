//Написать программу, которая определяет количество положительных, отрицательных чисел и нулей. Пользователь вводит числа с помощью prompt() до тех пор пока не нажмет отмена. Пример вывода: Положительных: 2 шт. Отрицательных: 5 шт. Нулей: 3 шт.

let posiveCount = 0;
let negativCount = 0;
let zeroCount = 0;

while (true){
    const input = prompt("Введите число");

    if(input === null){
        break; //если пользователь нажал отмену, прерываем цыкл
    }

    const number = Number(input);

    if(isNaN(number)){
        continue; // пропускаем итерацию если не число
    }

    if (number > 0){
        posiveCount++;
    }else if(number < 0){
        negativCount++;
    }else{
        zeroCount++
    }
}

alert(`Положительных чисел ${posiveCount}. Отрицательных чисел ${negativCount}. Нулей ${zeroCount}`);


// //Написать программу, которая выводит среднее арифметическое n чисел введенных пользователем. Ввод чисел прекращается, когда нажали отмена, после чего выводится среднее арифметическое.

let sum = 0;
let count = 0;

while(true) {
    const input1 = prompt('Введите число');

    if (input1 === null){
        break;
    }

    const number1 = Number(input1)

    if(isNaN(number1)){
        continue;
    }

    sum += number1
    count++
}

const average = count > 0 ? sum / count : 0;

alert(`Среднее арифметическое ${average}`);

//Написать программу, в которой пользователя просят ввести числа 5 раз. Причем каждое последующее число должно быть больше предыдущего, иначе вывести текст ошибка! в консоль и прекратить ввод.

let prevNumber = null;

for(let i = 0; i < 5; i ++){
    const number2 = prompt(`Введите число №${i + 1}`);

    if (prevNumber !== null && number2 <= prevNumber){
        console.log("Ошибка!");
        break;
    }
    prevNumber = number2
}

//Написать программу-генератор популярных песен. Пользователь вводит число. Вывести количество pam равное этом числу. Строка должна начинаться с param. Например: Вводим 3 Программа выводит: "param-pam-pam-pam" Вводим 5 Программа выводит: "param-pam-pam-pam-pam-pam" ==В этом задании запрещено использовать .repeat() (все делаем циклом)==

const countStr = prompt("Введите количество 'pam' ");
const count1 = Number(countStr);

if(!isNaN(count1)) {
    let song = "param";
    for (let i = 0; i < count1; i++) {
        song += "-pam";
    }
    console.log(song);
} else {
    console.log("Ошибка ввода");
}