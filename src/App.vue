<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <header>
    <div class="navbar sticky w-full flex justify-between m-0 p-0 container mx-auto "> 
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

      <div class="menu">
        X
      </div>
    </div>

  
<RouterView />


    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind variants;

</style>
