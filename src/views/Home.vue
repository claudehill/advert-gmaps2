<template>
  <div class="container-wrapper">
    <div class="container">
      <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <!-- <div class="col-3 pt-1">
            <router-link to="/subscribe" class="text-muted">Subscribe to Newsletter</router-link>
          </div>-->

          <div class="col-3 d-flex justify-content-begin align-items-center">
            <router-link to="/subscribe" class="btn btn-outline-info">Subscribe to Newsletter</router-link>
          </div>

          <div class="col-6 text-center">
            <router-link class="blog-header-logo text-dark" to="/">
              A Techitorial
              <br />
              <span>by Main Avenue Design Co.</span>
            </router-link>
          </div>

          <div class="col-3 d-flex justify-content-end align-items-center">
            <router-link to="/contact" class="btn btn-outline-info">Contact Us</router-link>
          </div>
        </div>
      </header>

      <JumbotronMain />

      <main role="main" class="container">
        <div class="row">
          <div class="col-md-8 blog-main">
            <h3 class="pb-4 mb-4 font-italic border-bottom blue">
              <span class>
                <i class="fa fa-microphone"></i>
              </span> From our Design Team...
            </h3>

            <ContentMain />
          </div>

          <Sidebar />
        </div>
        <FeaturedPost />
        <!-- <Comments /> -->
      </main>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
@import "../assets/styles/blog.css";
.blue {
  color: #3974d8;
  /* color: #17a2b8; */
}
.btn-outline-info {
  /* color: #3974d8;
  border-color: #3974d8; */
  color: #17a2b8;
  border-color: #17a2b8;
  border-radius: 20px;
  height: 40px;
}

.btn-outline-info:hover {
  color: #fff;
  background-color: #17a2b8;
}

/*

    color: #17a2b8;
    border-color: #17a2b8;.blue
*/

.btn-round {
  width: 60px;
  height: 60px;
  border: 1px solid;
  border-radius: 50%;
}
</style>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ContentMain from "@/components/ContentMain.vue";
import Footer from "@/components/Footer.vue";
import JumbotronMain from "@/components/JumbotronMain.vue";
import FeaturedPost from "@/components/FeaturedPost.vue";
import MapDemo from "@/components/MapDemo.vue";
import Sidebar from "@/components/Sidebar.vue";
// import Comments from "@/components/Comments.vue";

// require('../assets/js/geo')

export default {
  name: "home",
  components: {
    HelloWorld,
    ContentMain,
    Footer,
    // Comments,
    JumbotronMain,
    FeaturedPost,
    MapDemo,
    Sidebar
  },
  created() {
    console.log("Home component created ...");
  },
  mounted() {
    console.log("Home component mounted ...");
    this.checkAdblock();
  },
  methods: {
    checkAdblock: function() {
      if (document.getElementById("369379917555767") == undefined) {
        console.log("adblock detected, redirecting in 5 seconds ...");

        // Redirect to adblock page after 5 seconds
        setTimeout(() => {
          this.$router.push({ name: "adblock" });
        }, 5 * 1000);
      }
    }
  }
};
</script>
