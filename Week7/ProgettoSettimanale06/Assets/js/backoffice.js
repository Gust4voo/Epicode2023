const prods_URL = "https://striveschool-api.herokuapp.com/api/product/";
let prodId = new URLSearchParams(window.location.search).get("prodId");

let backDel = async () => {
  let response = await fetch(prods_URL + prodId, {
    method: "DELETE",
    headers: {
      Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYxMTA4MGYzYjY1YzAwMTQ1OTMyMWQiLCJpYXQiOjE2ODQwODI4MTYsImV4cCI6MTY4NTI5MjQxNn0.-ND24vXhTXulqOJKhuf0-qu_KC4bi_10Q1oxGOA7qVk" ,
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    alert("Prodotto eliminato!");
  } else {
    alert("Si è riscontrato un errore, il prodotto non è stato eliminato!");
  }
};

if (prodId) {
  fetch(prods_URL + prodId, {
    method: "GET",
    headers: {
      Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYxMTA4MGYzYjY1YzAwMTQ1OTMyMWQiLCJpYXQiOjE2ODQwODI4MTYsImV4cCI6MTY4NTI5MjQxNn0.-ND24vXhTXulqOJKhuf0-qu_KC4bi_10Q1oxGOA7qVk" ,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return new Error("Error!");
      }
    })
    .then((prodData) => {
      console.log(prodData);

      document.getElementById("prodName").value = prodData.name;
      document.getElementById("prodDespt").value = prodData.description;
      document.getElementById("prodBrand").value = prodData.brand;
      document.getElementById("prodImg").value = prodData.imageUrl;
      document.getElementById("prodPrice").value = prodData.price;

      document.getElementById("submit").innerHTML = "Aggiungi";

      let deleteBtn = document.getElementById("backDelete");
      deleteBtn.classList.remove("invisible");
      deleteBtn.addEventListener("click", backDel);
    })
    .catch((error) => {
      console.log(error);
    });
}

const queryProd = async function (newProd) {
  try {
    let url = prodId ? prods_URL + prodId : prods_URL;

    let response = await fetch(url, {
      method: prodId ? "PUT" : "POST",
      body: JSON.stringify(newProd),
      headers: {
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYxMTA4MGYzYjY1YzAwMTQ1OTMyMWQiLCJpYXQiOjE2ODQwODI4MTYsImV4cCI6MTY4NTI5MjQxNn0.-ND24vXhTXulqOJKhuf0-qu_KC4bi_10Q1oxGOA7qVk" ,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      alert("Il prodotto è stato aggiunto correttamente ");
    } else {
      alert("OOPS! Si è verificato un problema!");
    }
  } catch (error) {
    console.log(error);
  }
};

let formReference = document.getElementsByTagName("form")[0];
formReference.addEventListener("submit", (e) => {
  e.preventDefault();
  let newProd = {
    name: document.getElementById("prodName").value,
    description: document.getElementById("prodDespt").value,
    brand: document.getElementById("prodBrand").value,
    imageUrl: document.getElementById("prodImg").value,
    price: document.getElementById("prodPrice").value,
  };
  queryProd(newProd);
});