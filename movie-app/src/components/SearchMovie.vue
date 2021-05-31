<template>
  <div id="search">
    <label for="Search" id="search-label"
      ><p id="search-p">Search</p>
      <label id="title">Title</label>
      <input type="text" id="search-bar" />
      <label id="year">Year</label>
      <input type="text" id="year-bar" />
      <button type="button" class="search-button btn btn-primary">
        Search
      </button>
    </label>
  </div>
</template>

<script>
export default {
  name: "SearchMovie",
};
</script>

<style scoped>
#search {
  margin-top: 40px;
}

#search-p {
  display: block;
  text-align: left;
}

#title {
  margin-right: 5px;
}
#year {
  margin-right: 5px;
}
#search-bar {
  margin-right: 10px;
}
#year-bar {
  margin-right: 0px;
}
.search-button {
  margin-left: 20px;
}
</style>
