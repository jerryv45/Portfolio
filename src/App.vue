<script setup lang="ts">

</script>

<template>
  <div class=" fixed blur-layer w-screen h-screen top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-[#d9d9d98a] -z-10"></div>

  <header>
  <div class="wrapper">
  </div>
    <div class="navbar sticky w-full flex flex-row justify-between m-0 p-0 mx-auto  "> 
      <p class="name">Jerry Velasquez</p>
      <p class="occupation">Web Developer__</p>

      <span class="theme-picker">
        <p class="theme">Theme</p>
        <ul>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </ul>
      </span>

      <!-- <div class="mb-3  w-5 h-5 grid place-items-center">
        X
      </div> -->
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
