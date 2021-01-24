const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not(.occupied'); 
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const movieImage = document.querySelectorAll('.film');

let price = +movieSelect.value;

//update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  //copy selected seats into arr
  //map through array 
  //return a new array indexes

  // const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  // console.log(seatsIndex);

  // localStorage.setItem('selectedSeats', JSON.stringif(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * price; 
}

//movie select event
movieSelect.addEventListener('change', e => {
  price = +e.target.value
  updateSelectedCount();
})

//seat click event
container.addEventListener('click', (e) => { 
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');


    updateSelectedCount();
  }

});

// movie poster click event
function Film (){
  movieImage = document.querySelector('.film');
  movieImage.addEventListener.classList.toggle('.choose');
  
};

