<template>
  <!-- <div>
<h2>This is the Contact Us Page</h2>
<p>this is the reuseable version.</p>
  </div>-->
  <div class="body-wrapper">
    <div id="contact-us-main">
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main role="main" class="inner cover text-center text-white">
            <!-- <h2>Title is {{ title }}</h2> -->
            <ContactForm title="Contact Us" v-if="isContactForm()" />
            <SubscribeForm title="Subscribe to Newsletter" v-if="isSubscribeForm()" />
            
          </main>
      </div>
    </div>
  </div>
</template>

<script>

import ContactForm from "@/components/ContactForm.vue"
import SubscribeForm from "@/components/SubscribeForm.vue"

export default {
  name: "contact-us",
  data: {
    title: ""
  },
  components: {
    ContactForm,
    SubscribeForm
  },
  methods: {
    isContactForm() {
      return this.$route.path == "/contact-us" || this.$route.path == "/contact"
    },
    isSubscribeForm() {
      return this.$route.path == "/subscribe-to" || this.$route.path == "subscribe"
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/cover.css";

#contact-us-main {
  height: 100%;
  background: url("../assets/img/dev_contact1b.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left center;
  min-height: 800px;
}
</style>