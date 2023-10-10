const add = document.querySelector(".add");
const input = document.querySelector("#input");
const body = document.querySelector("body");
const form = document.querySelector("form");
let arrobj = [];
const todosContainer = document.querySelector(".todos-conatiner")

// Functions
// Charger la todo àpd locastorage et mettre tous les éléments dans des li
const refreshTodos = () => {
  todosContainer.innerHTML = ""
  const tempArr = JSON.parse(localStorage.getItem("todos"));
  let countTasks =1
  tempArr.forEach((element) => {
    let newLi = document.createElement("li");
    element.id = "Task " +  countTasks
    countTasks++
    
    newLi.innerHTML = `<span>${element.id}: ${element.content}</span> <button class="delete-btn">delete</button>`;
    todosContainer.appendChild(newLi)
    newLi.querySelector(".delete-btn").addEventListener("click" , (e) => {
      e.stopPropagation()
      const tempAr = JSON.parse(localStorage.getItem("todos"))
      const todo = e.target.previousElementSibling.innerText
      const newAr = tempAr.filter((element) =>{
        return !todo.includes(element.id)
      } ) 
      localStorage.setItem("todos", JSON.stringify(newAr))
      refreshTodos()
    })
  }
  
  )
  localStorage.setItem("todos", JSON.stringify(tempArr));
};
//Créer élement apd input, le mettre dans localstorage
const createTodo = () => {
  tempArrFromLs = JSON.parse(localStorage.getItem("todos"));
  const todo = {
    id: `Task ${tempArrFromLs.length + 1}`,
    content: `${input.value}`,
  };
  input.value = ""
  tempArrFromLs.push(todo);
  localStorage.setItem("todos", JSON.stringify(tempArrFromLs));
};

if (!localStorage.getItem("todos")) {
  localStorage.setItem("todos", JSON.stringify([]));
} else {
  refreshTodos();
}

add.addEventListener("click", () => {
  if (!input.value.trim().length) {
    alert("You haven't entered any todo");
  } else {
    createTodo()
    refreshTodos()
  }
}

)
