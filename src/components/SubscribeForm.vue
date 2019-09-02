<template>
  <div class="container">
    <div class="row">
      <div class="col col-md-12 text-center">
        <h1 class="text-white">{{ title }}</h1>
        <p>
          We've got more to share!
          <br />Sign up here to get the latest.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col col-lg-8 offset-lg-2 col-md-12">
        <div class="form-wrapper">
          <div id="mc_embed_signup">
            <form
              action="https://mainavenuedesign.us19.list-manage.com/subscribe/post?u=b623277d4257c5cb518e7a6cc&amp;id=9efd5561b3"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <div id="mc_embed_signup_scroll">
                <div class="indicates-required text-center">
                  <span class="asterisk">*</span> indicates required
                </div>

                <div class="mc-field-group form-group">
                  <label for="mce-EMAIL">
                    Email Address
                    <span class="asterisk">*</span>
                  </label>

                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fa fa-envelope"></i>
                      </span>
                    </div>

                    <input
                      type="email"
                      value
                      name="EMAIL"
                      class="required email form-control form-control-lg"
                      id="mce-EMAIL"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div class="mc-field-group">
                  <!-- <strong>Would you like a FREE Website Quote?</strong> -->
                  <p class="text-center">Would you like a <strong>FREE</strong> Website Quote?</p>

                  <ul>
                    <li>
                      <div class="form-check form-check-inline">
                        <input
                          type="checkbox"
                          value="1"
                          name="group[3903][1]"
                          id="mce-group[3903]-3903-0"
                          class="form-check-input form-control-lg form-control-custom"
                        />
                        <label
                          for="mce-group[3903]-3903-0"
                          class="form-check-label"
                        >Yes, contact me for a FREE Website Quote!</label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="mce-responses" class="clear">
                  <div class="response" id="mce-error-response" style="display:none"></div>
                  <div class="response" id="mce-success-response" style="display:none"></div>
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
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
                    class="button btn btn-lg btn-outline-secondary"
                  />
                </div>
              </div>
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
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
input[type="email"]:focus,
#mce-EMAIL,
span.input-group-text {
  border: 2px solid #17a2b8;
  background: transparent;
  color: #cecece;
}



.form-control-custom {
  transform: scale(2);
  margin: 1.5rem;
}

p,
label,
strong,
span.input-group-text i {
  color: #cecece;
}

button,
input[type="submit"] {
  width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
}

.router-link-active {
  text-decoration: none !important;
}

ul {
  display: block;
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
}

p {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#mc-embedded-subscribe {
  border: 2px solid #17a2b8;
  background-color: transparent;
}

#mc-embedded-subscribe:hover {
  background-color: #17a2b8;
  color: #fff;
}

.indicates-required,
.asterisk {
  color: orange;
}

/* Extra small devices (portrait phones, less than 576px)
No media query since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}
@media (max-width: 767px) {
  button,
  input[type="submit"] {
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
    button,
  input[type="submit"] {
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
  }
}
@media (max-width: 991px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>