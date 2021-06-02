<template>
  <div class="home">
    <SearchMovie />
    <div class="movie-box container">
      <div class="row">
        <div class="col-12">
          <MovieBox />
          <!-- v-for="movie in Movies"
            :key="movie.imdbID"
            :Poster="movie.Poster"
            :Title="movie.Title"
            :Year="movie.Year"
            :Runtime="movie.Runtime"
            :Language="movie.Language"
            :Genre="movie.Genre"
            :imdbRating="movie.imdbRating"
            :Plot="movie.Plot" -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchMovie from "@/components/SearchMovie.vue";
import MovieBox from "@/components/MovieBox.vue";
// import MovieJson from "../json/movie.json";

export default {
  data() {
    return {
      // movies: MovieJson,
    };
  },
  name: "Home",
  components: {
    SearchMovie,
    MovieBox,
  },
};
</script>
