import React from "react";

// This function fetches data from the server
async function fetchData() {
  const response = await fetch("http://localhost:3000/api/todoItem", {
    method: "GET",
    cache: "no-store", // Prevent caching
  });
  return response.json(); // Return the fetched data as JSON
}

// This function makes a POST request to the API to create a new todo
async function postData(newTodo) {
  const response = await fetch("http://localhost:3000/api/todoItem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
    body: JSON.stringify(newTodo), // Convert the new todo to JSON format
  });

  return await response.json(); // Return the response as JSON
}

// This function makes a PUT request to the API to update a todo
async function putData(updatedTodo) {
  const response = await fetch("http://localhost:3000/api/todoItem", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
    body: JSON.stringify(updatedTodo), // Convert the updated todo to JSON format
  });

  return await response.json(); // Return the response as JSON
}

// This function makes a DELETE request to the API to delete a todo
async function deleteData(id) {
  const response = await fetch("http://localhost:3000/api/todoItem", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
    body: JSON.stringify({ id }), // Convert the id to JSON format
  });

  return await response.json(); // Return the response as JSON
}

const Page = async () => {
  // Fetch the current data from the server
  const data = await fetchData();

  // Log the fetched data to the console
  console.log("Fetched Data:", data);

  // // Define a new todo item
  // const newTodo = {
  //   id: "4",
  //   title: "Nova Designs New Video 2",
  //   completed: false,
  // };

  // Make the POST request to create the new todo item
  // const createdTodo = await postData(newTodo);
  // console.log("Created Todo:", createdTodo);

  // Define an updated todo item
  // const updatedTodo = {
  //   id: "4",
  //   title: "Nova Designs New Video Updated",
  //   completed: true,
  // };

  // // Make the PUT request to update the todo item
  // const updatedResponse = await putData(updatedTodo);
  // console.log("Updated Todo:", updatedResponse);

  // Make the DELETE request to delete the todo item
  const deletedResponse = await deleteData(4);
  console.log("Deleted Todo:", deletedResponse);

  return (
    <div>
      <h1>Todo Item</h1>
    </div>
  );
};

export default Page;
