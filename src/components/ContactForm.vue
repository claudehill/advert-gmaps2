<template>
  <div class="container">
    <div class="row">
      <div class="col col-md-8 offset-2 col-sm-12">
        <div class="form-wrapper">
          <form
            method="POST"
            id="contact-form"
            class="pt-3"
            data-netlify="true"
            data-netlify-recaptcha="true"
          >
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
                  id="contact-phone"
                  class="form-control form-control-lg"
                  placeholder="(888) 888-8888"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label for="contact-msg">Your Message</label>
              <textarea name id="contact-msg" cols="30" rows="7" class="form-control" placeholder="Your Message"></textarea>
            </div>

            <div data-netlify-recaptcha="true"></div>
            <button type="submit" class="btn btn-lg btn-outline-info">
              <span>
                <i class="fa fa-send"></i>
              </span> Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input:focus,
textarea:focus {
  border: 2px solid;
  background: transparent;
  color: #e4e4e4;
}

input,
textarea,
span.input-group-text {
  /* border: none !important; */
  border: 2px solid;
  background: transparent;
  color: #e4e4e4;
}

span.input-group-text {
  border: 2px solid #3974d0;
}

span.input-group-text i {
  color: #fff;
}

button[type="submit"] {
  width: 60%;
}
</style>