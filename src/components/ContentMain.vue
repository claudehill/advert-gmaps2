<template>
  <div class="blog-post">
    <h2 class="blog-post-title my-3 mb-4">
      When the Directions to your Business Says "This Page Can't Load Google
      Maps
      Correctly"
    </h2>
    <p class="blog-post-meta">
      January 1, 2099 by
      <a href="#">Claude</a>
    </p>

    <h3>Executive Summary</h3>

    <ul>
      <li>    
        Potential customers are skeptical of restaurants and other small businesses when they see a Google Maps error message on the website.
      </li>
      <li>
        If your small business website was created prior to 2016 and has an embedded Google Map, you may receive this error due to changes in Google Maps pricing structure.
      </li>

      <li>
        For tech-savvy small-business owners, there are 4 steps to fixing the problem.
      </li>
      <li>
        For non-tech savvy small-business owners, it is recommended to have this type of work outsourced.
      </li>
    </ul>

    <hr />
    <div class="addthis_sharing_toolbox"></div>

    <h3 class="pt-4 pb-2">A Personal Perspective</h3>

    <p>
      As a restaurateur or other small business owner with a traditional “brick-and-mortar” business, few things are more frustrating to your potential customers than not knowing how to find the location of your business. On the internet, you only have a few minutes (at
      best) to capture the attention of your potential clientele before someone else gets it.
      <br />
      <br />To illustrate:
    </p>

    <div class="quote-offset">
      <p>Recently, my spouse and I decided to experiment and try a trendy, local, upscale non-chain restaurant. Since we rarely have evenings where we can enjoy a cozy upscale dinner together, we were both very excited to view the menu and check out the ambiance of the restaurant.</p>

      <p>After a few minutes of glancing at the menu to see what I might like, I was convinced - I had to check this place out. So, I navigated to the “Contact Us” Page. However, when I tried clicking the map to get driving directions, I was quickly met with the error “This page cannot display Google maps,” followed by a “for Development purposes only” watermark over the map, preventing me from panning, zooming or getting directions from my location.</p>

      <div class="img-container">
        <img src="../assets/img/gmap_error.png" alt srcset />
      </div>

      <p>Needless to say, my enthusiasm turned immediately to frustration. As someone who is “directionally challenged,” Google maps has always provided straightforward, easy to navigate directions. For an upscale restaurant like this to not provide directions (in my opinion) suggested apathy and incompetence.</p>

      <p>I began to wonder, “if the restaurant can’t even provide directions, will the same apathy come through with the food?... and what about the service?... is the management even aware of this?” My suspicions gave way to doubt, and my doubt caused me to immediately look for another dining option. Not wanting to risk having a “less-than-exceptional” experience, especially for the upscale price point, I decided to try another restaurant.</p>
    </div>
    <p>
      Most customers will not reveal their frustrations with the level of transparency described above, so it is critical that nothing separates you from your ability to gain new customers - including your own website.
      This is especially true if your restaurant concept, core product offering or service is geared toward upscale clientele.
    </p>

    <p>
      As
      <a
        href="https://www.forbes.com/sites/robisbitts2/2019/04/09/recession-looming-yup/#3284fe803b7a/"
      >evidence continues to mount that we are heading into a deep recession</a>, the competition for your client base will continue to grow. Having clear directions to your restaurant or business, coupled with a good marketing strategy that fosters both loyalty and growth will help you remain profitable in any economic climate.
    </p>

    <h3>Why This Happens</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae alias labore facilis nostrum
      veniam, voluptatem commodi, necessitatibus, maiores quia provident eum.
    </p>

    <h3>An H3 Sub-Heading</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo ipsam quos ullam ut vel qui quasi
      velit possimus deserunt commodi, amet tenetur eius blanditiis.
    </p>
    <pre><code>Example Code block</code></pre>
    <p>
      Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
      dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.
    </p>
    <h3>Sub-heading</h3>

    <MapDemo />

    <p>
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia
      bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
      cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
    </p>
    <ul>
      <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
      <li>Donec id elit non mi porta gravida at eget metus.</li>
      <li>Nulla vitae elit libero, a pharetra augue.</li>
    </ul>
    <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
    <ol>
      <li>Vestibulum id ligula porta felis euismod semper.</li>
      <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
      <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
    </ol>
    <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
    <h4>End of Content Main ...</h4>
  </div>
</template>

<script>
import MapDemo from "@/components/MapDemo.vue";

export default {
  name: "ContentMain",
  components: {
    MapDemo
  }
};
</script>

<style scoped>
.blog-post {
  color: #4e4e4e;
}

.quote-offset p {
  text-align: justify;
  padding-left: 10%;
  padding-right: 10%;
  font-size: 0.95rem;
  font-style: italic;
}

.img-container img {
  display: block;
  margin: auto;
}
</style>