const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
       nav.classList.add('active');            
    })
}
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');        
    })
}

const images = [
    'images/hero/hero11.jpg',
    'images/hero/hero12.jpg',
    'images/hero/hero13.jpg',
    'images/hero/hero14.jpg',
    'images/hero/hero15.jpg',
  ];
  let currentIndex = 0; 
  function changeBackground() {
    currentIndex = (currentIndex + 1 ) % images.length; 
    document.getElementById('hero').style.backgroundImage = `url(${images[currentIndex]})`;
  }  
  setInterval(changeBackground, 5000);


  


  

