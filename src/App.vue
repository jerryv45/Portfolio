<script setup lang="ts">

</script>

<template>
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

      <div class="mb-3">
        X
      </div>
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
