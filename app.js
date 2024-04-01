// Place your code here
var listTask = document.getElementById("listTask");

// Add any additional code necessary to fulfill the requirements of the assignment
(async function fetchData(){
  const response = await fetch("https://module3-api-is2m.onrender.com/random-todos");
  const data = await response.json();
  data.forEach(element => {
    createElementTask(element)
  });
})();


function createElementTask(taskName){
  const childTr = document.createElement("tr");
  const childTd = document.createElement("td");
  const textNode = document.createTextNode(taskName);

  const childTdAction = document.createElement("td");
  const btnComplete = document.createElement("button");
  btnComplete.textContent = "Complete"
  btnComplete.addEventListener('click', () => {
    childTd.style.color = 'green'
  })

  const btnRemove = document.createElement("button");
  btnRemove.textContent = "Delete"
  btnRemove.addEventListener('click', () => { // advanced functions ==> closure / high order functions
    childTr.remove()
  })

  childTdAction.appendChild(btnComplete);
  childTdAction.appendChild(btnRemove);

  childTd.appendChild(textNode);
  childTr.appendChild(childTd);
  childTr.appendChild(childTdAction);

  listTask.appendChild(childTr);
}

function addTask() {
  //checking input new task is empty
  const newTask = document.getElementById("newTask").value;
  if (newTask === "") {
    alert("fail adding a task!");
    return
  }
  createElementTask(newTask)
  alert("successfully adding a task!");
}
