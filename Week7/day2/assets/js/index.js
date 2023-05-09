const nameInput = document.getElementById("name-input");
const saveButton = document.getElementById("save-button");
const removeButton = document.getElementById("remove-button");
const savedName = document.getElementById("saved-name");
const nameList = document.getElementById("name-list");


if (localStorage.getItem("userData")) {
  const userData = JSON.parse(localStorage.getItem("userData"));
 
}


saveButton.addEventListener("click", function() {
  const userData = {
    name: nameInput.value,
  };

  const nameItem = document.createElement("li");
  nameItem.textContent = userData.name;
  nameList.appendChild(nameItem);

  
  let nameArray = [];
  if (localStorage.getItem("nameArray")) {
    nameArray = JSON.parse(localStorage.getItem("nameArray"));
  }
  nameArray.push(userData.name);

  
  localStorage.setItem("nameArray", JSON.stringify(nameArray));
  localStorage.setItem("userData", JSON.stringify(userData));

 
});


removeButton.addEventListener("click", function() {
  localStorage.removeItem("nameArray");
  localStorage.removeItem("userData");
  savedName.textContent = "";
  nameInput.value = "";
  nameList.innerHTML = "";
});

if (localStorage.getItem("nameArray")) {
  const nameArray = JSON.parse(localStorage.getItem("nameArray"));
  for (let i = 0; i < nameArray.length; i++) {
    const nameItem = document.createElement("li");
    nameItem.textContent = nameArray[i];
    nameList.appendChild(nameItem);
  }
}

function updateCounter() {

  if (typeof (JSON) !== "undefined") {

    if (sessionStorage.counter) {

      var counterObject = JSON.parse(sessionStorage.counter);

      counterObject.value += 1;

      sessionStorage.counter = JSON.stringify(counterObject);
    } else {

      var counterObject = { value:0 };

      sessionStorage.counter = JSON.stringify(counterObject);
    }
    

    document.getElementById("counter").innerHTML = JSON.parse(sessionStorage.counter).value;
  } else {
    document.getElementById("counter").innerHTML = "Il tuo browser non supporta JSON.";
  }
}


setInterval(updateCounter, 1000);
