function deleteItem(e){
  console.log();


}

function getPriceByProduct(){

  var price = "";
  var quantity = 0;
  var totalPrice = 0;
  var end = 1;
  var i = 1;

  while(end != 0){

    price = document.getElementById("price-value-"+i).textContent;
    console.log(price);

    price = price.split("");
    price.splice(0, 1)
    price = price.join('');

    console.log(price);

    quantity = document.getElementById("quantity-"+i).value;

    if(isNaN(quantity)){
      console.log("Incorrect quantity!");
      alert("Invalid quantity!");
      end = 0;
    }
    else{

      totalPrice = parseFloat(price) * quantity;
      
      getTotalPrice(totalPrice);

      document.getElementById('totalPrice-'+i).innerHTML = '$' + totalPrice.toFixed(2);
      
      console.log("Price is: " + price + " and qty is: " + quantity);
      
      if(price == null || quantity == null){
        end = 0;
      }
      i++;
    }
  }
}

var totalPriceOfProducts = 0;

function getTotalPrice(price) {
  
  console.log(price);
  totalPriceOfProducts += price;

  document.getElementById('total-price').innerHTML = "$" + totalPriceOfProducts.toFixed(2);

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

var productPriceTag = document.getElementById('input-price').value;

//Replace comma for dot on price input
if(productPriceTag.indexOf(",") != -1){
  var indexComma = productPriceTag.indexOf(",");
  productPriceTag = productPriceTag.split("");
  productPriceTag.splice(indexComma, 1);
  productPriceTag.splice(indexComma, 0, ".");
  productPriceTag = productPriceTag.join("");
}

productPriceTag = parseFloat(productPriceTag).toFixed(2);
var productNameTag = document.getElementById('input-name').value;
productNameTag = String(productNameTag);

if(isNaN(productPriceTag)){
  console.log("Incorrect value");
  alert("The price has an incorrect value.");
}
else if(productNameTag === ""){
  console.log("Null string");
  alert("The product needs a name!");
}
else{
  
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
    ["product-" + i, "new-product-" + i, "div", "text-wrap"],
    ["product-name-" + i, "product-" + i, "span", ""],
    ["price-" + i, "new-product-" + i, "div", "min-width-70"],
    ["price-value-" + i, "price-" + i, "span", ""],
    ["qty-" + i, "new-product-" + i, "div", ""],
    ["qty-label-" + i, "qty-" + i, "label", ""],
    ["quantity-" + i, "qty-" + i, "input", ""],
    ["total-" + i, "new-product-" + i, "div", "min-width-70"],
    ["totalPrice-" + i, "total-" + i, "span", ""],
    ["delete-" + i, "new-product-" + i, "div", ""],
    ["btn-delete-" + i, "delete-" + i, "button", "btn-delete"],
  ];
  
  createNewRowElement(arrayElements);
  
  document.getElementById('btn-delete-' + i).innerHTML = "Delete";
  document.getElementById('qty-label-' + i).innerHTML = "QTY";
  document.getElementById('totalPrice-' + i).innerHTML = "0";
  document.getElementById('product-name-' + i).innerHTML = productNameTag;
  document.getElementById('price-value-' + i).innerHTML = "$" + productPriceTag;

}
  
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  //var deleteButtons = document.getElementsByClassName('btn-delete');
/*   var indexNewElement=0; */
  calculatePriceButton.onclick = getPriceByProduct;
  createItemButton.onclick = createNewItem;
/*   var deleteButtons = document.getElementsByClassName("btn-delete");
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  } */
};
