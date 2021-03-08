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
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

const button = document.querySelector('.generator');
button.addEventListener('submit', fetchAPI);