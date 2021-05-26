<template>
  <div class="search_sura container">
    <h1>sura</h1>
    <input class="form-control" placeholder="search sura" v-model="filter" />
    <br />
    <div v-for="quran in filterBy(qurans, filter)">
      <router-link v-bind:to="'/sura/' + quran.index">{{
        quran.name
      }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "search_sura",
  data() {
    return {
      qurans: [],
      filter: "",
    };
  },
  methods: {
    async fetchQurans() {
      await this.$http
        .get("http://m7mdsami.com/Quran_json/read_json.php")
        .then(function (res) {
          this.qurans = res.body;
          console.log(res.body);
        });
    },
    filterBy(list, value) {
      return list.filter(function (quran) {
        return quran.name.indexOf(value) > -1;
      });
    },
  },
  created: function () {
    this.fetchQurans();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
