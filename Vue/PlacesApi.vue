<template>
  <div>
    <input type="text" v-model="location" />
    <ul>
      <li v-for="(result, i) in searchResults" :key="i">
        {{ result }} // list of all places
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'places_api',

  data: () => ({
    location: '',
    searchResults: [],
    service: null, // will reveal this later 🕵️
  }),

  metaInfo() {
    return {
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyAKPVy6uNT9eu8vSyXBhUKpA84BJjhp_cI&libraries=places&callback=initMap`,
          async: true,
          defer: true,
          callback: () => this.MapsInit(), // will declare it in methods
        },
      ],
    };
  },

  methods: {
    MapsInit() {
      this.service = new window.google.maps.places.AutocompleteService();
    },
    displaySuggestions(predictions, status) {
      if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
        this.searchResults = [];
        return;
      }
      this.searchResults = predictions.map(
        (prediction) => prediction.description
      );
    },
  },

  watch: {
    location(newValue) {
      if (newValue) {
        this.service.getPlacePredictions(
          {
            input: this.location,
            types: ['(cities)'],
          },
          this.displaySuggestions
        );
      }
    },
  },
};
</script>
