var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie";
var animalUpperCased = animal.toUpperCase();
var textChange = text.replace('Papugi', animalUpperCased);
var textHalf = textChange.substr(0, textChange.length / 2);
console.log(textHalf);