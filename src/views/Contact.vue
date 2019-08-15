<template>
  <div class="body-wrapper">
    <div class="jumbotron jumbotron-contact text-center">
      <h1>Contact Us</h1>
    </div>
    <div class="main-wrapper">
      <div class="container">
        <div class="row">
          <div class="col col-md-8 offset-2">
            <h2 class="text-center">
              Get in Touch!
              <span>
                <i id="contact-icon" class="fa fa-comments-o" aria-hidden="true"></i>
              </span>
            </h2>
            <hr />
            <p
              class="text-center"
            >We'd love to hear from you! Fill out the form below and we'll get back to you ASAP.</p>
          </div>

          <div class="col col-md-4 col-sm-12">
            <img src="../assets/img/dev_contact1.jpg" alt class="contact-img" />
          </div>

          <div class="col col-md-8 col-sm-12">
            <div class="form-wrapper-contact">
              <form action id="contact-form" class="pt-3">
                <div class="form-group">
                  <label for="contact-email">Email Address</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fa fa-envelope"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      id="contact-email"
                      class="form-control form-control-lg"
                      placeholder="email@example.com"
                    />
                    <div class="invalid-feedback">Sorry, that username's taken. Try another?</div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="contact-name">Name</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fa fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      id="contact-name"
                      class="form-control form-control-lg"
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="contact-phone">Mobile Number</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fa fa-phone"></i>
                      </span>
                    </div>
                    <input
                      type="tel"
                      id="contact-phone"
                      class="form-control form-control-lg"
                      placeholder="(888) 888-8888"
                    />
                    <div class="valid-feedback">Success! You've done it.</div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="contact-msg">Your Message</label>
                  <textarea class="form-control" id="contact-msg" rows="3"></textarea>
                </div>

                <h1 class="text-center" style="color:red;">RECAPTCHA</h1>

                <button type="submit" class="btn btn-primary btn-lg btn-block">
                  <i class="fa fa-envelope" aria-hidden="true"></i> Send Message
                </button>
              <router-link to="/">
                <button type="submit" class="btn btn-secondary btn-lg btn-block">
                  <i class="fa fa-home" aria-hidden="true"></i> Return Home
                </button>
              </router-link>                
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "contact",
  components: {
    Footer
  }
};
</script>

<style scoped>
@import "../assets/styles/contact.css";

.jumbotron-contact {
  margin-bottom: 3rem;
}

.fa {
  font-size: 1.7rem;
  color: #3974d8;
}

button[type="submit"] {
  font-size: 1.5rem;
}

a {
  text-decoration: none;
}
</style>