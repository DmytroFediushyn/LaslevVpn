



let prevButton = null;
let prevBox = null;

const wrapper = document.querySelector(".select1");
const wrapper2 = document.querySelector(".select2");
const wrapper3 = document.querySelector(".select3");

let box1 = document.querySelector('.free');
let box2 = document.querySelector('.standart');
let box3 = document.querySelector('.premium');


wrapper.addEventListener('click', (e) => {
  e.target.classList.add('activebut');
  box1.style.border = '2px solid #F53838';
  if(prevButton !== null ) {
    box3.style.border = '1px solid #dddddd';
    box2.style.border = '1px solid #dddddd';
    prevButton.classList.remove('activebut'); 
  }
  prevButton = e.target;
});
wrapper2.addEventListener('click', (e) => {
e.target.classList.add('activebut'); 
box2.style.border = '2px solid #F53838';
if(prevButton !== null  ) {
  box1.style.border = '1px solid #dddddd';
  box3.style.border = '1px solid #dddddd';
  prevButton.classList.remove('activebut'); 
}
prevButton = e.target;

});
wrapper3.addEventListener('click', (e) => {
  e.target.classList.add('activebut');
  box3.style.border = '2px solid #F53838';
  if(prevButton !== null  ) {
    box2.style.border = '1px solid #dddddd';
    box1.style.border = '1px solid #dddddd';
    prevButton.classList.remove('activebut'); 
  }
  prevButton = e.target;
});





