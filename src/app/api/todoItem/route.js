import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http://localhost:5000/todos");
  const todos = await res.json();

  return NextResponse.json(todos);
}

// POST: Creating a new todo item in the local JSON server
export async function POST(request) {
  const body = await request.json(); // Get the request body (new todo)

  // Send the new todo to the local JSON server using POST
  const res = await fetch("http://localhost:5000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Define the content type
    },
    body: JSON.stringify(body), // Send the new todo as JSON
  });

  const todo = await res.json(); // Parse the response as the created todo

  return NextResponse.json(todo); // Return the created todo
}

// PUT: Updating a todo item in the local JSON server
export async function PUT(request) {
  const body = await request.json(); // Get the request body (updated todo)

  // Send the updated todo to the local JSON server using PUT
  const res = await fetch(`http://localhost:5000/todos/${body.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", // Define the content type
    },
    body: JSON.stringify(body), // Send the updated todo as JSON
  });

  const todo = await res.json(); // Parse the response as the updated todo

  return NextResponse.json(todo); // Return the updated todo
}

// DELETE: Deleting a todo item from the local JSON server
export async function DELETE(request) {
  const body = await request.json(); // Get the request body (todo id)

  // Send the todo id to the local JSON server using DELETE
  const res = await fetch(`http://localhost:5000/todos/${body.id}`, {
    method: "DELETE",
  });

  return NextResponse.json(res); // Return the response
}
