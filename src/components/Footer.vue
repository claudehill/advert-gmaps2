<template>
  <footer class="blog-footer blog-footer-overlay pt-4">
    <div class="container">
      <div class="footer-overlay"></div>
      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="col-md-12">
            <h5 class="text-center text-white">Want More?</h5>
            <hr class="white" />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mt-md-0 mt-3">
            <p>Since 2011, we've been dedicated to helping small businesses like yours overcome technical challenges in an affordable, practical way.</p>

            <a href="http://mainavenuedesign.com/" target="_blank">
              <img
                id="logo-footer"
                src="../assets/img/main_avenue_logo_1.png"
                alt="Main Avenue Design Co. Logo"
                class="img-fluid"
              />
            </a>
          </div>
          <hr class="clearfix w-100 d-md-none pb-3" />
          <!-- grid column -->
          <div class="col-md-6 mb-md-0 mb-3">
            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled">
              <li>
                <router-link to="/contact">
               <span><i class="fa fa-envelope"></i></span> Contact Us               
                </router-link>

              </li>
              <li>
               <router-link to="/subscribe">
              <span><i class="fa fa-address-card-o"></i></span> Our Newsletter      
                </router-link>
              </li>
              <li>
                <router-link to="/contact">
               <span><i class="fa fa-handshake-o"></i></span> Get a FREE Website Quote
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
li a {
  color: #17a2b8;
}
</style>