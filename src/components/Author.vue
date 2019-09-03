<template>
  <div class="card my-4">
    <div class="card-body">
      <div class="row">
        <div class="img-div col-md-3">
          <img src="../assets/img/bitmoji_5.png" alt srcset />
        </div>

        <div class="author-info col-md-9">
         <span class="posted">Posted: </span>September 2, 2019  <br>
         <hr class="dark">
          By: <a href="#">Edwin C.</a> <br>
          <em>Director, Small Business Outreach</em>  <br> 
         <a href="http://mainavenuedesign.com/" target="_blank"> Main Avenue Design co.</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div.img-div {
  max-height: 150px;
  max-width: 150px;
  overflow: hidden;
}

.img-div img {
  /* margin-left: 100px; */
  width: 100%;
  height: 100%;
  /* border-radius: 50%; */
  /* border: 3px solid #949494; */
}

.card-body {
  padding: 10px !important;
  background-color: #e4e4e4;
}
.posted {
  font-weight: bold;
}

hr.dark {
  margin: 5px !important;
  color:black !important;
}
</style>