//Дан случайный массив чисел (создайте самостоятельно). С помощью метода .filter() отфильтруйте массив так, чтобы в новый массив вошли только четные двухзначные числа из исходного.

const array = [14, 23, 42, 57, 88, 93, 98];

const filteredArray = array.filter(num => {
    return num >= 10 && num <= 99 && num % 2 === 0
});

console.log(filteredArray);

//Пользователь вводит 10 случайных значений. Каждое значение необходимо записать в массив. С помощью метода .every() проверить были ли все введенные пользователем данные – числами.

const userInput = [];

for (let i = 0; i < 10; i++) {
    userInput.push(prompt(`Введите значение ${i + 1}:`));
}

const areAllNumbers = userInput.every(value => {
    return !isNaN(value);
});

console.log(areAllNumbers);

//Вывести в консоль 'its valid', если во всех объектах поле a > b, вывести 'its invalid' если хотя бы в одном объекте a<=b

const arr = [
    {a: 2, b: 1},
    {a: 5, b: 12},
    {a: 95, b: 7}
  ];

const isValid = arr.every(obj => obj.a > obj.b);

if (isValid){
    console.log ('its valid');
} else {
    console.log('its invalid');
}

//На основе массива arr, создать массив объектов у которых поле b возведено в квадрат пример:
// const arr2 = [
//     {a: 2, b: 1},
//     {a: 5, b: 144},
//     {a: 95, b: 49}
//   ];

const arr2 = arr.map(obj => {
    return {a: obj.a, b: obj.b ** 2};
});

console.log(arr2);