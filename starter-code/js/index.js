function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
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
        end = 1;
      }
      i++;
    }
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


/* function createNewItem(){

} */

function createNewItem(){

  var main = document.getElementById("main");
  var newElement = document.createElement("div");
  
  newElement.id = "new-product-"+i;
  i++;

  main.appendChild(newElement);
/* 
  var newProduct = document.getElementById("new-product");
  newProduct.classList.add("flexbox");

  for(var j=0 ; j<5 ; j++){
    newProduct.appendChild("div");
  }
  
  var product = document.getElementById("product");
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
  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
