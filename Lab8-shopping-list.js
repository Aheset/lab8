shoppingList = [ //objects in an array
	item1 = {  //item1 is an object and it has name and price.
		name: "milk",
		price: 2.00
	},
	item2 = {
		name: "eggs",
		price: 1.00
	},
	item3 = {
		name: "bread",
		price: 3.00
	}
];

var list = document.getElementById("list");//ul id
var foodTotal = document.getElementById("foodTotal");
var total = 0;
var button = document.getElementById("button");//add button


 
shoppingList.forEach(function(item) {
	var newItem = document.createElement("li");
	newItem.innerText += item.name + ":              " + item.price;//it gets name and price values
	list.appendChild(newItem);
	total += item.price;
	foodTotal.innerText = total;
});

button.addEventListener("click", function() {
	var userFood = document.getElementById("food").value;//gets input value food
	var userPrice = Number(document.getElementById("price").value);//gets input value price
	var newUserFood = document.createElement("li");//to add it to the list
	newUserFood.innerText += userFood + ": " + userPrice;//to print it in the browser
	list.appendChild(newUserFood);
	total += userPrice;
	foodTotal.innerText = parseFloat(total);
});
