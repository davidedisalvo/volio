<template>
  <header class="hero">
    <div class="header-text">
      <div>
        <h1 data-aos="fade-up-left">TEST TEST</h1>
        <h2>TEST TEST TEST</h2>
       

      </div>

      
      <div class="arrow" @click="deleteLayer()"><a href="#" class="arrowBtn1"><span class="arrowBtn2"></span></a> </div>

    </div>
     
      <div class="layer" :class='{ layerClass: layerClass }'>
         <vue-typer v-if="isTyping" class="title-main" :repeat='0' pre-type-delay='500' text='Hello World! I was registered locally!'></vue-typer><br><br>
         <vue-typer v-if="isTyping" class="title-main" :repeat='0' pre-type-delay='3000' text='My skills are:'></vue-typer>
         

      </div>
    <div class="header-skills">
      
      <div class="header-skills-box">
        
      </div>
    </div>




  </header>
</template>
<script>
import { VueTyper } from 'vue-typer'


export default {
 components: {
    // ES6; property shorthand + Vue should automatically dasherize the key for us
    VueTyper


 },


       
  data() {
    return {
      layerClass: true,
      isTyping: false
    }
  },
  methods: {
    deleteLayer() {
      this.layerClass = !this.layerClass;
      this.isTyping = true
    },
   

  },
}
</script>


<style lang="scss" scoped>

header {
	width: 100%; min-height: 100vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.header-skills-box {
    display: flex;
    padding: 30px;
    align-items: center;

    div:first-child {
      margin-right: 30px;
    }
}

.vue-typer .custom.char.typed {
  color: #009688 !important;
}

.title-main {
  font-size: 55px;
  font-family: FuturaHeavy, "Helvetica Neue", Helvetica, sans-serif;

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
  animation: changeColor 1.5s .33s infinite;
}
.arrowBtn2 {
  top: 23px;
  animation: changeColor 1.5s .66s infinite;
}@keyframes changeColor {
  0% {opacity: 1}
  50% {opacity: .3;}
  100% {opacity: 1;}
}



.hero {
background-color: #5100ff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(360,720,377)'%3E%3Cstop offset='0' stop-color='%235100ff'/%3E%3Cstop offset='1' stop-color='%2300b9ff'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='300' height='250' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.05'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
-webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
}

.header-text {
  text-align:left;
  width: 50vw;
  display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
  // margin: 0 0 13rem 0;
  // padding:0 5rem;
}

// .arrow {
//   width: 30px;
//   height: 10px;
// }

h3 {
  color: white;
  text-shadow: 4px 4px 15px rgba(5, 5, 5, 0.5);
}

span.vue-typer {
      position: absolute;
    margin-top: 200px;
}

.layer {
width: 100vw;
    height: 100vh;
    position: absolute;
    right: 0;
    background: gray;
    transition: all .5s;
}

.layerClass {
  width: 0;
  transition: all .5s;
}

@media (max-width: 560px) {
	h1 {
		transform: scale(0.7);
	}
}

</style>
