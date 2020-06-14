<template>
  <main id="caseQuantyst" class="caseStudy">
    <CaseHero>
      <ul slot="headerRole">
        <li>
          <h5>Role</h5>
        </li>
        <li>
          <h5>Lead designer</h5>
        </li>
      </ul>

      <ul slot="headerDeliverables">
        <li>
          <h5>Deliverables</h5>
        </li>
        <li>
          <h5>Guidelines</h5>
        </li>
        <li>
          <h5>Mockups</h5>
        </li>
        <li>
          <h5>Prototype</h5>
        </li>
      </ul>
      <ul slot="headerDuration">
        <li>
          <h5>Duration</h5>
        </li>
        <li>
          <h5>5 months</h5>
        </li>
      </ul>
      <h3 slot="headerTitle">Portfolio</h3>
      <div slot="headerPic" class="h-pic"></div>
    </CaseHero>

    <Card class="light">
      <h3 slot="cardTitle">Brand</h3>
      <div slot="cardContent">
        <p>By now you should know that Quantyst is a data company. They do something to quantify something and it has to do with machine learning I think. With Quantyst, you can analyze the sentiment of social media posts. Designed to have a modern look and feel, it has a cool color scheme. Much like the cold, lifeless servers that holds its data.</p>
      </div>
      <Flickity slot="cardGallery" ref="flickity" :options="flickityOptions" class="gallery">
        <div class="item tablet">
          <img src="../assets/a4.jpg" alt="Illustration" width="1280" height="960">
          <div class="under-card">
            <p>I want to know more</p>
          </div>
        </div>
        <div class="item tablet">
          <img src="../assets/a5.jpg" alt="App Icon" width="1280" height="960">
          <div class="under-card">
            <p>I want to know more</p>
          </div>
        </div>
        <div class="item tablet">
          <img src="../assets/a6.jpg" alt="Colour and type" width="1280" height="960">
          <div class="under-card">
            <p @click="knowMore">I want to know more</p>
          </div>
        </div>
      </Flickity>
    </Card>

    <Card class="light">
      <h3 slot="cardTitle">Design</h3>
      <div slot="cardContent">
        <p>Why is Quantyst is a data company? Is that a rhetorical quantion? Something about machine learning models goes here so they can quantify the massive amounts of data on the internet. With Quantyst, you can analyze the sentiment of social media posts. Designed to have a modern look and feel, it has a cool color scheme. Much like the cold, lifeless servers that holds its data.</p>
      </div>
      <Flickity slot="cardGallery" ref="flickity" :options="flickityOptions" class="gallery">
        <figure class="item tablet">
          <img src="../assets/a1.jpg" alt="Quantyst Collection View" width="1280" height="960">
        </figure>
        <figure class="item tablet">
          <img src="../assets/a2.jpg" alt="Quantyst Artist View" width="1280" height="960">
        </figure>
        <figure class="item tablet">
          <img src="../assets/a3.jpg" alt="Quantyst Art View" width="1280" height="960">
        </figure>
      </Flickity>
    </Card>

    <article>I don't know about you, but I think it's pretty cool that Quantyst is a data company. They utilize machine learning models to quantify the massive amounts of data on the internet. With Quantyst, you can analyze the sentiment of social media posts. Designed to have a modern look and feel, it has a cool color scheme. Yeah yeah, cold, lifeless something something holds data. We understand.</article>

    <LinkGroup>
      <router-link to="/" slot="backLink" class="button">
        <span class="highlighter">Go back</span>
      </router-link>
      <a href="https://quantyst.com" slot="storeLink" class="button" target="_blank">
        <span class="highlighter">View Site</span>
        <svg width="9" height="14" viewBox="0 0 9 14">
          <path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"></path>
        </svg>
      </a>
    </LinkGroup>
  </main>
</template>

<script>
import CaseHero from "@/components/CaseHero.vue";
import Card from "@/components/Card.vue";
import LinkGroup from "@/components/LinkGroup.vue";
import Credits from "@/components/Credits.vue";
import Flickity from "@/components/Flickity.vue";

export default {
  mounted() {
    const navBar = document.getElementById("navigationBar");
    navBar.classList.remove("expanded");
  },
  data() {
    return {
      flickityOptions: {
        freeScroll: true,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: false,
        selectedAttraction: 0.032,
        friction: 0.28
      }
    };
  },
  components: {
    CaseHero,
    Card,
    LinkGroup,
    Credits,
    Flickity
  },
  computed: {
    knowMore() {
      console.log("tag");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.caseStudy {
  margin: 5rem 0 0 0;
}

.h-right {
  background-image: linear-gradient(to top, #fdcaf1 0%, #e6dee9 100%);
}

.h-pic {
  width: 1380px;
  height: 750px;
  background: url("../assets/quantyst-hero.jpg") no-repeat 0 0;
  background-size: contain;
}

.gallery::before {
  background-color: hsl(315, 90%, 90%);
  background-image: linear-gradient(
    340deg,
    hsl(315, 90%, 90%) 0%,
    hsl(280, 20%, 90%) 100%
  );
}

.tablet-video,
video {
  width: 682px;
  height: 512px;
}

.picture {
  width: 640px;
  height: 572px;
  padding: 30px;
  background-color: white;
}

.item {
  box-shadow: 0 15px 60px hsla(320, 50%, 40%, 0.35);
}

@import "../scss/cases";

@media (max-width: 680px) {
  .tablet-video,
  video {
    width: 512px;
    height: 384px;
  }
  .picture {
    width: 580px;
    height: 512px;
    padding: 0;
  }
}

@media (max-width: 560px) {
  .h-pic {
    margin-left: -18.5rem;
  }

  .tablet-video,
  video {
    width: 480px;
    height: 360px;
  }

  .picture {
    width: 464px;
    height: 410px;
  }
}

@media (max-width: 500px) {
  .tablet-video,
  video {
    width: 416px;
    height: 312px;
  }

  .picture {
    width: 406px;
    height: 358px;
  }
}

@media (max-width: 420px) {
  .tablet-video,
  video {
    width: 320px;
    height: 240px;
  }

  .picture {
    width: 290px;
    height: 256px;
  }
}

@media (max-width: 320px) {
  .tablet-video,
  video {
    width: 288px;
    height: 216px;
  }
}
</style>
