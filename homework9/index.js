// Сделайте запрос по адресу https://reqes.in/api/users?page=1, обработайте ответ и выведите в консоль только тех юзеров у которых в поле last_name не менее 5ти символов

fetch("https://reqres.in/api/users?page=1")
  .then((response) => response.json())
  .then((data) => {
    const users = data.data;
    const filteredUsers = users.filter((user) => user.last_name.length >= 5);
    console.log(filteredUsers);
  })
  .catch((error) => console.log(error));
//Сделайте запрос по адресу https://reqes.in/api/users?page=1, обработайте ошибку этого запроса и выведите в консоль Не удалось загрузить данные

fetch("https://reqes.in/api/users?page=1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Не удалось загрузить данные");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    const errorMessage = "Не удалось загрузить данные " + error;
    console.log(errorMessage);
  });

//Cделайте запрос https://reqres.in/api/users?page=1, ПОСЛЕ чего найдте id пользователя под именем и фамилией Emma Wong, сделайте следующий запрос на https://reqres.in/api/users/${id}, ПОСЛЕ выведите данные пользователя в консоль

fetch('https://reqres.in/api/users?page=1')
.then(response => response.json())
.then(data => {
    const user = data.data.find(user => user.first_name === 'Emma' && user.last_name === 'Wong');
    if(!user) {
        throw new Error ('Пользователь не найден')
    }
    const userId = user.id;
    return fetch(`https://reqres.in/api/users/${userId}`)
    .then(response => response.json());
})
.then(userData => {
    console.log(userData.data);
})
.catch(error => {
    console.log('Ошибка', error)
})