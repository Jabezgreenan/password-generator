const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordEl = document.getElementById("password-el")
let passwordEl2 = document.getElementById("password-el2")

let password = getChar15()
let password2 = getChar15()


function getChar15(){
    
    let gen = ""
    for (let i = 0; i < 15 ;i++) {
        let index = Math.floor(Math.random() * characters.length)
        let char = characters[index] 
        gen += char
        
    }
    return gen
}



function createPassword() {
    
    passwordEl.textContent = getChar15()
    passwordEl2.textContent = getChar15()
    
    
    
}



