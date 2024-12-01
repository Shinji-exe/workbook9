"user strict";

const postArea = document.getElementById("postArea");

const urlParams = new URLSearchParams(location.search);

let todosId = urlParams.get("id");

async function getThePost() {
  let promise = fetch(`http://localhost:3000/todos/${todosId}`);
  let response = await promise;
  let data = await response.json();
  getPostInformation(data);
  console.log(data);
}

getThePost();

function getPostInformation(post) {
  let card = document.createElement("div");
  card.className = "card";

  let cardHeader = document.createElement("div");
  cardHeader.className = "card-header";

  let username = document.createElement("p");
  username.innerText = `${post.userId}`;
  cardHeader.appendChild(username);

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let cardTitle = document.createElement("h2");
  cardTitle.className = "card-title";
  cardTitle.innerText = `${post.title}`;

  let cardBody2 = document.createElement("p");
  cardBody2.innerText = `${post.completed ? "Completed" : "Not Completed"}`;

  let link = document.createElement("a")
  link.href = "index.html"
  link.innerText = "Back"


  let cardFooter = document.createElement("div");
  cardFooter.className = "card-footer";

  let cardFooterName = document.createElement("p");
  cardFooterName.innerText = `${post.id}`;
  cardFooter.appendChild(cardFooterName);

  let editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.addEventListener("click", async (e) => {
    e.preventDefault();
    await updateTodo(post, e);
  });

  card.appendChild(cardHeader);
  card.appendChild(cardTitle);
  card.appendChild(cardBody);
  card.appendChild(cardBody2);
  card.appendChild(link);
  card.appendChild(editButton);
  card.appendChild(cardFooter);
  postArea.appendChild(card);
}
