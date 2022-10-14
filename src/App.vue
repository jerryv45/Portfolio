<script setup lang="ts">

</script>

<template>
  <div class=" fixed blur-layer w-screen h-screen top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-[#d9d9d98a] -z-10"></div>

  <header>
  <div class="wrapper">
  </div>
    <div class="navbar sticky w-full flex flex-row justify-between m-0 p-0 mx-auto  "> 
      <p class="name">Jerry Velasquez</p>
      <p class="occupation hidden md:block">Web Developer__</p>

      <span class="theme-picker flex">
        <p class="theme">Theme</p>
        <ul class="flex justify-center ">
          <li id="el-1" class=" w-6 h-6 mx-[0.1rem] cursor-pointer border-2 border-gray-700 bg-[#2a2a2a]"></li>
          <li class="el-2 w-6 h-6 mx-[0.1rem] cursor-pointer border-2 border-gray-700 bg-[#fc92f7]"></li>
          <li class="el-3 w-6 h-6 mx-[0.1rem] cursor-pointer border-2 border-gray-700 bg-[#1F85DE]"></li>
          <li class="el-4 w-6 h-6 mx-[0.1rem] cursor-pointer border-2 border-gray-700 bg-[#e52323]"></li>
          
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