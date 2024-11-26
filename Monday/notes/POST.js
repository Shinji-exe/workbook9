const cardPlacement = document.getElementById("cardPlacement");
const data = document.getElementById("data-form");
const title = document.getElementById("title")

async function fetchData() {
  let promise = fetch("http://localhost:3000/todos");
  let response = await promise;
  let data = await response.json();
  console.log(data);
  makeCards(data)
}

fetchData();

function makeCards(todos) {
    cardPlacement.innerHTML = ""
  todos.forEach((todo) => {
    const cardContainers = document.createElement("div");
    cardContainers.className = "card bodyOfCard";
    cardContainers.style.width = "18rem";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = todo.userId;

    const cardLine = document.createElement("hr");

    const cardSubtitle = document.createElement("h6");
    cardSubtitle.className = "card-subtitle mb-2 text-body-secondary";
    cardSubtitle.innerText = `${todo.title}`;

    const cardText = document.createElement("p");
    cardText.className = "card-text";

    const cardText2 = document.createElement("p");
    cardText2.className = "card-text";
    cardText2.textContent = `${todo.completed}`;

    const cardLink = document.createElement("a");
    cardLink.href = `productsDetails.html?productId=${todo.id}`;
    cardLink.innerText = "See More";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardLine);
    cardBody.appendChild(cardSubtitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardText2);
    cardBody.appendChild(cardLink);
    cardContainers.appendChild(cardBody);

    cardPlacement.appendChild(cardContainers);
  });
}

async function createPost(newPost) {
  try {
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    let data = await response.json();
    console.log(data);
    fetchData();
  } catch (error) {
    console.error("Error create data:", error);
  }
}

data.addEventListener("submit", (e)=>{
e.preventDefault();
let titleField = title.ariaValueMax;

})

// async function postData(url = '', data = {}) {
//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const result = await response.json();
//         console.log('Success:', result);
//         return result;
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// }

// // Example usage:
// postData('https://example.com/api/data', {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
// });

// async function updateData(url = '', data = {}) {
//     try {
//         const response = await fetch(url, {
//             method: 'PUT', // Specify PUT method
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data), // Convert data to JSON
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const result = await response.json();
//         console.log('Data successfully updated:', result);
//         return result;
//     } catch (error) {
//         console.error('Error updating data:', error.message);
//     }
// }

// // Example usage:
// updateData('https://example.com/api/data/1', {
//     name: 'Jane Doe',
//     email: 'jane.doe@example.com',
// });
