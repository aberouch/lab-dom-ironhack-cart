function deleteItem(e){

}

function getPriceByProduct(){
  console.log("Total price clicked!");
  var price = "";
  var quantity = 0;
  var totalPrice = 0;
  var end = 1;
  var i = 1;

  while(end != 0){

    price = document.getElementById("priceValue-"+i).textContent;

    quantity = document.getElementById("quantity-"+i).value;
    totalPrice = parseFloat(price) * quantity;

    document.getElementById('totalPrice-'+i).innerHTML = '$' + totalPrice;
    
    console.log("Price is: " + price + " and qty is: " + quantity);
    
    if(price == null || quantity == null){
      end = 0;
    }
    i++;
  }
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {


}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

  console.log("createNewItem() was called!");
  var main = document.getElementById("main");
  console.log("main was found!");
  var findLastContainer = "";
  var i=1;
  var end = 1;

  console.log("i = " + i);

  while(end != 0){
    var productName = "new-product-"+i;

    console.log("Enter while");

    findLastContainer = document.getElementById(productName);

    console.log("findLastContainer = " + findLastContainer);

    if(findLastContainer === null){
      end = 0;
    }else{
      i++;
    }
  }

  console.log("Exit while");
  
  var newElement = document.createElement("div");

  console.log("New Element Created: " + newElement);
  
  console.log("i = " + i);

  newElement.id = "new-product-"+i;

  console.log("New Element ID: " + newElement.id);
  main.appendChild(newElement);

  var newProduct = document.getElementById("new-product-"+i);
  newProduct.classList.add("flexbox");



/*   for(var j=0 ; j<5 ; j++){
    newProduct.appendChild("div");
  } */
  
/*   var product = document.getElementById("product");
  product.appendChild("span");
  var price = document.getElementById("price");
  price.appendChild("span");
  var qty = document.getElementById("qty");
  qty.appendChild("label");
  var total = document.getElementById("total");
  total.appendChild("span");
  var deleteBtn = document.getElementById("delete");
  deleteBtn.appendChild("button"); */

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var indexNewElement=0;
  calculatePriceButton.onclick = getPriceByProduct;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
