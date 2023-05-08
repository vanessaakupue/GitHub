// let title = document.querySelector('h1');

// title.style.color = 'yellow';

// let listItems = document.querySelectorAll('.list-items');

// for ( x = 0; x < listItems.length; x++) {

//     listItems[x].style.fontSize = '30px';
// }

// // creating an element:

// const img = document.createElement('img');
// img.src = "img-testing.jpg";

// // adding an element:

// // document.body.append(img); //prepend = before, append = after.

// // how to place elements between other elements:

// const container = document.getElementById('inner-container');

// container.insertBefore(img, container.querySelectorAll('li')[3].nextSibling); 

// // how to remove an element:

// const heading = document.getElementById('main-heading');

// heading.remove();

// content setting:

// const heading = document.getElementById('main-heading');

// // heading.innerHTML = "<h2>Aquafina</h2>"; //innerHTML helps to select the html of the selected tag, and it prints without the tag

// // heading.innerText = "<h2>Aquafina</h2>"; // helps to preserve the indentation but it prints the tags

// heading.textContent = "<h2>Aquafina</h2>"; // prints with tags and on a straight line but it helps to print all texts ignoring the styling like display none.

// working with attributes:

// const container = document.getElementById('inner-container');

// container.getAttribute('class'); // helps to get the attribute of an element
// container.removeAttribute('id'); //helps to remove an attribute
// container.setAttribute('status', 'active');

// container.id = "myContainer";
// container.classList = "visible opposite";
// container.classList.add('li-op-c3');
// container.classList.remove('opposite');
// container.classList.toggle('visible'); // visible disappears
// container.classList.toggle('visible'); // visible reappears

// editing styles:

const container = document.getElementById('inner-container');

container.style.background = "white";
container.style.fontSize = "30px";
container.style.textAlign = "center";

console.log(getComputedStyle(container)); // this shows you the styles applied to an element.


