'use strict'

//Создать класс Programmer, инстанс которого обладает полями name, stack (массив строк, типа [«Python», «PHP», «Java»]), и методом .code() (который перебирает массив stack и выводит сообщения вида «Oleg is coding on Python», «Oleg is coding on PHP», «Oleg is coding on Java»). Метод code должен храниться в прототипе класса. Переопределить метод toString у инстансов Programmer, чтобы они выводили сообщение вида «Hello my name is Oleg»

class Programmer {
    constructor(name, stack) {
        this.name = name;
        this.stack = stack;
    }

    code() {
        this.stack.forEach((language) => {
            console.log(`${this.name} is coding on ${language}`);
        });
    }

    toString() {
        return `Hello my name is ${this.name}`
    }
}

const oleg = new Programmer("Oleg", ["Python", "PHP", "Java",]);
oleg.code();
console.log(oleg.toString());

//Создать массив из 10 случайных инстансов Programmer, и отфильтровать их с помощью функции getSeniorDeveloper так, чтобы в результирующий массив попали только те Programmer, у которы длина массива stack больше 4.

function getSeniorDeveloper(programmers) {
    return programmers.filter(programmer => programmer.stack.length > 4);
  }
  
  const languages = ['Python', 'PHP', 'Java', 'JavaScript', 'C++', 'Ruby', 'Go', 'Swift', 'Kotlin', 'Scala'];
  const names = ['Alex', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Hannah', 'Ivan', 'Julia'];
  
  const programmers = [];
  for (let i = 0; i < 10; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const stack = languages.slice(0, Math.floor(Math.random() * languages.length));
    programmers.push(new Programmer(name, stack));
  }
  
  const seniorDevelopers = getSeniorDeveloper(programmers);
  console.log(seniorDevelopers);

//Напишите функцию, которая вычисляет длину линий в стандартной двухмерной системе координат. Координаты начала и конца линий должны храниться в объектах.

class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    getLength() {
        const dx = this.end.x - this.start.x;
        const dy = this.end.y - this.start.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

// Создайте три линии.

const line1 = new Line({ x: 1, y: 1}, {x: 4, y: 3});
const line2 = new Line({ x: 2, y: 2}, {x: 4, y: 5});
const line3 = new Line({ x: 3, y: 3}, {x: 5, y: 6});

// Вычислите их длины с помощью функции

const length1 = line1.getLength();
const length2 = line2.getLength();
const length3 = line3.getLength();

console.log(`Length of line 1: ${length1}`);
console.log(`Length of line 2: ${length2}`);
console.log(`Length of line 3: ${length3}`);

// Проверьте, могут ли три линии сформировать треугольник Помните: Длину линии можно найти по теореме Пифагора. Стороны могут сформировать треугольник если длина каждой стороны треугольника должны быть меньше суммы длин остальных сторон.

if (length1 + length2 > length3 && length2 + length3 > length1 && length1 + length3 > length2) {
    console.log("These lines can form  a triangle.");
} else {
    console.log("These lines cannot form a triangle.")
}

//Создать конструктор Car, который принимает параметры model, color, price. Конструктор должен возвращать объект в котором присутствуют вышеназванные поля со значениями. Каждый представитель класса Car должен обладать методом run() который выводит сообщение вида : MODEL + “ ” + COLOR + ” is running”.

class Car {
    constructor(model, color, price) {
        this.model = model;
        this.color = color;
        this.price = price;
    }

    run() {
        console.log(`${this.model} ${this.color} is running`)
    }
}

const car1 = new Car('Toyota', 'red', 10000);

car1.run();

//Создать конструктор Book, с помощью этого конструктора создать массив из 8 книг (объектов). Каждая книга должна представлять из себя объект, в котором есть три поля: author, bookName, pageAmount. Создать функцию getBiggerBook(), которая принимает массив книг и возвращает ОДНУ книгу с наибольшим количеством страниц

class Book {
    constructor(author, bookName, pageAmount) {
        this.author = author;
        this.bookName = bookName;
        this.pageAmount = pageAmount;
    }
}

const books = [
    new Book('Михаил Булгаков', 'Мастер и Мргарита', 460),
    new Book('Антон Чехов', 'Каштанка', 1200),
    new Book('Фёдор Достоевский', 'Идиот', 230),
    new Book('Фёдор Достоевский', 'Униженные и оскорблённые', 600),
    new Book('Лион Фейхтвангер', 'Гойя', 555),
    new Book('Наринэ Абгарян', 'Понаехавшая', 781),
    new Book('Стивен Кинг', 'Ловец снов', 800),
    new Book('Стивен Кинг', 'Зелённая миля', 464)
];

function getBiggerBook(books) {
    let maxPages = 0;
    let biggerBook = null;

    for (let i = 0; i < books.length; i++) {
        if(books[i].pageAmount > maxPages) {
            maxPages = books[i].pageAmount;
            biggerBook = books[i];
        }
    }

    return biggerBook;
}

const biggerBook = getBiggerBook(books);

console.log(`Книга с наибольшим количеством страниц: ${biggerBook.bookName}, автор - ${biggerBook.author}, количество страниц - ${biggerBook.pageAmount}`);

//Создать класс Timer, инстанс которого запускает таймер и выводит в консоль прошедшее время в секундах (1 2 3 4 5 и тд) инстанс должен обладать методами .start() .stop() которые запускают и останавливают таймер а также методом .reset() который сбрасывает таймер на 0. С помощью Timer вы должны создать несколько таймеров и убедится в том, что они работают независимо друг от друга. останавливайте таймер через некоторое время после запуска с помощью setTimeout()

class Timer {
    constructor() {
        this.seconds = 0;
        this.intervalId = null;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.seconds++;
            console.log(this.seconds);
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
    }

    reset() {
        this.seconds = 0;
        clearInterval(this.intervalId);
    }
}

const timer1 = new Timer();
timer1.start();
setTimeout(() => {
    timer1.stop();
}, 5000);

const timer2 = new Timer();
timer2.start();
setTimeout(() => {
    timer2.stop();
}, 10000);