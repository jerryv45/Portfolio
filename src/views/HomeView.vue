<script setup lang="ts">
import anime from 'animejs'

// Wrap every letter in a span
document.addEventListener("DOMContentLoaded", function(event) { 
    //Do work
    var textWrapper = document.querySelector('.ml6 .letters');
    anime.timeline({loop: true})
      .add({
        targets: '.ml6 .letter',
        translateY: ["3.5em", 0],
        opacity: [0,1],
        translateZ: 0,
        duration: 2100,
        delay: (el:any, i:any) => 50 * i
      }).add({
        targets: '.ml6',
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
});


</script>

<template>
  <main>
    <div class="first-circle -z-20 absolute -top-96 right-38
                md:-top-20">
        <svg width="140vw" height="140vh" viewBox="0 0 1221 1221" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="610.5" cy="610.5" r="610.5" fill="url(#paint0_radial_3_34)"/>
        <defs>
        <radialGradient id="paint0_radial_3_34" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(610.5 610.5) rotate(90) scale(610.5)">
        <stop stop-color="#D16BA5"/>
        <stop offset="0.5" stop-color="#86A8E7" stop-opacity="0.565"/>
        <stop offset="1" stop-color="#5FFBF1" stop-opacity="0.13"/>
        </radialGradient>
        </defs>
        </svg>
    </div>
  <h1 class="ml6">
    <span class="text-wrapper w-100 p-10 lg:leading-[7rem] lg:p-48 lg:px-56 text-center">
      <span class=" text-5xl md:text-7xl lg:text-8xl font-main font-black text-center letters"><span class="letter">Hi I'm Jerry,</span> <span class="letter">Front End</span> <span class="letter">Web Developer</span></span>
    </span>
  </h1>

  <div class="line w-100 border-b-2 border-gray-500"></div>

  <div class="section-2">
    <div class="section-2-wrapper flex flex-col items-center mx-2 my-24 h-56 md:m-8 lg:m-24 justify-evenly">
      <div class="floaty text-sm m-0 w-10">About</div>
      <h3 class="paragraph sm:text-3xl md:text-2xl lg:text-3xl py-6 px-2 lg:p-10 text-center  ">I'm a Front End Web Developer that always focuses on optimizing problems and finding the best possible solution. My favorite part of Web Development is CSS and I would say that's my strongest suit.</h3>
      <!-- <a class="floaty-2 text-xs sm:text-xs m-2 w-10 " target="_blank" href="">Resume</a> -->
      
      <!--  -->
      <div>
      <b-button v-b-modal.modal-xl class="text-xxs m-2 !rounded-full button" >Resume</b-button>

      <b-modal id="modal-xl" title="Resume" size="xl">
        <p class="m-0 w-full h-full" v-for="i in 1" :key="i">
          <iframe src="uploads/JV WD Resume 2.pdf" frameborder="0" width="100%" height="700px"></iframe>
        </p>
      </b-modal>
    </div>
      <!--  -->


    </div> 
  </div>

  <div class="line w-100 border-b-2 border-gray-500"></div>

  <div class="section-3 flex w-100 pb-28 relative">
    <div class="vertical-flex flex-col w-100 !md:w-5/12 ">

      <div class="title-wrapper pt-28 pb-28">
        <h3 class="title text-4xl font-semibold">Selected Works</h3>
        <h4 class="subtitle text-xs">Below are some of my recent projects!</h4>
      </div>

      <div class="second-circle -z-20 absolute -bottom-64 -right-40 md:-right-56 lg:-bottom-96">
          <svg width="140vw" height="140vh" viewBox="0 0 1184 1184" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="592" cy="592" r="592" fill="url(#paint0_radial_3_48)"/>
          <defs>
          <radialGradient id="paint0_radial_3_48" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(592 592) rotate(38.344) scale(628.859)">
          <stop stop-color="#2961FF"/>
          <stop offset="0.515625" stop-color="#519DFF" stop-opacity="0.484375"/>
          <stop offset="1" stop-color="#52FBAA" stop-opacity="0"/>
          </radialGradient>
          </defs>
          </svg>

     </div>

      <div class="menu-wrapper flex-col">
        <div class="line w-100 border-b-2 border-gray-500"></div>

          <a class="space flex justify-between py-4 no-underline" target="_blank" href="https://annysflowersla.com/">
            <div class="chunk flex">
              <div class="number pr-3 ">01</div>
              <div class="chunk-content">
                <div class="chunk-title pb-2">Anny's Flower Shop</div>
                <div class="icons flex">
                  <div class="icon-wrapper w-5 h-5 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Figma</title><path d="M336 176a80 80 0 000-160H176a80 80 0 000 160 80 80 0 000 160 80 80 0 1080 80V176z"/><circle cx="336" cy="256" r="80"/></svg></div>
                   <div class="icon-wrapper w-5 h-5 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Html5</title><path d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z"/></svg> </div>
                    <div class="icon-wrapper w-5 h-5 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Css3</title><path d="M64 32l35 403.22L255.77 480 413 435.15 448 32zm290.68 334.9L256.07 395l-98.46-28.24-6.75-77.76h48.26l3.43 39.56 53.59 15.16.13.28 53.47-14.85 5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58z"/></svg> </div> 
                    <div class="icon-wrapper w-5 h-5 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Javascript</title><path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z"/></svg></div>
<!-- <div class="icon-wrapper w-5 h-5 grid place-items-center">X</div>  -->
                </div>
              </div>
            </div>
            <div class="arrow pt-4 w-8 h-8 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Arrow Redo</title><path d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/></svg> </div>
          </a>

        <div class="line w-100 border-b-2 border-gray-500"></div>

        <a class="space flex justify-between py-4 no-underline" target="_blank" href="https://codepen.io/jerryv45/full/NWvygPw">
            <div class="chunk flex">
              <div class="number pr-3">02</div>
              <div class="chunk-content">
                <div class="chunk-title pb-2">Neumorphic Style Checkout</div>
                <div class="icons flex">
                  <div class="icon-wrapper w-5 h-5 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Figma</title><path d="M336 176a80 80 0 000-160H176a80 80 0 000 160 80 80 0 000 160 80 80 0 1080 80V176z"/><circle cx="336" cy="256" r="80"/></svg></div>
                   <div class="icon-wrapper w-5 h-5 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Html5</title><path d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z"/></svg> </div>
                    <div class="icon-wrapper w-5 h-5 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Css3</title><path d="M64 32l35 403.22L255.77 480 413 435.15 448 32zm290.68 334.9L256.07 395l-98.46-28.24-6.75-77.76h48.26l3.43 39.56 53.59 15.16.13.28 53.47-14.85 5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58z"/></svg> </div> 
                    <div class="icon-wrapper w-5 h-5 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Javascript</title><path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z"/></svg></div>
<!-- <div class="icon-wrapper w-5 h-5 grid place-items-center">X</div>  -->
                </div>
              </div>
            </div>
            <div class="arrow pt-4 w-8 h-8 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Arrow Redo</title><path d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/></svg> </div>
          </a>

        <div class="line w-100 border-b-2 border-gray-500"></div>

        <a class="space flex justify-between py-4 no-underline" target="_blank" href="https://codepen.io/jerryv45/full/BadxbdL">
            <div class="chunk flex">
              <div class="number pr-3">03</div>
              <div class="chunk-content">
                <div class="chunk-title pb-2">Banana Facts</div>
                <div class="icons flex">
                  <div class="icon-wrapper w-5 h-5 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Figma</title><path d="M336 176a80 80 0 000-160H176a80 80 0 000 160 80 80 0 000 160 80 80 0 1080 80V176z"/><circle cx="336" cy="256" r="80"/></svg></div>
                   <div class="icon-wrapper w-5 h-5 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Html5</title><path d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z"/></svg> </div>
                    <div class="icon-wrapper w-5 h-5 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Css3</title><path d="M64 32l35 403.22L255.77 480 413 435.15 448 32zm290.68 334.9L256.07 395l-98.46-28.24-6.75-77.76h48.26l3.43 39.56 53.59 15.16.13.28 53.47-14.85 5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58z"/></svg> </div> 
                    <div class="icon-wrapper w-5 h-5 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Javascript</title><path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z"/></svg></div>
<!-- <div class="icon-wrapper w-5 h-5 grid place-items-center">X</div>  -->
                </div>
              </div>
            </div>
            <div class="arrow pt-4 w-8 h-8 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Arrow Redo</title><path d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/></svg> </div>
          </a>

        <div class="line w-100 border-b-2 border-gray-500"></div>

        <a class="space flex justify-between py-4 no-underline" target="_blank" href="https://codepen.io/jerryv45/full/yLowxeW">
            <div class="chunk flex">
              <div class="number pr-3">04</div>
              <div class="chunk-content">
                <div class="chunk-title pb-2">Space Travel Concept</div>
                <div class="icons flex">
                  <div class="icon-wrapper w-5 h-5 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Figma</title><path d="M336 176a80 80 0 000-160H176a80 80 0 000 160 80 80 0 000 160 80 80 0 1080 80V176z"/><circle cx="336" cy="256" r="80"/></svg></div>
                   <div class="icon-wrapper w-5 h-5 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Html5</title><path d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z"/></svg> </div>
                    <div class="icon-wrapper w-5 h-5 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Css3</title><path d="M64 32l35 403.22L255.77 480 413 435.15 448 32zm290.68 334.9L256.07 395l-98.46-28.24-6.75-77.76h48.26l3.43 39.56 53.59 15.16.13.28 53.47-14.85 5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58z"/></svg> </div> 
                    <div class="icon-wrapper w-5 h-5 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Javascript</title><path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z"/></svg></div>
<!-- <div class="icon-wrapper w-5 h-5 grid place-items-center">X</div>  -->
                </div>
              </div>
            </div>
            <div class="arrow pt-4 w-8 h-8 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Arrow Redo</title><path d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/></svg> </div>
          </a>
          
        <div class="line w-100 border-b-2 border-gray-500"></div>

      </div>

    </div>

    
  </div>
<div class="line w-100 border-b-2 border-gray-500"></div>

<div class="contact-section flex flex-col py-24">
  <div class="talk text-4xl font-medium">Let's Talk</div>
  <h3 class="contact flex py-20">
    <div class="contact-me text-6xl md:text-8xl font-bold cursor-pointer"> <RouterLink to="/contact" class="no-underline">Contact Me </RouterLink> </div> 
    <div class="arrow pt-4 ml-5 w-12 h-12 md:ml-6  md:w-24 md:h-24 grid place-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Exit</title><path d="M320 176v-40a40 40 0 00-40-40H88a40 40 0 00-40 40v240a40 40 0 0040 40h192a40 40 0 0040-40v-40M384 176l80 80-80 80M191 256h273" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>  </div>
</h3>
</div>
  
<div class="line w-100 border-b-2 border-gray-500"></div>

</main>
</template>