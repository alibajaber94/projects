<template>
  <div class="a-movie col-6">
    <div class="img float-left">
      <img
        src="../../public/img/movie-poster-2.jpg"
        alt=""
        class="img-responsive"
      />
    </div>
    <div class="title-box">
      <h3 class="movie-title text-left">{{ Title }}</h3>
    </div>
    <div class="plot-box">
      <h5 class="plot float-left text-left">plot:</h5>
      <p class="plot-p text-left text-justify">
        {{ Plot }}
      </p>
    </div>
    <div class="clearfix"></div>
    <div class="details row">
      <div class="col-4">
        <p class="year text-left text-capitalize">
          year:<span class="m-year"> {{ Year }}</span>
        </p>
      </div>
      <div class="col-8">
        <p class="genre text-left text-capitalize">
          genre: <span class="m-genre text-lowercase"> {{ Genre }}</span>
        </p>
      </div>
      <div class="col-4">
        <p class="rate text-left text-capitalize">
          rate:
          <span class="m-rate text-lowercase"> {{ imdbRating }} </span>
        </p>
      </div>
      <div class="col-8">
        <p class="language text-left text-capitalize">
          language: <span class="m-language"> {{ Language }}</span>
        </p>
      </div>
      <div class="col-4">
        <p class="runtime text-left text-capitalize">
          runtime:
          <span class="m-runtime text-lowercase">
            {{ Runtime }} {{ imdbID }}</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "Poster",
    "Title",
    "Year",
    "Runtime",
    "Language",
    "Genre",
    "imdbRating",
    "imdbID",
    "Plot",
  ],
  name: "MovieBox",
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.clearfix {
  float: none;
}
.text-left {
  text-align: left;
}
.float-left {
  float: left;
}
/* .movie-box {
  background-color: burlywood;
  padding: 10px;
  margin-bottom: 500px;
  box-sizing: border-box;
} */
.a-movie {
  background-color: aquamarine;
  height: 450px;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  margin-right: 5px;
  margin-left: 5px;
}
.movie:nth-of-type(odd) {
  /* margin-right: 5px; */
}
.movie:nth-of-type(even) {
  /* margin-left: 5px; */
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
