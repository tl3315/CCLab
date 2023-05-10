const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTasks() {
  if (inputBox.value === '') {
    alert("Please type your tasks before clicking 'add'");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
  }
  inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("check");
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
}, false);