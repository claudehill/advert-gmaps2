<template>
  <div class="component-wrapper">
    <div class="pt-2 pb-0 sidebar-logo">
      <a href="//mainavenuedesign.com/" target="_blank">
        <img src="../assets/img/main_avenue_logo_5.jpg" alt />
      </a>
    </div>
    <div class="p-4 mb-3 bg-light-alt">
      <h5 class="my-3 text-center">About this Site</h5>
      <p class="sm">This micro-site is specifically designed for small business owners to explain common technical problems and their resolution from a non-technical perspective.</p>
      <!-- <router-link to="/about" class="btn btn-outline-info btn-block btn-outline-round">Read More</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarAbout"
};
</script>

<style scoped>

.sidebar-logo img {
  width: 100%;
  height: auto;
}

.bg-light-alt {
  background-color: #f5f5f5;
}

.btn-outline-round {
  border-radius: 20px;
  height: 40px;
}

.sm {
  font-size: 0.9rem;
  /* color: #c4c4c4; */
}

.ad-container iframe {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;

}

h5 {
  font-family: "Special Elite", cursive;
}

/* Extra small devices (portrait phones, less than 576px)
No media query since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {  }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {  }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {  }
@media (max-width: 991px) { 
  .component-wrapper {
    display: none;
  }
 }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  }
</style>