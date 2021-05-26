<template>
  <div class="sura contanier">
    <div v-for="sura in qur" :key="sura.index">
      <h1>{{ sura.name }}</h1>
      <div>
        <span v-for="e in sura.aya" :key="e.index">
          <p>{{ e.bismillah }}</p>
          <span> {{ e.text }} ( {{ e.index }} ) </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sura",
  data() {
    return {
      qur: "",
    };
  },
  methods: {
    fetchQurans(id) {
      this.$http
        .get("http://m7mdsami.com/Quran_json/read_json.php?index=" + id)
        .then(function (res) {
          this.qur = res.body;
          //console.log(res.body);
        });
    },
  },
  created: function () {
    let url = window.location.href,
      id = url.substring(url.lastIndexOf("/") + 1);
    this.fetchQurans(id);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
