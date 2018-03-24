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

function createNewRow(newElementId, parentElementId, elementType, className){

  var newElement = document.createElement(elementType);
  var parentElement = document.getElementById(parentElementId);
  
  if(newElementId != ""){
    newElement.id = newElementId;
  }
  
  parentElement.appendChild(newElement);

  if(className != ""){
    newElement.classList.add(className);
  }

}

function createNewRowElement(elementsArray){

  elementsArray.forEach(function(element){
    createNewRow(element[0], element[1], element[2], element[3], element[0]);
  });
}

function createNewItem(){

  var findLastContainer = "";
  var i=1;
  var end = 1;

  while(end != 0){
    var productName = "new-product-"+i;

    findLastContainer = document.getElementById(productName);

    if(findLastContainer === null){
      end = 0;
    }else{
      i++;
    }
  }

  var arrayElements = [
    //newElementId, parentElementId, elementType, className
    ["new-product-"+i,"main-list", "div", "flexbox"],
    ["product-" + i, "new-product-" + i, "div", ""],
    ["product-name", "product-" + i, "span", ""],
    ["price-" + i, "new-product-" + i, "div", "min-width-70"],
    ["price-value", "price-" + i, "span", ""],
    ["qty-" + i, "new-product-" + i, "div", ""],
    ["", "qty-" + i, "label", ""],
    ["quantity-" + i, "qty-" + i, "input", ""],
    ["total-" + i, "new-product-" + i, "div", "min-width-70"],
    ["totalPrice-1", "total-" + i, "span", ""],
    ["delete-" + i, "new-product-" + i, "div", ""],
    ["", "delete-" + i, "button", "btn-delete"],
];

createNewRowElement(arrayElements)

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
