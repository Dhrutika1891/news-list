# Codepen Challenge

## Challenge 1: Closures / Scoping

-- Take the following code snippet:

const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
setTimeout(function() {
console.log('Index: ' + i + ', element: ' + arr[i]);
}, 3000);
}

-- Result: Index: 4, element: undefined repeated 4 times.

-- Desired result:

Index: 0, element: 10
Index: 1, element: 12
Index: 2, element: 15
Index: 3, element: 21

### Challenge 1: explaination & code

By changing var to let we can achive desired result, as var act as a global variable, let has a limited scope of where it is declare.

const arr = [10, 12, 15, 21];

for (let i = 0; i < arr.length; i++) {
setTimeout(function() {
console.log('Index: ' + i + ', element: ' + arr[i]);
}, 3000);
}

###### Challenge 2: Function context

-- Take the following code snippet:

var div = document.querySelector('.foo')
div.addEventListener('click', function() {
this.innerHTML = 'Foo';
});

var div2 = document.querySelector('.foo2')
div2.addEventListener('click', () => {
this.innerHTML = 'Foo';
});

-- Result: The first event handler correctly changes the text of the div, whereas the second doesnt.


### Challenge 2: Answer

--- Not sure. key diffrence is Arrow function.
