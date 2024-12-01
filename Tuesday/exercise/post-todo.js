"use strict";

const listings = document.getElementById("listings");
const searchTodo = document.getElementById("searchTodo");

//Getting all todos/Posts

async function todos() {
  try {
    let promise = fetch("http://localhost:3000/todos?_sort=id&_order=desc");
    let response = await promise;
    let data = await response.json();
    console.log(data);
    createDivs(data);
  } catch (error) {
    console.error("Error Message: ", error);
  }
}

todos();

/////////////////////////

//Searching for a post(one post) using the .find() method
async function searching() {
  // e.preventDefault()
  listings.innerHTML = "";

  let findTodo = String(searchTodo.value.trim());
  try {
    let promise = fetch(`http://localhost:3000/todos?title=${findTodo}`);

    let response = await promise;
    let data = await response.json();

    if (!response.ok) {
      console.log("Error", `${response.statusText}`);
      return;
    }
    // singularTodo(data[0]);

    let postFilter = data.find((post) => post.title === findTodo);
    singularTodo(postFilter);

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
///////////////////

function singularTodo(todo) {
  // Create card container
  const cardContainers = document.createElement("div");
  cardContainers.className = "card bodyOfCard mt-3 w-100";
  cardContainers.style.width = "18rem";

  // Create card body
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  // Title
  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = todo.title; // Use the `title` from the `todo` object

  // Horizontal line
  const cardLine = document.createElement("hr");

  // Subtitle (example for additional details, adjust as needed)
  const cardSubtitle = document.createElement("h6");
  cardSubtitle.className = "card-subtitle mb-2 text-body-secondary";
  cardSubtitle.innerText = todo.description || "No description available";

  // Text 1
  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = `Status: ${todo.completed ? "Completed" : "Incomplete"}`;

  // Text 2 (optional)
  const cardText2 = document.createElement("p");
  cardText2.className = "card-text";
  cardText2.textContent = `ID: ${todo.id}`; // Display the todo ID

  // Link (if applicable)
  const cardLink = document.createElement("a");
  cardLink.href = `postDetails.html?id=${todo.id}`; // Link to details page
  cardLink.innerText = "See More";

  // Assemble card
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardLine);
  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardText2);
  cardBody.appendChild(cardLink);
  cardContainers.appendChild(cardBody);

  // Append card to the listings container
  // Ensure 'listings' is an actual DOM element
  listings.appendChild(cardContainers);
}

function createDivs(todos) {
  todos.forEach((todo) => {
    let maindiv = document.createElement("ul");

    let list = document.createElement("li");

    let userProfile = document.createElement("p");
    userProfile.innerText = todo.userId;

    let titleText = document.createElement("h2");
    titleText.innerText = todo.title;

    let completedStatus = document.createElement("h6");
    completedStatus.innerText = `${todo.completed}`;

    let buttonEdit = document.createElement("button");
    buttonEdit.innerText = "Edit";

    let buttonUpdate = document.createElement("button");
    buttonUpdate.innerText = "Update";

    let buttonDelete = document.createElement("button");
    buttonDelete.innerText = "Delete";
    buttonDelete.addEventListener("click", async () => {
      await deleteTodo(todo);
      maindiv.remove();
    });

    let link = document.createElement("a");
    link.href = `postDetails.html?id=${todo.id}`;
    link.innerText = "Edit";

    if (todo.completed === true) {
      completedStatus.className = "list-group-item-danger";
    }

    maindiv.appendChild(userProfile);
    maindiv.appendChild(titleText);
    maindiv.appendChild(completedStatus);
    maindiv.appendChild(buttonEdit);
    maindiv.appendChild(buttonUpdate);
    maindiv.appendChild(buttonDelete);
    maindiv.appendChild(list);
    maindiv.appendChild(link);
    listings.appendChild(maindiv);
  });
}

// function handlePost() {}

async function createTodo() { //No id needed because backend makes the id when posted usung POST method
  //Creates a post or todo that is sent to
  let bodyData = {
    userId: document.getElementById("userId").value,
    title: document.getElementById("posting").value,
  };
  let promise = fetch("http://localhost:3000/todos", {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {
      "Content-type": "application/json",
    },
  });
  let response = await promise;
  let data = await response.json();
  console.log(data);
}

// let theTodo = {
//   userId: 1,
//   title: "Making Money again",
//   completed: true,
// };

// createTodo(theTodo);

// async function updateTodo(params) {
//   let promise = fetch("http://localhost:3000/todos/" + params.id, {
//     method: "PUT",
//     body: JSON.stringify(params),
//     headers: {
//       "Content-type": "application/json",
//     },
//   });
//   let response = await promise;
//   let data = await response.json();
//   console.log(data);
// }

async function updateTodo(params, e) { //Needs an id
  e.preventDefault();
  let updateBodyData = {
    userId: document.getElementById("userId").value,
    title: document.getElementById("title").value,
  };

  try {
    let promise = fetch("http://localhost:3000/todos/" + params.id, {
      method: "PUT",
      body: JSON.stringify(updateBodyData),
      headers: {
        "Content-type": "application/json",
      },
    });

    let response = await promise;
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error code", error);
  }
}

//OR

// async function updateTodo(params,id) {
//     let promise = fetch(`http://localhost:3000/todos/${params.id}`, {
//         method: "PUT",
//         body: JSON.stringify(params),
//         headers: {
//           "Content-type": "application/json",
//         },
//       });
//       let response = await promise;
//       let data = await response.json();
//       console.log(data);
// }

// let theTodoUpdate = {
//     id: "18",
//     userId: 1,
//     title: "taking a break",
//     completed: true,
//   };

//    updateTodo(theTodoUpdate)

async function deleteTodo(params) {
  // e.preventDefault()
  let promise = fetch(`http://localhost:3000/todos/` + params.id, {
    method: "DELETE",
  });
  let response = await promise;
  if (response.status == 200) {
    console.log("Successfully Deleted");
  }
  console.log(data);
}

// deleteTodo()

// let theTodoDelete = {
//     id: "15",
//     userId: 1,
//     title: "Making Money no more for me",
//     completed: false,
//   };

//   deleteTodo(theTodoDelete)
