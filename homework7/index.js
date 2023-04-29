'use strict'

const persons = [
    {
        name: 'One',
        age: 1,
    },
    {
        name: 'Two',
        age: 2
    },
    {
        name: 'Three',
        age: 3
    },
    {
        name: 'Four',
        age: 4
    }
];


//Каждому объекту из этого массива необходимо добавить метод .sayHello() который выводит сообщение вида "Hello! My name is {NAME}", где NAME - это поле name каждого объекта

persons.forEach(person => {
    person.sayHello = function() {
        console.log(`Hello! My name is ${this.name}`);
    }
});

persons[0].sayHello();
persons[1].sayHello();
persons[2].sayHello();
persons[3].sayHello();

//используя setTimeout и .forEach(), вызовите метод .sayHello() у каждого объекта с задержкой в 1 секунду

persons.forEach((person, index) => {
    setTimeout(() => {
        person.sayHello();
    }, (index + 1) * 1000);
});

//используя объект
const creature = { name: 'Ctulhu', eyes: 8 };

// заставьте creature воспользоваться методом .sayHello() любого объекта из массива, при этом не добавляя этот метод в creature

const sayHello = persons[0].sayHello;
sayHello.call(creature);

//напишите функцию которая принимает коллбэк (метод .sayHello() любого объекта из массива) эта функция должна выводить сообщение вида "Ladies and Gentlemen, here is our person: " после чего должна запускать коллбэк (метод .sayHello() любого объекта из массива)

