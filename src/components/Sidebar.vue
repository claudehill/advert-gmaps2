<template>
  <aside class="col-lg-4 blog-sidebar">

<SidebarAbout />

    <p class="sm text-center">Advertisement</p>

    <div class="ad-container">
      <div id="amz">
        <iframe
          src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=amzn_biz_bounty&banner=0S464SD9V3S9FXB18BG2&f=ifr&linkID=4e51840069ce0f1a7f7cd3f3360f456a&t=therocfoo-20&tracking_id=therocfoo-20"
          width="300"
          height="250"
          scrolling="no"
          border="0"
          marginwidth="0"
          style="border:none;"
          frameborder="0"
        ></iframe>
      </div>
    </div>
    <SidebarTeaser />
  </aside>
</template>

<script>
import SidebarTeaser from "@/components/SidebarTeaser.vue"
import SidebarAbout from "@/components/SidebarAbout.vue"

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
</style>