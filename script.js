let products = [
  {name:"carrots", count:1},
  {name:"spinach", count:2},
  {name:"cookies", count:3},
  {name:"lettuce", count:4},
  {name:"avocado", count:5}
]
// <ul> container //
let product_list = document.getElementById("products-list");
//submit button //
let submit_btn = document.getElementById("submit-btn");
let product_input = document.getElementById("product-input");

submit_btn.addEventListener("click", () => {
  if (product_input.value === ''){
    alert("Please, enter item name!")
    return
  } else {
    //create a new object and add to product list //
    let new_product = { name: product_input.value, count:1}
    products.unshift(new_product);
}
});

function render_products() {
//render product list, we create separate function doing that//
product_list.innerHTML = '';
products.forEach((product, index) => {
//product is a separate item,example:
//{name:"carrots", count : 1 }//

//create a new element <li> //
if(product.count > 0) {
  
  //create a new <li> element//
let product_node = document.createElement("li");
product_node.innerHTML = ` <a>${product.name} x ${product.count}</a>`;

//append to the <ul> container//
product_list.appendChild(product_node);

// create delete icon //
let delete_node = document.createElement ("i");
delete_node.setAttribute("class", "fa-solid fa-trash-can delete-product");
product_node.appendChild(delete_node);

//create edit icon //
let edit_node = document.createElement("i");
edit_node.setAttribute("class", "fa-solid fa-pen-to-square edit-product");
product_node.appendChild(edit_node);

}
});