// ===== PAGE SWITCH =====

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


// ===== MUSIC AUTO PLAY FIX =====

window.addEventListener("load",function(){

let music=document.getElementById("bgMusic")

if(music){

music.muted=true

let playPromise=music.play()

if(playPromise!==undefined){

playPromise.then(()=>{

setTimeout(()=>{

music.muted=false

},1000)

})

}

}

})


// ===== LIFE TIMER =====

const birth=new Date("2007-04-27")

setInterval(()=>{

let now=new Date()
let diff=now-birth

let seconds=Math.floor(diff/1000)
let minutes=Math.floor(seconds/60)
let hours=Math.floor(minutes/60)
let days=Math.floor(hours/24)
let weeks=Math.floor(days/7)
let months=Math.floor(days/30)
let years=Math.floor(days/365)

document.getElementById("years").innerText=years
document.getElementById("months").innerText=months
document.getElementById("weeks").innerText=weeks
document.getElementById("days").innerText=days
document.getElementById("hours").innerText=hours
document.getElementById("minutes").innerText=minutes
document.getElementById("seconds").innerText=seconds

},1000)


// ===== PHOTO SLIDESHOW =====

const photos=[
"photos/photo1.jpeg",
"photos/photo2.jpeg",
"photos/photo3.jpeg",
"photos/photo4.jpeg",
"photos/photo5.jpeg",
"photos/photo6.jpeg",
"photos/photo7.jpeg",
"photos/photo8.jpeg",
"photos/photo9.jpeg",
"photos/photo10.jpeg"
]

let index=0

function startPhotos(){

document.getElementById("photo").src=photos[0]

}

function nextPhoto(){

index++

if(index<photos.length){

document.getElementById("photo").src=photos[index]

}else{

document.getElementById("nextBtn").style.display="none"
document.getElementById("finishBtn").style.display="inline-block"

}

}


// ===== LETTER OPEN =====

function openEnvelope(){

document.querySelector(".letterText").style.display="block"

}


// ===== GALAXY ANIMATION =====

const canvas=document.getElementById("stars")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let stars=[]

for(let i=0;i<400;i++){

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
