griddiv = document.querySelectorAll(".griddiv")
grid = document.getElementById("grid")
next = document.querySelector(".buttonext")
previous = document.querySelector(".buttonprev")
button1 = document.querySelector(".button1")
button2 = document.querySelector(".button2")
button3 = document.querySelector(".button3")
h2 = document.querySelector(".h2")
trending = document.querySelector(".trending")
moviebutton = document.querySelector(".movies")
series = document.querySelector(".series")
search = document.querySelector(".search")
type = document.querySelectorAll(".type")
span = document.querySelectorAll("#span")
playdirty = document.querySelector(".playdirty")
caughtstealing = document.querySelector(".caughtstealing")
let targetparagraph = null
let moviediv = null;

trending.style.backgroundColor = "#6565b3ff"
span.forEach(span => {
        if(parseInt(span.textContent) < 5.0){
        span.style.backgroundColor = "red"
        }
    })

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
griddiv = randomizeGrid();  //runs on refresh

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
    currentpage = button3.innerHTML
    showPage(currentpage)
})
showPage(currentpage)

trending.addEventListener("click", () =>{
    trending.style.backgroundColor = "#6565b3ff"
    search.style.backgroundColor = "transparent"
    series.style.backgroundColor = "transparent"
    moviebutton.style.backgroundColor = "transparent"
    h2.textContent = "TRENDING TODAY"
    grid.innerHTML = ''
    let trendinggrid = []
    type.forEach(type => {
        if(type.textContent == "Movies" || type.textContent == "Tv Series"){
            trendingdiv = type.parentElement?.parentElement?.parentElement
            if(trendingdiv){
              trendinggrid.push(trendingdiv)
            }
        }
    })
    trendinggrid.forEach(div => {
        const clone = div.cloneNode(true)
        grid.appendChild(clone)
    })

    trendinggridgrid = Array.from(grid.children)
    const itemperpage = 20
    let currentpage = 1
    const totalpages = Math.ceil(trendinggrid.length/itemperpage)

function showPage(page){
    grid.innerHTML = ''
    const start = (page -1)* itemperpage
    const end = start + itemperpage
    trendinggrid.slice(start, end).forEach(box => grid.appendChild(box))
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
    currentpage = button3.innerHTML
    showPage(currentpage)
})
showPage(currentpage)
})
moviebutton.addEventListener("click", () =>{
    trending.style.backgroundColor = "transparent"
    series.style.backgroundColor = "transparent"
    search.style.backgroundColor = "transparent"
    moviebutton.style.backgroundColor = "#6565b3ff"
    h2.textContent = "DISCOVER MOVIES"
    grid.innerHTML = ''
    let movienewgrid = []
    type.forEach(type => {
        if(type.textContent == "Movies"){
            moviediv = type.parentElement?.parentElement?.parentElement
            if(moviediv){
              movienewgrid.push(moviediv)
            }
        }
    })

    movienewgrid.forEach(div => {
        const clone = div.cloneNode(true)
        grid.appendChild(clone)
    })

    movienewgrid = Array.from(grid.children)
    const itemperpage = 20
    let currentpage = 1
    const totalpages = Math.ceil(movienewgrid.length/itemperpage)

    //A local showPage function that uses movienewgrid
    function showPage(page){
    grid.innerHTML = ''
    const start = (page -1)* itemperpage
    const end = start + itemperpage
    movienewgrid.slice(start, end).forEach(box => grid.appendChild(box))
    }

    next.addEventListener("click", () => {
        if(currentpage< totalpages){
            currentpage++
            showPage(currentpage)
        }
    })
    previous.addEventListener("click", () => {
        if(currentpage>1){
            currentpage--
            showPage(currentpage)
        }
    })
    button1.addEventListener("click", () =>{
    currentpage = parseInt(button1.innerHTML)
    showPage(currentpage)
    })
    button2.addEventListener("click", () =>{
    currentpage = parseInt(button2.innerHTML)
    showPage(currentpage)
    })
    button3.addEventListener("click", () =>{
    currentpage = parseInt(button3.innerHTML)
    showPage(currentpage)
    })
    showPage(currentpage)
})

series.addEventListener("click", () =>{
    trending.style.backgroundColor = "transparent"
    search.style.backgroundColor = "transparent"
    series.style.backgroundColor = "#6565b3ff"
    moviebutton.style.backgroundColor = "transparent"
    h2.textContent = "DISCOVER SERIES"
    grid.innerHTML = ''
    let seriesnewgrid = []
    type.forEach(type => {
        if(type.textContent == "Tv Series"){
            seriesdiv= type.parentElement?.parentElement?.parentElement
            if(seriesdiv){
              seriesnewgrid.push(seriesdiv)
            }
        }
    })

    seriesnewgrid.forEach(div => {
        const clone = div.cloneNode(true)
        grid.appendChild(clone)
    })

    seriesnewgrid = Array.from(grid.children)
    const itemperpage = 20
    let currentpage = 1
    const totalpages = Math.ceil(seriesnewgrid.length/itemperpage)

    //A local showPage function that uses seriesnewgrid
    function showPage(page){
    grid.innerHTML = ''
    const start = (page -1)* itemperpage
    const end = start + itemperpage
    seriesnewgrid.slice(start, end).forEach(box => grid.appendChild(box))
    }

    next.addEventListener("click", () => {
        if(currentpage< totalpages){
            currentpage++
            showPage(currentpage)
        }
    })
    previous.addEventListener("click", () => {
        if(currentpage>1){
            currentpage--
            showPage(currentpage)
        }
    })
    button1.addEventListener("click", () =>{
    currentpage = parseInt(button1.innerHTML)
    showPage(currentpage)
    })
    button2.addEventListener("click", () =>{
    currentpage = parseInt(button2.innerHTML)
    showPage(currentpage)
    })
    button3.addEventListener("click", () =>{
    currentpage = parseInt(button3.innerHTML)
    showPage(currentpage)
    })
    showPage(currentpage)
})