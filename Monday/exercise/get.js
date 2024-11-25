"use strict"

async function getPost() {
    let promise = fetch("http://localhost:3000/posts")
    let response = await promise;
    let data = await response.json()
    console.log(data)
}

getPost()