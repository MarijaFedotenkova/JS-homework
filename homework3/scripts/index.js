//Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

const names = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
const removedNames = names.splice(2,3);

console.log(names);
console.log(removedNames);

//Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Переставить "Janett", "Franz" в начало массива

let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

let indexJanett = arr.indexOf("Janett");
let indexFranz = arr.indexOf("Franz");

arr.splice(indexJanett, 1);
arr.splice(indexFranz, 1);

arr.unshift("Janett");
arr.unshift("Franz");

console.log(arr);

//Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; Заменить "Eddie", "Janett" на "Oleg","Valerchik"

const array = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

const index1 = 4;
const index2 = 5;

array.splice(index1, 1, "Oleg");
array.splice(index2, 1, "Valerchik");

console.log(array);

//Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]; "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

let arrays = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

arrays.reverse();

for(let i = 0; i < 4; i++){
    arrays[i] = "Mitrofan";
};
console.log(arrays);

//Даны два массива ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"] "Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"][ Взять из второго массива все имена начина с "Aristarkh" (включительно) и добавить их в 1ый массив (не должно получится двумерного массива)

const arr1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
const arr2 =["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];

const filteredNames = arr2.filter(name => name.startsWith("Aristarkh"));

arr1.push(...filteredNames);

console.log(arr1)

//Дана строка 'Мама мыла раму' С помощью prompt() получите строку. Поменяйте в строке 'Мама мыла раму' слово раму на полученное слово Например:
// prompt() ===>>> 'машину'
// // ‘Мама мыла машину’
// prompt() ===>>> 'рябину'
// // ‘Мама мыла рябину’
// prompt() ===>>> 'картину'
// // ‘Мама мыла картину’
// Вы можете использовать методы split, join, pop, push, slice и любые другие

let str = 'Мама мыла раму';
let word = prompt('Введите новое слово:');
str = str.replace('раму', word);
console.log(str);