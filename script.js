let containEl = document.querySelector(".container")

for (let i = 0; i < 30; i++) {
   let colorContainerEl = document.createElement("div")
   colorContainerEl.classList.add("color-container")
   containEl.appendChild(colorContainerEl)
}

let colorContainerEls = document.querySelectorAll(".color-container")
console.log(colorContainerEls)

generateColor()

function generateColor() {
   colorContainerEls.forEach((colorContainerEl) => {
      let newColoCode = randomColor()
      colorContainerEl.style.backgroundColor = "#" + newColoCode
      colorContainerEl.innerHTML = "#" + newColoCode
   })
}

function randomColor() {
   let chars = "0123456789abcdef";
   let colorCodeLength = 6;
   let colorCode = "";
   for (let i = 0; i < colorCodeLength; i++) {
      let randNum = Math.floor(Math.random() * chars.length)
      colorCode += chars.substring(randNum, randNum + 1)
   }
   return colorCode
}