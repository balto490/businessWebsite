$(document).ready(function(){

  var total = 0
  var price = 0
  var products = document.cookie.split('-');
  var c = products.pop();
  var obj = {}
  for (i=0, k=0; i < products.length; i+=5, k++) {
    var newArry = products.slice(i, i+5)
    // console.log(newArry)
    total += parseInt(products[i+4], 10)
    price += parseInt(products[i+4]*products[i+2], 10)
    obj[k] = newArry
    console.log(obj)
    

    $("#crt").html(" " + total);
    $("#crt2").html("Total:$" + price);

 };

 for(j=0; j < newArry.length; j++) { 
      $("#maincart").append("<h5>" + obj[j][0] + "</h5>");
      $("#maincart").append("<h6>" + obj[j][3] + "</h6>");
      $("#maincart").append("<h4>" + obj[j][4] + "</h4>");
    }


 });



