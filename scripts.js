var table = document.getElementsByTagName("table")[0];
var quantities = document.getElementsByClassName("productQuantity");
var prices = document.getElementsByClassName("productPrice");
var subTotals = document.getElementsByClassName("productTotalCost");

table.addEventListener("change", (event)=>{
    var total = 0;
    for(i = 0; i < prices.length; i++){
        subTotals[i].innerHTML = (quantities[i].value*parseFloat(prices[i].innerHTML)).toFixed(2);
        total += parseFloat(subTotals[i].innerHTML);
    }
    document.getElementById("totalCost").innerHTML = total.toFixed(2);
})