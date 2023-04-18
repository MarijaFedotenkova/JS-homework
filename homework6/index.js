//Создать функцию «переключатель» toggleMe(), которая при вызове чередует возвращаемые булевы значения (true, false).

let toggle = true;

function toggleMe() {
  toggle = !toggle;
  return toggle;
}

console.log(toggleMe()); 
console.log(toggleMe()); 
console.log(toggleMe()); 
console.log(toggleMe()); 

//Создать функцию counter(), которая способна считать количество своих вызовов (возвращает число). Если передать в эту функцию число как аргумент, то она должна возвращать счетчик начиная с этого числа.

function counter() {
    let count = 0;
    return function(num) {
        if (typeof num === 'number') {
            count = num;
        }
        count++;
        return count;
    }
}

const count = counter();

console.log(count());
console.log(count());
console.log(count(6));
console.log(count());
console.log(count(11));
console.log(count());
console.log(count());

//Создать функцию classNameEditor(), задача которой "управлять" css-классами. Функция должна принимать строку с названием css-класса и булево значние. Если булево значение true, то функция должна добавлять переданный css-класс, если false, то найти и удалить значение из css-класса. Функция всегда должна возвращать текущее значение css-класса.

function classNameEditor() {
    let classNames = new Set();

    function updateClass(name, add) {
        if(add){
            classNames.add(name);
        } else {
            classNames.delete(name);
        }
    }

    return function(name, add) {
        updateClass(name, add);
        return Array.from(classNames).join(' ');
    }
}

const editClass = classNameEditor();

console.log(editClass());
console.log(editClass('test', true));
console.log(editClass('test', true));
console.log(editClass('smth', true));
console.log(editClass('test', false));
console.log(editClass('test', false));

//Создать функцию checkLogin, которая принимает 4 параметра. 1 параметр - это логин, введенный пользователем, 2 – правильный логин, 3 – callback, который вызовется если логин верный, 4 – callback, который вызовется если логин ложный.

function checkLogin(userLogin, correctLogin, onSuccess, onError){
    if(userLogin === correctLogin) {
        onSuccess();
    } else{
        onError();
    }
}

function itsOk() {
    console.log('Login is correct');
}

function itsNotOk() {
    console.log('Login is incorrect');
}

checkLogin('user-admin', 'admin', itsOk, itsNotOk);

// Написать функцию которая принимает массив строк (имена) и два колбэка. функция добавляет к каждому элементу массива фамилию "Smith" после чего передает получившийся массив в первый колбэк. Когда первый колбэк отработает, возвращеное им значение нужно передать во второй колбэк.
// 1ый колбэк: это функция которая принимает массив строк, добавляет к каждой строке "Mr. " и возвращает получившийся массив. 2ой колбэк: функция которая принимает массив строк и выводит через alert() каждый элемент массива.

function processNames(names, callback1, callback2){
    const fullNames = names.map(name => name + 'Smith');
    const namesWithMr = callback1(fullNames);
    callback2(namesWithMr);
}

function addMr(names) {
    return names.map(name => 'Mr. ' + name);
}

function alertNames (names) {
    names.forEach(name => alert(name));
}

const names = ['John', 'Jane', 'Bob'];
processNames(names, addMr, alertNames);

//Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, которая вернет массив только из тех чисел, которые повторялись в исходном.

function getDuplicate(arr) {
    const counts = {};
    const duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
        if(counts[num] === 2) {
            duplicates.push(num);
        }
    }

    return duplicates;
}

const arr = [1,1,1,4,4,5,1,6,6,74,74,74,3];
const duplicates = getDuplicate(arr);
console.log(duplicates);

//Cоздать случайный двумерный массив (вложенные массивы разной длины) из 8 элементов. Обработать массив reduce() и вернуть тот массив сумма элементов которого наибольшая.

function getRandom2DArray(length) {
    const arr2 = [];

    for (let i = 0; i < length; i++) {
        const innerArr = [];
        const innerArrLength = Math.floor(Math.random() * 5) + 1;
        for (let j = 0; j < innerArrLength; j++) {
            innerArr.push(Math.floor(Math.random() * 10));
        }
        arr2.push(innerArr);
    }

    return arr2;
}

function getArrayWithLargestSum(arr2) {
    return arr2.reduce((acc, cur) => {
        const sum = cur.reduce((a, b) => a + b, 0);
        return sum > acc.sum ? { array: cur, sum} : acc;
    }, { array: [], sum: -Infinity }).array;
}

const arr2 = getRandom2DArray(8);
console.log(arr2);

const arrayWithLargestSum = getArrayWithLargestSum(arr2);
console.log(arrayWithLargestSum);

//Дан случайный массив чисел. С помощью метода .filter() отфильтруйте массив так, чтобы в новый массив вошли только четные двухзначные числа из исходного.

const arr3 = [3, 23, 44, 45, 59, 65, 78, 83, 96,];

const filteredArr = arr3.filter(num => num >= 10 && num <= 99 && num % 2 === 0);

console.log(filteredArr);

//Дан массив объектов:
//С помощью метода reduce() преобразуйте его в объект вида:
//const fbPlayersByTeams = {
//     Juventus: [{}, {}, {}],
//     PSG: [{}],
//     Chelsea: [{}, {}],
//     Vedrich97: [{}],
//     Barcelona: [{}, {}]
// }
//Игроки должны быть сгруппированы по командам в соответствующие поля объекта fbPlayersByTeams. Под {} в примере имеется ввиду полный объект игрока (такая запись сделана для упрощенного понимания примера)
const fbTeam = [
     {
     playerName:"Messi",
     team:"Barcelona"
     },
     {
     playerName:"Suarez",
     team:"Barcelona"
     },
     {
     playerName:"Ronaldo",
     team:"Juventus"
     },
     {
     playerName:"Buffon",
     team:"Juventus"
     },
     {
     playerName: 'Valerchik',
     team: 'Vedrich97'
     },
     {
     playerName:"Gonsalo",
     team:"Juventus"
     },
     {
     playerName:"Pedro",
     team:"Chelsea"
     },
    {
     playerName:"Zuma",
     team:"Chelsea"
     },
     {
     playerName:"PSG",
     team:"Rico"
     }
 ];

 const fbPlayersByTeams = fbTeam.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue.team]) {
      accumulator[currentValue.team] = [];
    }
    accumulator[currentValue.team].push(currentValue);
    return accumulator;
  }, {});
  
  console.log(fbPlayersByTeams);

