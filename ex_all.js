document
  .getElementById("search_filter")
  .addEventListener("change", function () {
    let change_order = this.value;

    if (change_order === "Ascending order") {
      prices_products(true);
    } else if (change_order === "Descending order") {
      prices_products(false);
    } else if (change_order === "") {
      reset_order();
    }
  });

function prices_products(ascending) {
  let all_products = document.querySelector(".main_cont");
  let products = Array.from(
    all_products.getElementsByClassName("product")
  );

  products.sort(function (a, b) {
    let price1 = parseFloat(a.getAttribute("data-price"));
    let price2 = parseFloat(b.getAttribute("data-price"));
    return ascending ? price1 - price2 : price2 - price1;
  });

  products.forEach(function (product) {
    all_products.appendChild(product);
  });
}

function reset_order() {
  let all_products = document.querySelector(".main_cont");
  let products = Array.from(
    all_products.getElementsByClassName("product")
  );

  products.sort(function (a, b) {
    let index1 = parseInt(a.getAttribute("data-index"));
    let index2 = parseInt(b.getAttribute("data-index"));
    return index1 - index2;
  });

  products.forEach(function (product) {
    all_products.appendChild(product);
  });
}
document
  .getElementById("search_input")
  .addEventListener("input", function () {
    let search_all = this.value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(function (product) {
      let all_names = product
        .querySelector(".info p")
        .textContent.toLowerCase();

      if (all_names.includes(search_all)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });