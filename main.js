const fetchAPI = () => {
  const url = "https://randomuser.me/api/?results=10";
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

const button = document.querySelector('button');
button.addEventListener('click', fetchAPI);