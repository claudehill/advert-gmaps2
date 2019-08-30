<template>
  <div class="card text-center">
    <img src="../assets/img/code-1.jpg" alt class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title text-center">Yes, we speak code.</h5>
      <p
        class="card-text"
      >... and yes, we can help your startup or small business become more profitable by utilizing it.</p>
    <p class="card-text">
      Get in touch with us and let's work together.  <br> Here's how ...
    </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><i class="fa fa-desktop"></i> <a href="http://mainavenuedesign.com" class="" target="_blank">our website</a></li>
      <li class="list-group-item">
        <span><i class="fa fa-envelope-o"></i></span>        
        <router-link to="/contact">via email</router-link>
      </li>
      <li class="list-group-item">
        
<span><i class="fa fa-address-card-o"></i></span>
<router-link to="/subscribe">our newsletter</router-link>
      </li>
    </ul>
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
</style>