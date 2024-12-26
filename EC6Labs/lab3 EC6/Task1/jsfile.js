let div = document.getElementById("bottomDiv");
//fetch
async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();

  //put data into buttons
  data.forEach(function (user) {
    let button = document.createElement("button");
    button.innerHTML = user.name;
    button.onclick = async function () {
      await filterPosts(user.id);
    };
    document.body.appendChild(button);
  });
  //when clicked in any name will fetch clicked user details in bottom div

  async function filterPosts(userId) {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    let data = await response.json();
    //display user details in bottom div
    div.innerHTML = `<h2>${data.name}</h2>
    <p>${data.email}</p>
    <p>${data.address.street}, 
    ${data.address.suite}, 
    ${data.address.city}, 
    ${data.address.zipcode}</p>`;
  }
}
fetchData();
