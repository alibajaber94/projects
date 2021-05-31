<template>
  <div class="home">
    <SearchMovie />
    <MovieBox />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchMovie from "@/components/SearchMovie.vue";
import MovieBox from "@/components/MovieBox.vue";

export default {
  name: "Home",
  components: {
    SearchMovie,
    MovieBox,
  },
};
</script>
