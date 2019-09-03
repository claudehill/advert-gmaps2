<template>
  <div class="container">
    <h3 class="text-center my-4 promo">Productivity Tips &amp; Tools</h3>
    <p
      class="my-3 pb-3 text-center"
      id="tips"
    >Check out these tips, tools &amp; techniques that can help your small business better engage with your customer base and enhance customer &amp; brand loyalty.</p>
    <div class="row mb-2">
      <div class="col-md-12">
        <div
          class="row no-gutters border rounded flex-md-row mb-4 shadow-sm h-md-250 position-relative"
        >
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-muted">Customer Engagement Platform</strong>
            <h4 class="my-2">
              <a
                href="https://www.livechatinc.com/?a=r0WaQ-FWg&utm_source=PP&utm_campaign=default_link&utm_source=PP&utm_medium=logo&utm_content=v2"
              >LiveChat - Realtime chat &amp; helpdesk platform.</a>
            </h4>
            <div class="my-1 text-muted">
              <span class="badge badge-pill badge-success">
                <i class="fa fa-dollar"></i>
                Cost: Free to try
              </span>
            </div>
            <p class="card-text mb-auto">
              Have you tried LiveChat yet? It’s a live chat software and help desk software that allows your customers to reach you in real time without the need to make a phone call!
              <a
                href="https://www.livechatinc.com/?a=r0WaQ-FWg&utm_source=PP&utm_campaign=default_link&utm_source=PP&utm_medium=text&utm_content=v9"
              >Sign up</a> for a free trial and see how quick and easy it is!
            </p>
          </div>
          <div class="col-auto d-none d-lg-block">
            <div class="img-container">
              <a
                href="https://www.livechatinc.com/?a=r0WaQ-FWg&utm_source=PP&utm_campaign=default_link&utm_source=PP&utm_medium=logo&utm_content=v2"
              >
                <img
                  src="https://cdn.livechatinc.com/partners/production/img/livechat.svg"
                  width="128"
                  height="128"
                  alt="Live Chat Software"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <div
          class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
        >
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-muted">Cybersecurity</strong>
            <h4 class="my-2">Do you offer free wifi? Keep customers safe. Here's how.</h4>
            <div class="my-1 text-muted">
              <span class="badge badge-pill badge-dark">
                <i class="fa fa-calendar"></i>
                Status: Pending
              </span>
            </div>
            <p class="card-text mb-auto">
              Our content creators are still working on researching and writing this article.
              <router-link to="/subscribe">Sign up for our newsletter</router-link>and we'll let you know as soon as it's ready.
            </p>
          </div>
          <div class="col-auto d-none d-lg-block">
            <img src="../assets/img/hacker_img1.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedPost"
};
</script>

<style scoped>
.promo {
  font-family: "Special Elite", cursive;
}

.img-container {
  width: 200px;
  height: 250px;
  border: 2px solid #ccc;
}
.img-container img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25%;
}

.card-text,
h4 {
  font-family: "Roboto", sans-serif;
}

h4,
h4 a {
  color: #17a2b8;
}
#tips {
  display: block;
  margin-left: 4rem;
  margin-right: 4rem;
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
  #tips {
    display: block;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  #tips,
  .card-text {
    font-size: 0.95rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}
@media (max-width: 991px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>