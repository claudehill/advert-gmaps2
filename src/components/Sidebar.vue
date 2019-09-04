<template>
  <aside class="col-lg-4 blog-sidebar">
    <SidebarAbout />

    <p class="sm text-center">Advertisement</p>

    <div class="ad-container">
      <div id="amz" class="bnr-vert">
        <!-- <iframe
          src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=amzn_biz_bounty&banner=0S464SD9V3S9FXB18BG2&f=ifr&linkID=4e51840069ce0f1a7f7cd3f3360f456a&t=therocfoo-20&tracking_id=therocfoo-20"
          width="300"
          height="250"
          scrolling="no"
          border="0"
          marginwidth="0"
          style="border:none;"
          frameborder="0"
        ></iframe> -->
      
<iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ez&f=ifr&linkID=2b084fcc499a7e38bd95fbc402768b34&t=therocfoo-20&tracking_id=therocfoo-20" width="160" height="600" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>


      </div>

      <div id="ipv-300x250" class="bnr-vert">
        <!-- <iframe
          name="banner"
          src="https://affiliategroove.com/scripts/banner.php?a_aid=5d5e8ede639c1&amp;a_bid=126955b3&amp;w=1"
          framespacing="0"
          frameborder="no"
          scrolling="no"
          width="300"
          height="250"
          allowtransparency="true"
        >
          <a
            href="https://www.ipvanish.com/check-my-privacy.php/?a_aid=5d5e8ede639c1&amp;a_bid=126955b3"
            target="_top"
          >Take Online Security Seriously</a>
        </iframe> -->


<!-- <iframe name='banner' src='https://www.affiliategroove.com/scripts/banner.php?a_aid=5d5e8ede639c1&amp;a_bid=e5c240ae&amp;w=1' framespacing='0' frameborder='no' scrolling='no' width='160' height='600' allowtransparency='true'><a href='https://www.ipvanish.com/check-my-privacy.php/?a_aid=5d5e8ede639c1&amp;a_bid=e5c240ae' target='_top'>Take Online Security Seriously</a></iframe> -->




      </div>
    </div>
    <SidebarTeaser />

    <div id="lc-300x250" class="bnr-vert">
      <!-- <a
        href="https://www.livechatinc.com/?a=r0WaQ-FWg&utm_source=PP&utm_campaign=default_link&utm_source=PP&utm_medium=banner&utm_content=v22"
      >
        <img
          src="https://cdn.livechatinc.com/partners/production/img/resources/livechat_v22.jpg"
          width="300"
          height="250"
          alt="Live Chat Software"
        />
      </a> -->

<a href="https://www.livechatinc.com/?a=r0WaQ-FWg&utm_source=PP&utm_campaign=default_link&utm_source=PP&utm_medium=banner&utm_content=v26"><img src="https://cdn.livechatinc.com/partners/production/img/resources/livechat_v26.jpg" width="160" height="600" alt="Live Chat Software" /></a>

    </div>
  </aside>
</template>

<script>
import SidebarTeaser from "@/components/SidebarTeaser.vue";
import SidebarAbout from "@/components/SidebarAbout.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarTeaser,
    SidebarAbout
  }
};
</script>

<style scoped>
.btn {
  margin-top: 25px;
}

.sidebar-logo img {
  width: 100%;
  height: auto;
}

.bg-light-alt {
  background-color: #f5f5f5;
}

.btn-outline-round {
  border-radius: 20px;
  height: 40px;
}

.sm {
  font-size: 0.7rem;
  color: #c4c4c4;
}

.ad-container iframe {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

h5 {
  font-family: "Special Elite", cursive;
}

p {
  font-size: 0.9rem;
  color: #999999;
}

.bnr-vert iframe,
.bnr-vert a img {
  margin-top: 1rem;
  display:block;
  margin-left: auto;
  margin-right: auto;
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
  aside {
    display: none;
  }
 }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  }

</style>