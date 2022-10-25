<script setup lang="ts">
import { ref, onUpdated } from 'vue'

const count = ref(0)

// onUpdated(() => {
//   console.log(document.getElementById('count').textContent)
// })

function setColor(color: any) {
  console.log(`Updating --main-color to: ${color}`);
  document.documentElement.style.setProperty('--main-color', color);
}

function setBgColorDark(color: any) {
  console.log(`Updating --bg-color to: ${color}`);
  document.documentElement.style.setProperty('--bg-color', color);
  document.documentElement.style.setProperty('--main-color', '#dfdfdf');
}
function setBgColorLight(color: any) {
  console.log(`Updating --bg-color to: ${color}`);
  document.documentElement.style.setProperty('--bg-color', color);
  document.documentElement.style.setProperty('--main-color', '#2a2a2a');

}
</script>

<template>
  <!-- <button id="count" @click="count++">{{count}}</button> -->
  <div class=" fixed blur-layer w-screen h-screen top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-[#dfdfdf] -z-10"></div>

  <header>
  <div class="wrapper">
  </div>
    <div class="navbar sticky w-full flex flex-row justify-between m-0 p-0 mx-auto align-baseline "> 
      <p class="name hidden md:block">Jerry Velasquez</p>
      <p class="occupation hidden md:block">Web Developer__</p>



      <span class="theme-picker flex ">
        <div class="theme-flex-pt-1 flex  ">
          <p class="theme">Theme</p>
          <ul class="flex justify-center ">
            <button @click="setColor('#2a2a2a')" class=" w-6 h-6 mx-[0.1rem] cursor-pointer border-2 border-gray-700 bg-[#2a2a2a]"></button>
            <button @click="setColor('#fc92f7')" class=" w-6 h-6 mx-[0.1rem] cursor-pointer border-2 border-gray-700 bg-[#fc92f7]"></button>
            <button @click="setColor('#1F85DE')" class=" w-6 h-6 mx-[0.1rem] cursor-pointer border-2 border-gray-700 bg-[#1F85DE]"></button>
            <button @click="setColor('#e52323')" class=" w-6 h-6 mx-[0.1rem] cursor-pointer border-2 border-gray-700 bg-[#e52323]"></button>
          
          </ul>
        </div>
        <div class="day-night-wrap flex flex-wrap content-start justify-center">
          <button @click="setBgColorDark('#0000008a')" class=" mx-2 w-6 h-6">  <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Moon</title><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg> </button>
          <!-- <div class="p-0 m-0">/</div> -->
          <button @click="setBgColorLight('#d9d9d98a')" class=" mx-2 w-6 h-6">  <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Sunny</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"/><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>  </button>
        </div>

      </span>
    </div>

  
<RouterView />

  </header>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind variants;

</style>