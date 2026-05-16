let inputElement = document.getElementById('todo_input');
let todoBtn = document.getElementById('todo_btn');
let todoList = document.querySelector('.todoList');
todoBtn.addEventListener("click", function(){

  let todoText = inputElement.value.trim();

  if (todoText === "") return alert("Please enter a todo item.");
  // create a new todo item

  const todonewList = document.createElement("li");
  todonewList.innerHTML = `${todoText} <button class="deleteBtn"> Delete </button> <button class="completeBtn"> Complete </button>`;

  localStorage.setItem("todoText",todoText);
    // add the newList to the todoList
  todoList.appendChild(todonewList);

  
  // complete functionality
  todonewList.querySelector(".completeBtn").addEventListener("click", function(){
    todonewList.style.textDecoration = "Line-through";
    todonewList.style.fontStyle = "italic"; // change font style to italic to indicate completion
    todonewList.style.color = "gray"; // change text color to gray to indicate completion
    todonewList.querySelector(".completeBtn").disabled = true; // disable the complete button after marking as complete
  })
  
  // delete functionality
  todonewList.querySelector(".deleteBtn").addEventListener("click", function(){
    todonewList.remove()
  })
  
  // clear the input field
  inputElement.value = "";
})