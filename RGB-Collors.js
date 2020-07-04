var numOfSque = 6;
var colors = generateRandomColors(numOfSque);
var pickedcolor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colarDisplay");
var message = document.getElementById("message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easy")
var hardBtn = document.querySelector("#hard")
colorDisplay.textContent = pickedcolor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedcolor){
            message.textContent = "Correct"
            changeColors(clickedColor)
            h1.style.backgroundColor = clickedColor
            resetButton.textContent = "Play again"
        }else{
            this.style.backgroundColor = "#232323";
            message.textContent = "Try again"
        }
    })
}   

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;}
}

function pickColor(){
  var random =  Math.floor(Math.random() * colors.length)
  return colors[random]
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
        var r = Math.floor(Math.random() * 256)
        var g = Math.floor(Math.random() * 256)
        var b = Math.floor(Math.random() * 256)
        return "rgb("+ r +", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numOfSque);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]
    }
    h1.style.backgroundColor = "steelblue"
    message.textContent = ""
})

easyBtn.addEventListener("click", function(){
    numOfSque = 3;
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    colors = generateRandomColors(numOfSque);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none"
        }
    }
})

hardBtn.addEventListener("click", function(){
    numOfSque = 6;
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    colors = generateRandomColors(numOfSque);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor
    for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block"    
    }
})
