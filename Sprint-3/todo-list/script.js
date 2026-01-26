let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

// ---------- HELPERS ----------
function createTodoItem(todo) {
  const li = document.createElement("li");
  li.innerText = todo.task;

  // Tick icon
  const tick = document.createElement("i");
  tick.className = "fa fa-check";
  tick.style.marginLeft = "10px";

  tick.addEventListener("click", () => {
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "";
    } else {
      li.style.textDecoration = "line-through";
    }
  });

  // Trash icon
  const trash = document.createElement("i");
  trash.className = "fa fa-trash";
  trash.style.marginLeft = "10px";

  trash.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(tick);
  li.appendChild(trash);

  return li;
}

// ---------- POPULATE LIST ----------
function populateTodoList(todos) {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = createTodoItem(todo);
    list.appendChild(li);
  });
}

populateTodoList(todos);

// ---------- ADD NEW TODO ----------
function addNewTodo(event) {
  event.preventDefault();

  const input = document.getElementById("todoInput");
  const value = input.value.trim();

  if (value === "") return;

  const todo = { task: value, completed: false };
  const li = createTodoItem(todo);

  document.getElementById("todo-list").appendChild(li);
  input.value = "";
}

document.querySelector("form").addEventListener("submit", addNewTodo);

// ---------- REMOVE ALL COMPLETED ----------
function deleteAllCompletedTodos() {
  const listItems = document.querySelectorAll("#todo-list li");

  listItems.forEach((li) => {
    if (li.style.textDecoration === "line-through") {
      li.remove();
    }
  });
}

document
  .getElementById("remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);
