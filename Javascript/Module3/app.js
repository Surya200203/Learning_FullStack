/*
let smallImages = document.getElementsByClassName('oldImg');

console.log("Src of all 'oldImg' class named elements");
for (let i = 0; i < smallImages.length; i++) {
	//console.log(smallImages[i]);
	console.log(smallImages[i].src); // gives src of all "oldImg" class named elements
}

let allPara = document.getElementsByTagName('p');
console.log("Id's of all paragraph tags");
for (let i = 0; i < allPara.length; i++) {
	console.log(allPara[i].id); // gives id's of all paragraphs
}

// QUERY SELECTORS
console.log('selects first p element');
console.log(document.querySelector('p')); //selects first p element

console.log('selects first element with id "mainImg"');
console.log(document.querySelector('#mainImg')); // selects first element with id "mainImg"

console.log('selects firts element with class "oldImg"');
console.log(document.querySelector('.oldImg')); // selects firts element with class "oldImg"

console.log('selects all p elements');
console.log(document.querySelectorAll('p'));  // selects all p elements

*/

let para = document.querySelector('p');
console.log(para.innerHTML);
console.log(para.innerText);
console.log(para.textContent);