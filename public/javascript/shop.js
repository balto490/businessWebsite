var total = Cookies.get(".simpleCart_quantity");

if(total == null) {

    total = 0;
}





$(document).ready(function(){

switch1();

$("#textone").click(function(){
    $("#ulone").slideDown(1000);
});

$("#texttwo").click(function(){
    $("#ultwo").slideDown(1000);
});

$("#textthree").click(function(){
    $("#ulthree").slideDown(1000);
});

$("#textfour").click(function(){
    $("#ulfour").slideDown(1000);
});

$("#textfive").click(function(){
    $("#ulfive").slideDown(1000);
});

$("#textsix").click(function(){
    $("#ulsix").slideDown(1000);
});

$("#textseven").click(function(){
    $("#ulseven").slideDown(1000);
});

$("#texteight").click(function(){
    $("#uleight").slideDown(1000);
});

$("#textnine").click(function(){
    $("#ulnine").slideDown(1000);
});
$('button.addCart').click(function(event) {
  var a = $(".item_Size", $(event.target).parent() ); 
  var b = $(".item_quantity", $(event.target).parent() );
  data = $(this).attr('id').split('-');
  console.log(data[0] ,data[1], data[2], a.val(), b.val());
  
  return false;
 	
 });

$(".addCart").click(function(){
  total = parseInt(total, 10) + 1;
  $(".simpleCart_quantity").html(total);
  Cookies.set(".simpleCart_quantity", total);
  
});



});



var switch1 = function(){

$("#three, #six, #nine, #twelve, #fifteen, #eighteen, #twentyone, #twentyfour, #twentyseven").animate({opacity:0},3000, "swing", switch2);

}

var switch2 = function(){

$("#two, #five, #eight, #eleven, #fourteen, #seventeen, #twenty, #twentythree, #twentysix").animate({opacity:0},3000, "swing", switch3);

}
var switch3 = function(){

$("#two, #five, #eight, #eleven, #fourteen, #seventeen, #twenty, #twentythree, #twentysix").animate({opacity:1},3000, "swing", switch4);

}
var switch4 = function(){

$("#three, #six, #nine, #twelve, #fifteen, #eighteen, #twentyone, #twentyfour, #twentyseven").animate({opacity:1},3000, "swing", switch1);

}

