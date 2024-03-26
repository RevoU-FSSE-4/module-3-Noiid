// Place your code here
// Add any additional code necessary to fulfill the requirements of the assignment

function addTask() {
  //checking input new task is empty
  const newTask = document.getElementById("newTask").value;
  const listTask = document.getElementById("listTask");

  const childTr = document.createElement("tr");
  const childTd = document.createElement("td");
  const textNode = document.createTextNode(newTask);
  childTd.appendChild(textNode);
  childTr.appendChild(childTd);

  listTask.appendChild(childTr);
  alert("successfully adding a task!");
}
