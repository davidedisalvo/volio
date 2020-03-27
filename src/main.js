import Vue from 'vue';
import App from './App.vue';
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { VueTyper } from 'vue-typer';
import VueParticles from 'vue-particles';
import Vanta from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

AOS.init({ once: true });

Vue.use(VueParticles);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: h => h(App),
}).$mount('#app');
