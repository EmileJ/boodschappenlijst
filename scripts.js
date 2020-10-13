var quantities = document.getElementsByClassName("productQuantity");
var prices = document.getElementsByClassName("productPrice");
var subTotals = document.getElementsByClassName("productTotalCost");
var total = 0;

table.addEventListener("change", (event)=>{
    console.log("aantal producten is gewijzigd");
    console.log(event);
    var quantity = parseInt(event.target.value);
    var price = event.target.parentElement.parentElement.getElementsByClassName("productPrice")[0].innerHTML;
    total += (price*quantity);
    console.log(total);
})