var spaniels = ["Cocker Spaniel", "Cavalier King Charles", "Boykin Spaniel", "Springer Spaniel"];
var nonSpaniels = ["Poodle", "English Setter", "German Shorthair Pointer", "Boxer"];

var loopCount = spaniels.length;

var currentSpaniels;

var currentNon;

var spanielElement = document.getElementById("spaniels");

var nonElement = document.getElementById("non-spaniels");

for (var i = 0; i < loopCount; i++) {
	currentSpaniels = spaniels[i];
	spanielElement.innerHTML += `
		<div>
			${currentSpaniels}
		</div>
		`;
	currentNon = nonSpaniels[i];
	nonElement.innerHTML += `
		<div>
			${currentNon}
		</div>
		`;
}

