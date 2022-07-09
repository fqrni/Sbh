const countBtn= document.querySelector('.countBtn button');
const resetBtn= document.querySelector('.resetBtn button');
let countNum= document.querySelector('.countNum h1');

countBtn.addEventListener('click',countup);
resetBtn.addEventListener('click',reset);

function countup(){
    countNum.innerHTML++;
}
function reset(){
    countNum.innerHTML=0;
}
window.onscroll = function () { window.scrollTo(0, 0); };





