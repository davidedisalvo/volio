<template>
  <header class="hero">
    <div class="header-text">
      <div class="title-container">
        <h1 data-aos="fade-up-left">
          HI!
          <br>I'M DAVIDE DI SALVO
        </h1>
        <div class="know-button" @click="deleteLayer()">KNOW MORE</div>
      </div>
    </div>

    <div id="test" class="layer" :class="{ layerClass: layerClass }">
      <!-- <vue-particles
        color="#dedede"
        :particlesNumber="100"
        :particleSize="6"
        hoverMode="repulse"
        shapeType="circle"
        clickMode="push"
        v-if="isTyping"
        class="particles"
        :lineOpacity="0"
      ></vue-particles> -->
      <vue-typer
        v-if="isTyping"
        class="title-main"
        :repeat="0"
        :pre-type-delay="500"
        :text="typemachine"
      ></vue-typer>
      <vue-typer
        v-if="isTyping"
        class="list"
        :repeat="0"
        :pre-type-delay="3800"
        :text="list"
        @completed="onComplete"
      ></vue-typer>
    </div>
  </header>
</template>
<script>
import { VueTyper } from "vue-typer";
import NET from 'vanta/dist/vanta.globe.min'

export default {
  components: {
    // ES6; property shorthand + Vue should automatically dasherize the key for us
    VueTyper
  },

  data() {
    return {
      layerClass: true,
      isTyping: false,
      finishTyping: false,
      typemachine: "I'M A FRONTEND DEVELOPER. \nMY MAIN SKILLS ARE",
      list: "WORDPRESS \nSCSS \nJAVASCRIPT \nVUE \nSVG ANIMATION",
      scrolled: false
    };
  },
  methods: {
    deleteLayer() {
      this.layerClass = !this.layerClass;
      this.isTyping = true;
    },

    onComplete: function() {
      window.setTimeout(function() {
        window.scrollTo(0, 500);
      }, 1000);
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    }
  },
mounted() {
  this.vantaEffect = NET({
    el: "#test",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
    // ...
  });

},
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>


<style lang="scss">
header {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
}

.list {
  font-size: 25px;
    padding-left: 20px;
  text-align: left;
}

.particles {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
}

.myImg {
  position: absolute;
  right: 0;
  width: 40vw;
  bottom: 25%;
  img {
    max-width: 100%;
  }
}

.header-skills {
  z-index: 2;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
}

.header-skills-box {
  display: flex;
  padding: 0px;
  align-items: center;
  color: white;

  div:first-child {
    margin-right: 30px;
  }
  li {
    margin-top: 10px;
    font-size: 31px;
    font-weight: bold;
  }
}

.know-button {
  width: 130px;
  position: relative;
  height: 50px;
  background: #f3f5fc;
  display: flex;
  font-weight: bold;
  box-shadow: black;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  margin-left: 70px;
  cursor: pointer;
  font: 1rem/1 "Replica-Mono", "Helvetica Neue", Helvetica, sans-serif;
  -webkit-box-shadow: 9px 7px 5px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 7px 5px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 9px 7px 5px -2px rgba(0, 0, 0, 0.75);
  color: #1a1a1a;
  overflow: hidden;
  transition: all 0.6s;
  font-weight: bold;

  &:hover {
    background: #dbe0f3;
    transition: all 0.6s;
  }
  @media only screen and (max-width: 560px) {
    display: none;
  }
}
.header-text .title-container h1 {
  margin-bottom: 20px;
}

.title-main {
  font-size: 55px;
  font-family: FuturaHeavy, "Helvetica Neue", Helvetica, sans-serif;
  padding-left: 20px;
  text-align: left;
}
.arrow {
  position: absolute;
  right: 60px;
  transform: rotate(180deg) translateY(-50%);
  top: 37%;

  @media (max-width: 560px) {
    display: none;
  }
}
.arrow-second {
  position: absolute;
  transform: rotate(180deg);
}
.arrowBtn1 {
  display: block;
  transform: rotate(-90deg);
  width: 48px;
  height: 48px;
  border-radius: 4px;
  position: relative;
}
.arrowBtn1::before,
.arrowBtn1::after,
.arrowBtn2 {
  content: "";
  display: block;
  box-sizing: border-box;
  border-right: 3px solid white;
  border-bottom: 3px solid white;
  width: 13px;
  height: 13px;
  transform-origin: top left;
  transform: rotate(45deg);
  position: absolute;
  left: 50%;
}
.arrowBtn1::before {
  top: -1px;
  animation: changeColor 1.5s infinite;
}
.arrowBtn1::after {
  top: 11px;
  animation: changeColor 1.5s 0.33s infinite;
}
.arrowBtn2 {
  top: 23px;
  animation: changeColor 1.5s 0.66s infinite;
}
@keyframes changeColor {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

.hero {
  background-color: #5100ff;
  background-image: url("../assets/background-hero.jpg");
  background-attachment: fixed;
  background-size: cover;
  -webkit-clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    75% 75%,
    75% 100%,
    50% 75%,
    0% 75%
  );
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    75% 75%,
    75% 100%,
    50% 75%,
    0% 75%
  );
}

.header-text {
  margin: 0;
  h1 {
    font-size: 5em;
    padding-left: 70px;
    @media (max-width: 560px) {
      padding-left: 20px;
    }
  }
  .title-container {
    margin-top: calc(50% - 127px);
    transform: translateY(-50%);

    @media (max-width: 560px) {
      margin-top: calc(50% + 84px);

      h1 {
        font-size: 40px;
      }
    }
  }
}

h3 {
  color: white;
  text-shadow: 4px 4px 15px rgba(5, 5, 5, 0.5);
}

.layer {
  width: 100%;
  height: 100vh;
  transform: translateX(0);
  transition: all 1s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 100px;
  position: absolute !important;
  left: 0;
  top: 0;

  @media (max-width: 560px) {
    display: none;
  }
}

.layerClass {
  transform: translateX(100vw);
  transition: all 0.5s;
  position: relative;
  // background: #144467;
}
.vue-typer {
  z-index: 999;
}

.layer .vue-typer .left .char.custom.char {
  color: white;
}

@media (max-width: 560px) {
  h1 {
    transform: scale(0.7);
  }
}

@media only screen and (max-width: 320px) {
  .timeline{
    padding-left: 1.5rem;
  }
}
</style>
