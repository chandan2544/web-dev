// // 1.intro DOM - document object model
// the dom represent a document with a logical tree 
// it allow us to manipulate/change webpage content (HTML Element) 

// 2.selecting element
let a = document.querySelector("h1")
document.getElementById(h)
document.getElementsByClassName(c)

// 3.using properties & method

// 1.innerText - shows the visible text contained in a node
// 2.textContent - show all the full text 
// 3.innerHTML - show the full markup

// 4.manipulating Attribute
Object.getAttribute(attr)
Object.setAttribute(attr,value)

// 5.manipulate style
a.style.color="green" 

//6.using classList
Object.classList.add("hfhgf")
Object.classList.remove("hfhgf")
Object.classList.contains("hfhgf")  // to check exist or not
Object.classList.toggle("hfhgf") // to toggle between add & remove


// //7.navigation
Object.parentElement // 1.parentElement
Object.children   // 2.children
Object.previousElementSibling / nextElementSibling   // 3.previousElementSibling / nextElementSibling

//8.Adding element
document.createElement("p")
// Object.appendChild(Element)
// Object.append(Element)  //end
// Object.prepend(Element)  //start
// Object.insertAdjacent(where,Element)

// 9.removing element
Object.remove(Element)
Object.removeChild(Element)