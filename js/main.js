'use strict'; 

{
  // ハンバーガーメニュー
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const sp1 = document.querySelector('.sp1');
  const sp2 = document.querySelector('.sp2');
  const sp3 = document.querySelector('.sp3');
  const sp4 = document.querySelector('.sp4');

  
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  sp1.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  sp2.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  sp3.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  
  sp4.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  

  

  


  // carousel

  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.getElementById('ul');
  const slides = ul.children;
  const dots = [];

  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('.nav').appendChild(button);
    }
     dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  updateButtons();
  setupDots();

  next.addEventListener('click', () => {
    currentIndex++;
    updateDots();
    updateButtons();
    moveSlides();  
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateDots();
    updateButtons();
    moveSlides();
  });

  window.addEventListener('resize', () => {
    moveSlides();
  });
}