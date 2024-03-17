let createButton = document.getElementById("btn-create");

let key = document.getElementById("createkeypair");
let value = document.getElementById("createvaluepair");

createButton.addEventListener("click", addPair);

function addPair() {
  let keypair = key.value;
  let valuepair = value.value;
  if (keypair && valuepair) {
    localStorage.setItem(keypair, valuepair);
  }
  alert("added successfully")
  key.value = "";
  value.value = "";
  getAllLocalStorageValues()
}

function getAllLocalStorageValues() {
  const keys = Object.keys(localStorage);
  const values = [];
  let innerhtml = "";
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = localStorage.getItem(key);
    values.push(value);
    innerhtml += `
        <tr>
          <th scope="row">${i + 1}</th>
          <td>${key}</td>
          <td>${value}</td>
    </tr>`;
  }
  document.getElementById("tbody").innerHTML = innerhtml;

  console.log("values", values);
  console.log("keys", keys);
}
getAllLocalStorageValues();

let deleteButton = document.getElementById("delete");

deleteButton.addEventListener("click", deletePair);

function deletePair() {
  let keypair = key.value;
  if (keypair) {
    localStorage.removeItem(keypair);
  }
  alert("deleted successfully");
  key.value = "";
  getAllLocalStorageValues()
}
