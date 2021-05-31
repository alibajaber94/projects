<template>
  <div id="movie-box">
    <div class="row">
      <div id="movie" class="movie col-6">
        <div class="img float-left">
          <img
            src="../../public/img/movie-poster.jpg"
            alt=""
            class="img-responsive"
          />
        </div>
        <div class="title-box">
          <h3 class="movie-title text-left">freedom</h3>
        </div>

        <div class="plot-box">
          <h5 class="plot float-left text-left">plot:</h5>
          <p class="plot-p text-left text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            odio alias officia quam architecto facilis voluptatibus quis
            similique maiores eos, totam ad cupiditate mollitia perferendis
            tenetur unde quisquam eveniet blanditiis!
          </p>
        </div>
        <div class="clearfix"></div>
        <div class="details row">
          <div class="col-4">
            <p class="year text-left text-capitalize">
              year:<span class="m-year"> 15 jun 2017</span>
            </p>
          </div>
          <div class="col-8">
            <p class="genre text-left text-capitalize">
              genre: <span class="m-genre text-lowercase"> 15 jun 2017</span>
            </p>
          </div>
          <div class="col-4">
            <p class="rate text-left text-capitalize">
              rate: <span class="m-rate text-lowercase"> 8/10 </span>
            </p>
          </div>
          <div class="col-8">
            <p class="language text-left text-capitalize">
              language: <span class="m-language"> 15 jun 2017</span>
            </p>
          </div>
          <div class="col-4">
            <p class="runtime text-left text-capitalize">
              runtime: <span class="m-runtime text-lowercase"> 150 min</span>
            </p>
          </div>
        </div>
      </div>

      <div id="movie" class="movie col-6">
        <div class="img float-left">
          <img
            src="../../public/img/movie-poster.jpg"
            alt=""
            class="img-responsive"
          />
        </div>
        <div class="title-box">
          <h3 class="movie-title text-left">freedom</h3>
        </div>

        <div class="plot-box">
          <h5 class="plot float-left text-left">plot:</h5>
          <p class="plot-p text-left text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            odio alias officia quam architecto facilis voluptatibus quis
            similique maiores eos, totam ad cupiditate mollitia perferendis
            tenetur unde quisquam eveniet blanditiis!
          </p>
        </div>
        <div class="clearfix"></div>
        <div class="details row">
          <div class="col-4">
            <p class="year text-left text-capitalize">
              year:<span class="m-year"> 15 jun 2017</span>
            </p>
          </div>
          <div class="col-8">
            <p class="genre text-left text-capitalize">
              genre: <span class="m-genre text-lowercase"> 15 jun 2017</span>
            </p>
          </div>
          <div class="col-4">
            <p class="rate text-left text-capitalize">
              rate: <span class="m-rate text-lowercase"> 8/10 </span>
            </p>
          </div>
          <div class="col-8">
            <p class="language text-left text-capitalize">
              language: <span class="m-language"> 15 jun 2017</span>
            </p>
          </div>
          <div class="col-4">
            <p class="runtime text-left text-capitalize">
              runtime: <span class="m-runtime text-lowercase"> 150 min</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieBox",
};
</script>

<style scoped>
.text-left {
  text-align: left;
}
.float-left {
  float: left;
}
#movie-box {
  background-color: burlywood;
  padding: 10px;
  margin-bottom: 500px;
}
.movie {
  background-color: aquamarine;
  height: 450px;
  padding: 5px;
}
.movie:nth-of-type(odd) {
  margin-right: 5px;
}
.movie:nth-of-type(even) {
  margin-left: 5px;
}
/* #movie {
  background-color: aquamarine;
  height: 450px;
  padding: 5px;
} */
.img {
  /* float: left; */
  max-height: 296px;
  max-width: 197.33px;
}
.img-responsive {
  height: 100%;
  max-height: 296px;
}
.title-box {
  margin-left: 20%;
}
.movie-title {
}
.plot-box {
  margin-left: 20%;
  margin-top: 2%;
}
.plot {
  /* float: left; */
  padding-right: 0.5%;
}
.plot-p {
  line-height: 170%;
  margin-left: 21%;
}
</style>
