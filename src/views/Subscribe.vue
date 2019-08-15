<template>
  <div class="body-wrapper">
    <div class="jumbotron jumbotron-contact text-center">
      <h1>Subscribe</h1>
    </div>

    <div class="main-wrapper">
      <div class="container">
        <div class="row">
          <div class="col col-md-8 offset-2">
            <h2 class="text-center">Sign Up</h2>
            <hr />
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem aliquam corrupti quos in dicta?
              <span
                style="font-weight:bold; color:red;"
              >* indicates required</span>
            </p>
          </div>

          <div class="col col-md-4 col-sm-12">
            <img src="../assets/img/good_news_photo.jpg" alt class="contact-img" />
          </div>

          <div class="col col-md-8 col-sm-12">
            <!-- Begin Mailchimp Signup Form -->

            <div class="form-wrapper-contact" id="mc_embed_signup">
              <form
                action="https://mainavenuedesign.us19.list-manage.com/subscribe/post?u=b623277d4257c5cb518e7a6cc&amp;id=9efd5561b3"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
                novalidate
                class="pt-3"
              >
                <div id="mc_embed_signup_scroll">
                  <div class="form-group mc-field-group">
                    <label for="mce-EMAIL">
                      <span class="asterisk">*</span> Email Address
                    </label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-envelope-o"></i>
                        </span>
                      </div>

                      <input
                        type="email"
                        id="mce-EMAIL"
                        class="form-control form-control-lg required email"
                        placeholder="email@example.com"
                        name="EMAIL"
                        value
                      />
                    </div>
                  </div>

                  <div class="form-group mc-field-group">
                    <label for="mce-FNAME">First Name</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-user-o"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        id="mce-FNAME"
                        class="form-control form-control-lg"
                        placeholder="First Name"
                        name="FNAME"
                        value
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="mce-LNAME">Last Name</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-user-o"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        id="mce-LNAME"
                        class="form-control form-control-lg"
                        placeholder="Last Name"
                        value
                        name="LNAME"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="mce-MMERGE6">Business Name</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-building-o"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        id="mce-MMERGE6"
                        class="form-control form-control-lg"
                        placeholder="Business Name"
                        value
                        name="MMERGE6"
                      />
                    </div>
                  </div>

                  <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                  </div>

                  <div style="position: absolute; left: -5000px;" aria-hidden="true">
                    <input
                      type="text"
                      name="b_b623277d4257c5cb518e7a6cc_9efd5561b3"
                      tabindex="-1"
                      value
                    />
                  </div>
                  <div class="clear">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      class="button btn btn-primary btn-lg btn-block"
                    />
                  </div>
                </div>
              </form>
              <router-link to="/">
              <button type="submit" class="btn btn-secondary btn-lg btn-block">
                <i class="fa fa-home" aria-hidden="true"></i> Return Home
              </button>
              </router-link>
            </div>
          </div>
          <!-- Begin Mailchimp Signup Form -->
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "subscribe",
  components: {
    Footer
  }
};
</script>

<style scoped>
@import "../assets/styles/contact.css";
.indicates-required,
.asterisk {
  color: red;
  font-weight: bold;
  /* margin: 20 0 20 0; */
}
.form-wrapper-contact {
  min-height: 600px;
}

input[type="submit"],
button[type="submit"] {
  margin-top: 50px;
  font-size: 1.5rem;
}

.fa {
  font-size: 1.7rem;
  color: #3974d8;
}

.btn-txt {
  margin-left: 1rem;
  margin-right: 1rem;
}

input {
  border: 1px solid #3974d8;
}
</style>