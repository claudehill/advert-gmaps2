<template>
  <div id="comments-wrapper">
    <h3 class="text-center">Got Feedback?</h3>

    <p class="text-center">We're listening... Please comment below.</p>

    <div id="disqus_thread"></div>
    <noscript>
      Please enable JavaScript to view the
      <a href="https://disqus.com/?ref_noscript">
        comments powered by
        Disqus.
      </a>
    </noscript>
  </div>
</template>

<script>
require("../assets/js/disqus");

export default {
  name: "Comments"
};
</script>

<style lang="scss" scoped>
</style>