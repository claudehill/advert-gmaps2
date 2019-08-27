<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/contact-us">Contact</router-link> | 
      <router-link to="/adblock"> <span class="red">ADBLOCKER - DELETE | </span></router-link>
    <router-link to="/about">About </router-link> |
    <router-link to="/subscribe">Subscribe / Newsletter</router-link> |
    <router-link to="/error">Error / 404</router-link> |
    <router-link to="/test">Test Page</router-link>
    
    
    </div>
    <router-view/>

  </div>
</template>

<style>
  @import './assets/styles/litera.bootstrap.min.css';
  @import './assets/styles/main.css';
</style>

<script>
// require('../src/assets/js/geo')


export default {
  
}
</script>

