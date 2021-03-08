const fetchAPI = (e) => {
  e.preventDefault();
  const gender = document.querySelector('[name="gender"]').value;
  const usersNumber = document.querySelector('#users-number').value;
  const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${gender === "both" ? "male,female" : gender}`;
  console.log(url)
  fetch(url)
    .then(response => {
      if (response.status !== 200) {
        throw Error("To nie jest odpowiedz 200");
      } else {
        return response.json();
      }
    })
    .then(data => showUsers(data.results))
    .catch(error => console.log(error))
}

const showUsers = (users) => {
  console.log(users)
  const resultArea = document.querySelector('.users-list');
  users.forEach(user => {
    const person = document.createElement('div');
    person.className = 'user';
    person.innerHTML = `
    <div class="user__name">${user.name.title.toUpperCase()} ${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}</div>
    <img class="user__image" src=${user.picture.medium}>
    `
    resultArea.appendChild(person);
  })
}

const button = document.querySelector('.generator');
button.addEventListener('submit', fetchAPI);