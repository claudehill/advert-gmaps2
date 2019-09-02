<template>
  <div class="container">
    <div class="row">
      <div class="col col-lg-6 offset-lg-3 col-md-12">
        <h1 class="text-white text-center">{{ title }}</h1>
      </div>
    </div>

    <div class="row">
      <div class="col col-md-12 col-lg-8 offset-lg-2">
        <div class="form-wrapper">
          <form
            method="post"
            id="contact-form"
            name="contact-us"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
            action="/contact/success/"
            data-netlify-recaptcha="true"
          >
            <input type="hidden" name="form-name" value="contact-us" />
            <div class="form-group">
              <label for="contact-form">Email Address</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  class="form-control form-control-lg"
                  placeholder="email@example.com"
                  required
                />
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
                  name="name"
                  id="contact-name"
                  class="form-control form-control-lg"
                  placeholder="Full Name"
                  required
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
                  name="phone"
                  id="contact-phone"
                  class="form-control form-control-lg"
                  placeholder="(888) 888-8888"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label for="contact-msg">Your Message</label>
              <textarea
                name="message"
                id="contact-msg"
                cols="30"
                rows="7"
                class="form-control"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div data-netlify-recaptcha="true"></div>

            <button type="submit" class="btn btn-lg btn-outline-info">
              <span>
                <i class="fa fa-send"></i>
              </span> Send Email
            </button>
          </form>

          <router-link to="/">
            <button type="submit" class="btn btn-lg btn-outline-secondary">
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
  props: ["title"]
};
</script>

<style scoped>
input:focus,
textarea:focus {
  /* border: 2px solid #3974d0; */
  border: 2px solid #17a2b8;
  background: transparent;
  color: #cecece;
}

input,
textarea,
span.input-group-text {
  /* border: none !important; */
  /* border: 2px solid #3974d0; */
  border: 2px solid #17a2b8;
  background: transparent;
  color: #cecece;
}

span.input-group-text {
  /* border: 2px solid #3974d0; */
  border: 2px solid #17a2b8;
}

label,
span.input-group-text i {
  color: #cecece;
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

/* Extra small devices (portrait phones, less than 576px)
No media query since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {  }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {  }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {  }
@media (max-width: 991px) { 


 }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  }

</style>