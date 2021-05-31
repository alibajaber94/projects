import "bootstrap-vue/dist/bootstrap-vue.css";
// Import Bootstrap an BootstrapVue CSS files (order is important)
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
// Import Normalize.css
import "normalize.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


// Vue.use( PortalVue );

// Make BootstrapVue available throughout your project
// Vue.use( BootstrapVue );
// Optionally install the BootstrapVue icon components plugin
// Vue.use( IconsPlugin );

createApp( App ).use( store ).use( router ).mount( "#app" );