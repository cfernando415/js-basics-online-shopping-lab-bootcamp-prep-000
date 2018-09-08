var cart = {};

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here
  cart.push({"itemName": item, "itemPrice": Math.floor(Math.random()*(100 - 1) + 1)});
  return item + " has been added to your cart.";
}

function viewCart() {
  // write your code here
  if (cart.length < 1 || cart === undefined) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ".";
  } else {
    var tmpCart = [];
    for (let i = 0; i < cart.length; i++) {
      if(i < cart.length - 1) {
        tmpCart.push(" " + cart[i].itemName + " at $" + cart[i].itemPrice);
      } else {
        tmpCart.push(" and " + cart[i].itemName + " at $" + cart[i].itemPrice + ".");
      }
    }
  return "In your cart, you have" + tmpCart;  
  }
}

function total() {
  // write your code here
  var sumCart = 0;
  for (let i = 0; i < cart.length; i++) {
    sumCart += cart[i].itemPrice;
  }
  return sumCart;
}

function removeFromCart(item) {
  // write your code here
  var inCart = true;
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      delete cart[i].itemName;
      delete cart[i].itemPrice;
    } else {
      inCart = false;
    }
  }
  if (inCart) {
    return cart;    
  } else {
    return 
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
