document.body.addEventListener("click", function () {
document.getElementById("bgMusic").play();
});


function showCalendar(){
switchPage("calendar")
}

function showPhotos(){
switchPage("photos")
startPhotos()
}

function openLetter(){
switchPage("letterPage")
}

function finalMessage(){
switchPage("final")
}

function switchPage(id){

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active")
})

document.getElementById(id).classList.add("active")

}



let birth = new Date("2007-04-27")

setInterval(()=>{

let now = new Date()
let diff = now - birth

let seconds = Math.floor(diff/1000)
let minutes = Math.floor(seconds/60)
let hours = Math.floor(minutes/60)
let days = Math.floor(hours/24)
let weeks = Math.floor(days/7)
let months = Math.floor(days/30)
let years = Math.floor(days/365)

document.getElementById("years").innerText = years
document.getElementById("months").innerText = months
document.getElementById("weeks").innerText = weeks
document.getElementById("days").innerText = days
document.getElementById("hours").innerText = hours
document.getElementById("minutes").innerText = minutes
document.getElementById("seconds").innerText = seconds

},1000)



let photos = [

"photo1.jpeg",
"photo2.jpeg",
"photo3.jpeg",
"photo4.jpeg",
"photo5.jpeg",
"photo6.jpeg",
"photo7.jpeg",
"photo8.jpeg",
"photo9.jpeg",
"photo10.jpeg"

]

const quotes = [

" Life becomes beautiful with genuine smiles.💖",
"Born to shine...and sometimes confuse people ✨",
"Every picture holds a story.🌸",
"This picture contains 90% Happiness and 10% mystery.🌙",
"Life feels beautiful when moments shine like Deepavali lights.❤️",
" Life becomes easier and happier with true friends around.💖",
" If happiness had a selfie,it would look like this .💖",
" Just a photo...but the attitude is full HD.✨",
" This face may Looks innocent....but the hidden story is more intersting than you think.✨",
" 💖 The gallery may end here...but the memories continue forever...But the story is still being written.....💖.....💖"
]

let index=0

function startPhotos(){

index=0

document.getElementById("photo").src=photos[0]
document.getElementById("photoQuote").innerText=quotes[0]

document.getElementById("nextBtn").style.display="inline-block"
document.getElementById("finishBtn").style.display="none"

}

function nextPhoto(){

index++

if(index<photos.length){

document.getElementById("photo").src=photos[index]
document.getElementById("photoQuote").innerText=quotes[index]

}else{

document.getElementById("nextBtn").style.display="none"
document.getElementById("finishBtn").style.display="inline-block"

}

}



function openEnvelope(){

document.querySelector(".letterText").style.display="block"

}



/* galaxy animation */

const canvas=document.getElementById("stars")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let stars=[]

for(let i=0;i<300;i++){

stars.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speed:Math.random()*0.5

})

}

function animate(){

ctx.fillStyle="black"
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="white"

stars.forEach(s=>{

ctx.fillRect(s.x,s.y,s.size,s.size)

s.y+=s.speed

if(s.y>canvas.height){
s.y=0
s.x=Math.random()*canvas.width
}

})

requestAnimationFrame(animate)

}

animate()



