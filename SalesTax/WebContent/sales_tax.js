var $ = function (id) {
    return document.getElementById(id); 
}

function calculate_click() {
	var sub=document.getElementById("subtotal").value;
	var tax=document.getElementById("taxRate").value;
	var sTax;
	var total;
	if(isNaN(sub)||sub<=0){
		alert("Do it again");
		}

	else {
		sub=parseFloat(sub);
		tax=tax/100;
		sTax= sub*tax;
		sTax=parseFloat(sTax);
		total=sub+sTax;
		total=parseFloat(total);
		console.log(sub);
		console.log(tax);
		console.log(sTax);
		console.log(total);
		document.getElementById("salesTax").value=sTax;
		document.getElementById("total").value=total;
	}	
}


window.onload = function () {
	 $("calculate").onclick = calculate_click;
	 $("subtotal").focus;
	}