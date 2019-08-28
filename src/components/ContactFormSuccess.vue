<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-10 offset-1 text-center">
          <h2>{{ title }}</h2>

          <span class="thumbs-up">
            <i class="fa fa-thumbs-o-up fa-4x pt-4"></i>
          </span>

          <p class="pt-4">
            Your message was successfully sent.
            <br />You'll be hearing from us soon!
          </p>
          <router-link to="/" >
            <button class="btn btn-lg btn-outline-secondary">
              <span>
                <i class="fa fa-home"></i>
              </span> Return to Home Page
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    isContactFormSuccess: function() {
      return (
        this.$route.path == "/contact/success" ||
        this.$route.path == "/contact-us/success"
      );
    }
  }
};
</script>

<style scoped>
.thumbs-up {
  color: #17a2b8;
}
</style>