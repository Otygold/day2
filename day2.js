// alert("working!")
const btn = document.querySelector("button")
let colorHex = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]

function randombgHexColor() {
    let hexNumber = "#"
    for(let num = 0; num<6; num++){
        hexNumber+= colorHex[Math.floor(Math.random() * colorHex.length)]
    }
    console.log(hexNumber)
    document.querySelector("body").style.backgroundColor = hexNumber
    document.querySelector('div').textContent = hexNumber
        
}

btn.addEventListener("click", randombgHexColor)
// randombgHexColor()