<template>
  <div id="error-main">
    <div class="container-wrapper">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main role="main" class="inner cover text-center">
          <h1 class="cover-heading">Uh Oh!...</h1>
          <h3 class="text-center white-text pt-4">Something went wrong</h3>
          <p
            class="lead-light pt-3"
          >We're not quite sure what happened, but we'll get to the bottom of it!</p>

          <p class="lead-light">
            <router-link
              to="/"
              class="btn btn-lg btn-outline-info">
            <span><i class="fa fa-home"></i></span>  Return to Home Page</router-link>
          </p>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "error",
  components: ""
};
</script>

<style scoped>
@import "../assets/styles/cover.css";

a {
  text-decoration: none;
}

.white-text {
  color: #ffffff;
}

#error-main {
  height: 100%;
  background: url("../assets/img/dev_error1.png");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 800px;
}
</style>