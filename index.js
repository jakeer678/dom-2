var items = document.getElementsByClassName('list-group-item');

console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2'
items[1].style.fontWeight = 'bold' 
items[2].style.backgroundColor = 'green'
 

for(var i=0; i<items.length; i++) {
    items[i].style.fontWeight = 'bold' 
}


var tag = document.getElementsByTagName("li");
var tagName = document.getElementsByName('test');
tag[4].style.backgroundColor = 'green'
