<template>
  <aside class="col-md-4 blog-sidebar">
    <div class="pt-2 pb-0 sidebar-logo">
      <a href="//mainavenuedesign.com/" target="_blank">
        <img src="../assets/img/main_avenue_logo_5.jpg" alt />
      </a>
    </div>
    <div class="p-4 mb-3 bg-light-alt">
      <h4 class="font-italic text-center">About this Site</h4>
      <p>This MicroSite is specifically designed for small business owners to explain common technical problems and their resolution from a non-technical perspective.</p>
      <p>The problem with many sites of this nature is that ...</p>
      <router-link to="/about" class="btn btn-outline-info btn-block btn-outline-round">Read More</router-link>
    </div>

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

    <div class="p-4">
      <h4 class="font-italic">Elsewhere</h4>
      <ol class="list-unstyled">
        <li>
          <a href="#">GitHub</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
      </ol>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
.btn {
  margin-top: 25px;
}

.sidebar-logo img {
  /* max-width: 300px; */
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

.ad-container {
  margin-left: 20px;
}

.ad-container iframe {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>