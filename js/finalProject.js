function getReceipt() {
    text1 = "<h3>You Ordered:</h3>";
    text2 = "";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for(var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
        text2 = text2+sizeTotal+"<br>";
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
        text2 = text2+sizeTotal+"<br>";
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
        text2 = text2+sizeTotal+"<br>";
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
        text2 = text2+sizeTotal+"<br>";
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log(text2);  
    console.log("subtotal: $"+runningTotal+".00");
    getMeat(runningTotal, text1, text2);
};

function getMeat(runningTotal, text1, text2) {
    var runningTotal = runningTotal;
    var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	for (var j = 0; j < selectedMeat.length; j++) {
			text1 = text1+selectedMeat[j]+"<br>";
			if (meatCount <= 1) {
				text2 = text2 + 0 + "<br>";
				meatCount = meatCount - 1;
			} else if (meatCount == 2) {
				text2 = text2 + 1 + "<br>";
				meatCount = meatCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				meatCount = meatCount - 1;
			}
	}
	console.log("total selected meat items: " + meatCount);
	console.log(meatCount + " meat - 1 free meat = "+"$" + meatTotal + ".00");
    console.log("meat text1: " + text1);
    console.log(text2); 
    console.log("subtotal: $" + runningTotal+".00");
	getVeggie(runningTotal, text1, text2);
}

function getVeggie(runningTotal, text1, text2) {
    var vegTotal = 0;
    var selectedVeg = [];
    var vegArray = document.getElementsByClassName("veggies");
    for (var k = 0; k < vegArray.length; k++) {
        if (vegArray[k].checked) {
            selectedVeg.push(vegArray[k].value);
            console.log("selected veggie item: ("+vegArray[k].value+")");
        }
    }
    var vegCount = selectedVeg.length;
	if (vegCount > 1) {
		vegTotal = (vegCount - 1);
	} else {
		vegTotal = 0;
	}
	runningTotal = (runningTotal + vegTotal);
	for (var j = 0; j < selectedVeg.length; j++) {
			text1 = text1+selectedVeg[j]+"<br>";
			if (vegCount <= 1) {
				text2 = text2 + 0 + "<br>";
				vegCount = vegCount - 1;
			} else if (vegCount == 2) {
				text2 = text2 + 1 + "<br>";
				vegCount = vegCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				vegCount = vegCount - 1;
			}
	}
    console.log("total selected veggie item: " + vegCount);
    console.log(vegCount + " veggie - 1 free veggie = " + "$" + vegTotal + ".00");
    console.log("veggie text1: " + text1);
    console.log(text2);    
    console.log("subtotal: $" + runningTotal + ".00");   
    getCheese(runningTotal, text1, text2);
}

function getCheese(runningTotal, text1, text2) {
    var cheeseTotal = 0;
    var cheeseArray = document.getElementsByClassName("cheese");
    for(var l = 0; l < cheeseArray.length; l++) {
        if (cheeseArray[l].checked) {
            var selectedCheese = cheeseArray[l].value;
            text1 = text1+selectedCheese+"<br>";
        }
    }
    if (selectedCheese === "Extra Cheese") {
        cheeseTotal = 3;
        text2 = text2+cheeseTotal+"<br>";
    } else {
        cheeseTotal = 0;
        text2 = text2+cheeseTotal+"<br>";
    } 
    runningTotal = (runningTotal + cheeseTotal);
    console.log(selectedCheese+" = $"+cheeseTotal+".00");
    console.log("cheese text1: "+text1);
    console.log(text2);    
    console.log("subtotal: $"+runningTotal+".00");
    getSauce(runningTotal, text1, text2);
};

function getSauce(runningTotal, text1, text2) {
    var sauceTotal = 0;
    var sauceArray = document.getElementsByClassName("sauce");
    for(var m = 0; m < sauceArray.length; m++) {
        if (sauceArray[m].checked) {
            var selectedSauce= sauceArray[m].value;
            text1 = text1+selectedSauce+"<br>";
            text2 = text2+sauceTotal+"<br>";
        }
    }
    sauceTotal = 0; 
    runningTotal = (runningTotal + sauceTotal);
    console.log(selectedSauce+" = $"+sauceTotal+".00");
    console.log("sauce text1: "+text1);
    console.log(text2);    
    console.log("subtotal: $"+runningTotal+".00");
    getCrust(runningTotal, text1, text2);
};

function getCrust(runningTotal, text1, text2) {
    var crustTotal = 0;
    var crustArray = document.getElementsByClassName("crust");
    for(var n = 0; n < crustArray.length; n++) {
        if (crustArray[n].checked) {
            var selectedCrust = crustArray[n].value;
            text1 = text1+selectedCrust+"<br>";
        }
    }
    if (selectedCrust === "Cheese Stuffed Crust") {
        crustTotal = 3;
        text2 = text2+crustTotal+"<br>";
    } else {
        crustTotal = 0;
        text2 = text2+crustTotal+"<br>";
    } 
    runningTotal = (runningTotal + crustTotal);
    console.log(selectedCrust+" = $"+crustTotal+".00");
    console.log("crust text1: "+text1);
    console.log(text2);     
    console.log("subtotal: $"+runningTotal+".00");
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("cart").style.opacity=0.75;
    document.getElementById("showText1").innerHTML = text1;
    document.getElementById("showText2").innerHTML = text2;    
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};

function clearAll() {
	document.getElementById("formMenu").reset();
	document.getElementById("cart").style.opacity=0;
};