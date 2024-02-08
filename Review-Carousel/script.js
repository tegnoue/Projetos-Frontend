let person_pic = document.getElementById("pics")
let n
let person1 = document.getElementById("person-1")
let person2 = document.getElementById("person-2")
let person3 = document.getElementById("person-3")
let person4 = document.getElementById("person-4")
let controler = 0

carousel(0)

function carousel(n){
    if( n == 0){
        person1.removeAttribute("hidden")
        person2.setAttribute("hidden", "true")
        person3.setAttribute("hidden", "true")
        person4.setAttribute("hidden", "true")
        document.getElementById("pic-1").style.backgroundImage = "url('imagens/ana-fernandes.jpg')"
    } else if ( n == 1){
        person2.removeAttribute("hidden")
        person1.setAttribute("hidden", "true")
        person3.setAttribute("hidden", "true")
        person4.setAttribute("hidden", "true")
        document.getElementById("pic-2").style.backgroundImage = "url('imagens/man.jpg')"
    } else if ( n == 2){
        person3.removeAttribute("hidden")
        person2.setAttribute("hidden", "true")
        person1.setAttribute("hidden", "true")
        person4.setAttribute("hidden", "true")
        document.getElementById("pic-3").style.backgroundImage = "url('imagens/woman.jpg')"
    } else if ( n == 3){
        person4.removeAttribute("hidden")
        person2.setAttribute("hidden", "true")
        person3.setAttribute("hidden", "true")
        person1.setAttribute("hidden", "true")
        document.getElementById("pic-4").style.backgroundImage = "url('imagens/blackman.jpg')"
    }
}

function next(){
    if(controler < 3){
        controler += 1
    } else if (controler == 3){
        controler = 0
    }
    carousel(controler)
}

function preview(){
    if(controler > 0){
        controler -= 1
    } else if(controler == 0){
        controler = 3
    }
    carousel(controler)
}

function aleatory(){
    controler = getRandomInt()
    carousel(controler)
}

function getRandomInt() {
    min = Math.ceil(0);
    max = Math.floor(4);
    return Math.floor(Math.random() * (max - min) + min);
  }
