<template>
  <div class="body-wrapper">
    <div id="contact-us-main">
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main role="main" class="inner cover text-white">
            <ContactForm title="Contact Us" v-if="isContactForm()" />
            <SubscribeForm title="Subscribe" v-if="isSubscribeForm()" />
            <ContactFormSuccess title="Success!" v-if="isContactSuccess()"/>
            <ContactFormFail title="Send Error!" v-if="isContactFail()" /> 
          </main>
      </div>
    </div>
  </div>
</template>

<script>

import ContactForm from "@/components/ContactForm.vue"
import SubscribeForm from "@/components/SubscribeForm.vue"
import ContactFormSuccess from "@/components/ContactFormSuccess.vue"
import ContactFormFail from "@/components/ContactFormFail.vue"


export default {
  name: "contact-us",
  // data: {
  //   title: "Page Title"
  // },
  components: {
    ContactForm,
    SubscribeForm,
    ContactFormSuccess,
    ContactFormFail
  },
  methods: {
    isContactForm() {
      return this.$route.path == "/contact"
    },
    isSubscribeForm() {
      return this.$route.path == "/subscribe"
    },
    isContactSuccess() {
      return this.$route.path == "/contact/success"
    },
    isContactFail() {
      return this.$route.path == "/contact/fail"
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