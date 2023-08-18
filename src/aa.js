const navbarToggleBtn = document.getElementById("navbarToggleBtn");
const navbarNav = document.getElementById("navbarNav");

navbarToggleBtn.addEventListener("click", () => {
    navbarNav.classList.toggle("show");
});


const counterElement = document.getElementById('counter');
const i = document.querySelector('.i');
const r = document.getElementById('r');
const d = document.getElementById('d');

let count = 0;

const increasecount = () => {
  count = count + 1;
  counterElement.textContent = count;  // Corrected this line
  console.log(count);
  if (count > 0 ){
    counterElement.style.color = 'blue'
  }
};
const resetcount = () => {
  count = 0;
  counterElement.textContent = count;  // Corrected this line
  console.log(count);
  if (count === 0 ){
    counterElement.style.color = 'black'
  }
};
const decreasecount = () => {
  count = count - 1;
  counterElement.textContent = count;  // Corrected this line
  console.log(count);
  if (count < 0 ){
    counterElement.style.color = 'red'
  }
};

i.addEventListener('click', increasecount);

r.addEventListener('click', resetcount);
d.addEventListener('click', decreasecount);


// const a = document.getElementById('a')
//   a.addEventListener('mouseenter', changetext)
 
//  function changetext() {
//     console.log('entered');
//   }

