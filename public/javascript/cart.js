$(document).ready(function(){

  var total = 0
  var price = 0
  var products = document.cookie.split('-');
  var c = products.pop();
  var obj = {}
  for (i=0, k=0; i < products.length; i+=5, k++) {
    var newArry = products.slice(i, i+5)
    // console.log(products)
    total += parseInt(products[i+4], 10)
    price += parseInt(products[i+4]*products[i+2], 10)
    obj[k] = newArry
    // console.log(obj)
    console.log()
    $("#crt").html(" " + total);
    $("#crt2").html("Total:$" + price);
 };

 });



