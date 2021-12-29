let btnHostinger = document.getElementById('hostinger');
let btnNoHostinger = document.getElementById('nohostinger');
let menuContent = document.querySelector('.loadingSemHostinger');
let errorText = document.getElementById('errorText');
let loadBox = document.querySelector('.loadBox');
let btnHostingerTry = document.getElementById('hostingerTry');

let loadCont;

btnHostinger.addEventListener('click', () => {
    menuContent.style.display = "none";

    loadCont = setTimeout(()=>{
        errorText.style.display = "none";
        loadBox.style.display = "none";
    }, 1000)
})

btnNoHostinger.addEventListener('click', () => {
    menuContent.style.display = "none";
    loadCont = setTimeout(()=>{
        errorText.style.display = "block";
        btnHostingerTry.style.display = "block";
    }, 10 * 1000)
})

btnHostingerTry.addEventListener('click', () => {
    menuContent.style.display = "none";
    loadCont = setTimeout(()=>{
        errorText.style.display = "none";
        btnHostingerTry.style.display = "none";
    }, 1000)
    setTimeout(() => {
        loadBox.style.display = "none";
    }, 2000);
})