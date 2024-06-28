const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function(){

const randomX = parseInt(Math.random()*100);
const randomY = parseInt(Math.random()*100);

noBtn.style.setProperty('top', randomY + '%');
noBtn.style.setProperty('left', randomX + '%');
noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);

});

const yesBtn = document.querySelector('#yesBtn')

yesBtn.addEventListener('click',function(){
  Swal.fire({
    title: "Que sean muuchoos maaaaaaaaaas",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("monsy.png")
      left top
      no-repeat
    `
  });
});