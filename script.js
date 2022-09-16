console.log("welcome to spotify");
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myBar = document.getElementById('myBar');

let songs = [
    {songName: "Likhe jo khat", filePath:"song/1.mp3", musicPath: "covers/1.jpeg"},
    {songName: "Likhe jo khat", filePath:"song/1.mp3", Path: "covers/1.jpeg"},
    {songName: "Likhe jo khat", filePath:"song/1.mp3", Path: "covers/1.jpeg"},
    {songName: "Likhe jo khat", filePath:"song/1.mp3", Path: "covers/1.jpeg"},
    {songName: "Likhe jo khat", filePath:"song/1.mp3", coverPath: "covers/1.jpeg"},
    {songName: "Likhe jo khat", filePath:"song/1.mp3", coverPath: "covers/1.jpeg"},
]
// handle the play
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){

    }
})

//Listen ton Events
document.addEventListener('time')