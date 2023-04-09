// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

let myNumber = 42
let myName = "Brendan"

function swapper(num, name){
    let temp
    temp = name
    name = num
    num = temp
    return [name, num]
}

console.log(swapper(myNumber, myName))

//Print integers from -52 to 1066 using a FOR loop.

function printInt(){
    for(let i = -52; i <= 1066; i++){
        console.log(i)
    }
}

printInt()

//Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful(){
    let phrase = "good morning"
    for(let i = 0; i < 99; i++){
        console.log(i, ":", phrase)
    }
}

beCheerful()

//Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

function multiples(){
    for(let i = -300; i < 0; i+=3){
        if(i === -6 || i === -3){
            break
        }
        console.log(i)
    }
}

multiples()

//Print integers from 2000 to 5280, using a WHILE.

function whileInt(){
    let i = 2000
    while(i < 5280){
        i++
        console.log(i)
    }
}

whileInt()

//If 2 given numbers represent your birth month and day in either order, log
//"How did you know?", else log "Just another day...." 

function howDidYouKnow(month, day){
    if((month === 12 & day === 13) || (month === 13 && day === 12)){
        console.log("How did you know?")
    }else{
        console.log("Just another day...")
    }
}

howDidYouKnow(13, 13)

//Write a function that determines whether a given year is a leap year. If a year is divisible by four, 
//it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.Write a function that 
//determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is 
//divisible by 100. However, if it is divisible by 400, then it is.

function leapYear(){
    
}