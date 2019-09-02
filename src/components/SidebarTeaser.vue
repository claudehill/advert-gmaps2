<template>
  <div class="component-wrapper">
    <div class="card text-center">
      <a href="http://mainavenuedesign.com/" target="_blank">
        <img src="../assets/img/code-1.jpg" alt class="card-img-top" />    
      </a>
      <div class="card-body">
        <h5 class="card-title text-center">Yes, we speak code.</h5>
        <p
          class="card-text"
        >... and yes, we can help your startup or small business become more profitable by utilizing it.</p>
        <p class="card-text">
          Get in touch with us and let's work together.
          <br />Here's how ...
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <img class="logo-sidebar" src="../assets/img/main_avenue_logo_1.png" alt srcset />

          <i class="fa fa-desktop"></i>
          <a href="http://mainavenuedesign.com" class target="_blank">our website</a>
        </li>
        <li class="list-group-item">
          <span>
            <i class="fa fa-envelope-o"></i>
          </span>
          <router-link to="/contact">via email</router-link>
        </li>
        <li class="list-group-item">
          <span>
            <i class="fa fa-address-card-o"></i>
          </span>
          <router-link to="/subscribe">our newsletter</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  width: 100%;
}

.card-title {
  font-family: "Special Elite", cursive;
}

p.card-text,
.list-group li {
  font-size: 0.9rem;
  color: #999999;
}

i.fa {
  padding-right: 10px;
}

.logo-sidebar {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: auto;
  margin-bottom: 1rem;
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