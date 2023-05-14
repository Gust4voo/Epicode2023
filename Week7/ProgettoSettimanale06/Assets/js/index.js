const prodotti = document.querySelector("#homeShop .row");
const prodotti_URL = "https://striveschool-api.herokuapp.com/api/product/";

const getProducts = async function () {
  try {
    let response = await fetch(prodotti_URL, {
      method: "GET",
      headers: {
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYxMTA4MGYzYjY1YzAwMTQ1OTMyMWQiLCJpYXQiOjE2ODQwODI4MTYsImV4cCI6MTY4NTI5MjQxNn0.-ND24vXhTXulqOJKhuf0-qu_KC4bi_10Q1oxGOA7qVk" },
    });

    console.log(response);
    
    if (response.ok) {
      let products = await response.json();
      products.forEach((prod) => {
        cardHome( prod.imageUrl, prod.name, prod.description, prod.price, prod._id);
      });

      console.log(products);
    } else {
    }
  } catch (error) {
    console.log(error);
  }
};
getProducts();

let cardHome = (prodImg, prodName, prodDespt, prodPrice, prodId) => {
  let newCard = document.createElement("div");
  newCard.classList.add("col-2");
  newCard.classList.add("m-5");
  newCard.classList.add("mt-1");
  newCard.innerHTML = `
  <div class="card" style="width: 18rem;">
  <img src="${prodImg}" class="card-img-top" alt="">
  <div class="card-body">
  <h3 class="card-title fs-1">${prodName}</h3>
  <p class="card-text fs-4">${prodDespt}</p>
  <p class="card-text fs-6">${prodPrice}</p>
  <a href="./backoffice.html?prodId=${prodId}" id="btnModify" class="btn btn-success">Modifica</a>
  </div>
  </div>`;
  prodotti.appendChild(newCard);
};