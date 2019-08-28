<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10 offset-1 text-center">
        <h2>{{ title }}</h2>

        <span class="thumbs-down">
          <i class="fa fa-thumbs-o-down fa-4x pt-4"></i>
        </span>

        <p class="pt-4">
That message didn't go through.  Sorry about that! <br>
Why don't you try again?...
        </p>
        <router-link to="/contact">
          <button class="btn btn-lg btn-outline-info">
            <span>
              <i class="fa fa-envelope"></i>
            </span> Return to Contact Page
          </button>
          <button class="btn btn-lg btn-outline-secondary">
            <span>
              <i class="fa fa-home"></i>
            </span> Return to Home Page
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["title"]
  }
</script>

<style scoped>
.thumbs-down {
  color: red;
}
button {
  width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
}

.router-link-active {
  text-decoration: none !important;
}
</style>