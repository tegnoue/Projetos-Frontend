let output = document.getElementById("display")
let number_output = document.createElement("p")
let number = 0

function outPut(number){
    number_output = number
    if(number > 0){
        output.style.color = 'green'
    } else if (number == 0){
        output.style.color = 'black'
    } else{
        output.style.color = 'red'
    }
    output.innerHTML = number_output
}

function decrease(){
    number -= 1
    outPut(number)
}

function increase(){
    number += 1
    outPut(number)
}

function reset(){
    number = 0
    outPut(number)
}






