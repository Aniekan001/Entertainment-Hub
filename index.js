griddiv = document.querySelectorAll(".griddiv")
grid = document.getElementById("grid")
next = document.querySelector(".buttonext")
previous = document.querySelector(".buttonprev")
button1 = document.querySelector(".button1")
button2 = document.querySelector(".button2")
button3 = document.querySelector(".button3")
trending = document.querySelector(".trending")
movies = document.querySelector(".movies")
series = document.querySelector(".series")
search = document.querySelector(".search")
playdirty = document.querySelector(".playdirty")
caughtstealing = document.querySelector(".caughtstealing")

griddiv = Array.from(grid.children)
//To shuffle the Array
function shuffle(array){
    return array.sort(() => Math.random()-0.5)
}
//To rearrange the boxes in random order
function randomizeGrid(){
    shuffled = shuffle(griddiv)
    grid.innerHTML = '';
    shuffled.forEach(box => grid.appendChild(box))
}
randomizeGrid();  //runs on refresh

//Get all the existing children in the grid
const boxes = Array.from(grid.children)
const itemperpage = 20
let currentpage = 1
const totalpages = Math.ceil(boxes.length/itemperpage)

function showPage(page){
    grid.innerHTML = ''
    const start = (page -1)* itemperpage
    const end = start + itemperpage
    boxes.slice(start, end).forEach(box => grid.appendChild(box))
}

next.addEventListener("click", () =>{
    if(currentpage< totalpages){
        currentpage++
        showPage(currentpage)
    }
})
previous.addEventListener("click", () =>{
    if(currentpage > 1){
        currentpage--
        showPage(currentpage)
    }
})
button1.addEventListener("click", () =>{
    currentpage = button1.innerHTML
    showPage(currentpage)
})
button2.addEventListener("click", () =>{
    currentpage = button2.innerHTML
    showPage(currentpage)
})
button3.addEventListener("click", () =>{
    currentpage = button2.innerHTML
    showPage(currentpage)
})
showPage(currentpage)