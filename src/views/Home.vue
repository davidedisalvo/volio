<template>
  <main id="home">
    <Hero />

    <Card id="quantyst" class="light card-mg">
      <h3 slot="cardTitle">Portfolio</h3>
      <div slot="cardContent">
        <p>
          Here's how I like to spend my free time.
          <br />Some application that I've recently built to improve my Vue and React skills:
        </p>
      </div>
      <div slot="cardContent"></div>
      <Flickity slot="cardGallery" ref="flickity" :options="flickityOptions" class="gallery">
        <div class="item portfolio tablet">
          <div class="inner-box">
            <h2>My first MERN app</h2>
            <img
              src="../assets/mern-api-repo.png"
              alt="Quantyst Home Page"
              width="1280"
              height="960"
            />
          </div>
          <UnderCard :infos="infos[0]" link="https://books-face.netlify.app/" />
        </div>
        <div class="item portfolio tablet">
          <div class="inner-box">
            <h2>Sailboat store website</h2>
            <img
              src="../assets/sailboat-repo.png"
              alt="Quantyst Home Page"
              width="1280"
              height="960"
            />
          </div>
          <UnderCard :infos="infos[1]" link="https://boat-on-sale.netlify.com/" />
        </div>
        <!-- <div class="item portfolio tablet">
          <div class="inner-box">
            <h2>Covid-19 tracker</h2>
            <img src="../assets/covid-repo.png" alt="Quantyst Home Page" width="1280" height="960" />
          </div>
          <UnderCard :infos="infos[1]" link="https://tracker-covid19.netlify.com/" />
        </div>-->
        <div class="item portfolio tablet">
          <div class="inner-box">
            <h2>Front end for ecommerce</h2>
            <img
              src="../assets/ecommerce-repo.png"
              alt="Quantyst Home Page"
              width="1280"
              height="960"
            />
          </div>
          <UnderCard :infos="infos[3]" link="https://ecommerce-example.netlify.com/" />
        </div>
        <div class="item portfolio tablet">
          <div class="inner-box">
            <h2>Recipes site with react and redux</h2>
            <img
              src="../assets/recipes-repo.png"
              alt="Quantyst Home Page"
              width="1280"
              height="960"
            />
          </div>
          <UnderCard :infos="infos[4]" link="https://react-recipe-site.netlify.app/" />
        </div>
        <div class="item portfolio tablet">
          <div class="inner-box">
            <h2>English dictionary with react</h2>
            <img
              src="../assets/dictionary-repo.png"
              alt="Quantyst Home Page"
              width="1280"
              height="960"
            />
          </div>
          <UnderCard :infos="infos[5]" link="https://dictionary-react.netlify.app" />
        </div>
        <!-- <div class="item portfolio tablet">
          <div class="inner-box">
            <h2>Vue application with New York Time Api</h2>
            <img src="../assets/nyt-repo.png" alt="Quantyst Home Page" width="1280" height="960" />
          </div>
          <UnderCard :infos="infos[5]" link="https://gallant-nobel-68373c.netlify.com/" />
        </div>-->
        <div class="item portfolio tablet">
          <div class="inner-box">
            <h2>Vue application with Weather Api</h2>
            <img src="../assets/weather-repo.png" alt="Quantyst Info" width="1280" height="960" />
          </div>
          <UnderCard :infos="infos[7]" link="https://elastic-borg-19684d.netlify.com/" />
        </div>
        <!-- <div class="item portfolio tablet">
          <div class="inner-box">
            <h2>Vue application with Nasa Api and combo filter</h2>
            <img src="../assets/nasa-repo.png" alt="Quantyst Info" width="1280" height="960" />
          </div>
          <UnderCard :infos="infos[7]" link="https://kind-euler-997b22.netlify.com/" />
        </div>-->
        <div class="item portfolio tablet">
          <div class="inner-box">
            <h2>Vanilla Javascript application</h2>
            <img src="../assets/vanilla-repo.png" alt="Quantyst Contact" width="1280" height="960" />
          </div>

          <UnderCard :infos="infos[8]" link="http://mywork.altervista.org/budgety/index.html" />
        </div>
      </Flickity>
    </Card>

    <Card id="mirage" class="dark card-mg desktop-visible">
      <h3 slot="cardTitle">Work experience</h3>
      <div slot="cardContent">
        <p>I am a Front End developer with industry experience building websites and web applications. I've got experience in Javascript, Wordpress and SVG animation. I also have experience working with Vue and I'd like to work with React and Vue in the near future.</p>
      </div>

      <Flickity slot="cardGallery" ref="flickity" :options="flickityOptions" class="gallery">
        <div class="item work phone">
          <div class="inner">
            <h2>December 2019 - now</h2>
            <h3>Front end developer</h3>
            <h4>AKA UK</h4>
            <h5>Technology used:</h5>
            <ul>
              <li>Javascript</li>
              <li>Jquery</li>
              <li>Wordpress</li>
              <li>Wordpress API</li>
              <li>VUE</li>
              <li>VUEX</li>
              <li>Docker</li>
              <li>SCSS</li>
            </ul>
            <h5>Main responsabilities:</h5>
            <ul>
              <li>Set up Wordpress environment with twig template and ACF</li>
              <li>
                Front end built (WORDPRESS API - VUE)
                <a
                  target="_blank"
                  href="https://atg.co.uk/"
                >https://atg.co.uk/</a>
              </li>
              <li>Set up specific functionality with javascript, jquery and Vue</li>
            </ul>
          </div>
        </div>
        <div class="item work phone">
          <div class="inner">
            <h2>September 2018 - November 2019</h2>
            <h3>Front end developer</h3>
            <h4>Pegasus - Inspiring Healthy Decisions</h4>
            <h5>Technology used:</h5>
            <ul>
              <li>Javascript</li>
              <li>Jquery</li>
              <li>Wordpress</li>
              <li>Foundation</li>
              <li>Bootstrap</li>
              <li>GSAP</li>
              <li>SVG</li>
              <li>SCSS</li>
            </ul>
            <h5>Main responsabilities:</h5>
            <ul>
              <li>Turn design pages and specific components into Html and CSS</li>
              <li>Set up functionality using Javascript and Jquery</li>
              <li>Set up Wordpress environment: ACF, Template and Components</li>
            </ul>
          </div>
        </div>
        <div class="item work phone">
          <div class="inner">
            <h2>June 2018-September 2018</h2>
            <h3>Front end developer</h3>
            <h4>Bought by many</h4>
            <h5>Technology used:</h5>
            <ul>
              <li>Javascript</li>
              <li>Vue</li>
              <li>SCSS</li>
              <li>VUEX</li>
              <li>GIT</li>
            </ul>
            <h5>Main responsabilities:</h5>
            <ul>
              <li>Update company styleguide</li>
              <li>Fix bugs and IE supporting</li>
              <li>Solve front-end and css issues</li>
            </ul>
          </div>
        </div>
        <div class="item work phone">
          <div class="inner">
            <h2>
              May
              2018
            </h2>
            <h3>Internship Front end developer</h3>
            <h4>Naked idea</h4>
            <h5>Technology used:</h5>
            <ul>
              <li>Javascript</li>
              <li>Vue</li>
              <li>SCSS</li>
              <li>VUEX</li>
              <li>NUXT</li>
            </ul>
            <h5>Main responsabilities:</h5>
            <ul>
              <li>Worked with senior front-end to fix bugs and turn css grid into flexbox for IE support</li>
              <li>Creation of new page in the company website</li>
            </ul>
          </div>
        </div>
      </Flickity>
    </Card>

    <Card id="mirage" class="dark card-mg mobile-visible">
      <h3 slot="cardTitle">Work experience</h3>
      <div slot="cardContent">
        <p>I am a Junior Front End developer with industry experience building websites and web applications. I've got experience in Javascript, Wordpress and SVG animation. I also have experience working with Vue and I'd like to work with React and Vue in the near future.</p>
        <div class="item work phone">
          <div class="inner">
            <h2>September 2018-now</h2>
            <h3>Front end developer</h3>
            <h4>Pegasus - Inspiring Healthy Decisions</h4>
            <h5>Technology used:</h5>
            <ul>
              <li>Javascript</li>
              <li>Jquery</li>
              <li>Wordpress</li>
              <li>Foundation</li>
              <li>Bootstrap</li>
              <li>GSAP</li>
              <li>SVG</li>
              <li>SCSS</li>
            </ul>
            <h5>Main responsabilities:</h5>
            <ul>
              <li>Turn design pages and specific components into Html and CSS</li>
              <li>Set up functionality using Javascript and Jquery</li>
              <li>Set up Wordpress environment: ACF, Template and Components</li>
            </ul>
          </div>
        </div>
        <div class="item work phone">
          <div class="inner">
            <h2>June 2018-September 2018</h2>
            <h3>Front end developer</h3>
            <h4>Bought by many</h4>
            <h5>Technology used:</h5>
            <ul>
              <li>Javascript</li>
              <li>Vue</li>
              <li>SCSS</li>
              <li>VUEX</li>
              <li>GIT</li>
            </ul>
            <h5>Main responsabilities:</h5>
            <ul>
              <li>Update company styleguide</li>
              <li>Fix bugs and IE supporting</li>
              <li>Solve front-end and css issues</li>
            </ul>
          </div>
        </div>
        <div class="item work phone">
          <div class="inner">
            <h2>
              May
              2018
            </h2>
            <h3>Internship Front end developer</h3>
            <h4>Naked idea</h4>
            <h5>Technology used:</h5>
            <ul>
              <li>Javascript</li>
              <li>Vue</li>
              <li>SCSS</li>
              <li>VUEX</li>
              <li>NUXT</li>
            </ul>
            <h5>Main responsabilities:</h5>
            <ul>
              <li>Worked with senior front-end to fix bugs and turn css grid into flexbox for IE support</li>
              <li>Creation of new page in the company website</li>
            </ul>
          </div>
        </div>
      </div>
    </Card>

    <Card id="explain" class="light">
      <div slot="cardContent">
        <Timeline />
      </div>
      <h3 slot="cardTitle">Education</h3>
    </Card>
  </main>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Card from "@/components/Card.vue";
import Flickity from "@/components/Flickity.vue";
import UnderCard from "@/components/UnderCard.vue";
import Timeline from "@/components/Timeline.vue";

export default {
  mounted() {
    const navBar = document.getElementById("navigationBar");
    navBar.className += " expanded";
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
      },
      fullHeight: false,
      infos: [
        {
          general: "Full stack app with express react and mongodb",
          technology: [
            "React-hooks",
            "mongoose",
            "scss",
            "google-book-api",
            "express"
          ]
        },
        {
          general: "Playing with nuxt and wordpress API",
          technology: [
            "Nuxt",
            "Vuex for state management",
            "Wordpress API for backend",
            "Vuetify",
            "Scrolzzz"
          ]
        },
        {
          general: "Covid-19 tracker",
          technology: [
            "Vuex for state management",
            "Vue2-leaflet",
            "Axios for API call",
            "Scss",
            "Vue-Bootstrap"
          ]
        },
        {
          general: "Ecommerce with cart and form implemented",
          technology: [
            "Vuex for state management",
            "Css animation",
            "Scss",
            "Vuetify"
          ]
        },
        {
          general: "React application with Redux",
          technology: ["Redux", "Axios for API call", "Scss", "CSS modules"]
        },
        {
          general: "My first React application",
          technology: [
            "React hooks",
            "Axios for API call",
            "Scss",
            "CSS modules"
          ]
        },
        {
          general: "Web app made with Vue and New york time API",
          technology: [
            "Vuex for state management",
            "Axios for API call",
            "Scss",
            "Vuetify"
          ]
        },
        {
          general: "Web app made with Vue and Weather API",
          technology: [
            "Vuex for state management",
            "Axios for API call",
            "Scss",
            "Bootstrap"
          ]
        },
        {
          general: "Web app made with Vue and Nasa API",
          technology: [
            "Vuex for state management",
            "Axios for API call",
            "Scss",
            "Vuetify"
          ]
        },
        {
          general: "My first javascript application",
          technology: ["Vanilla javascript", "css", "html5"]
        }
      ]
    };
  },
  components: {
    Hero,
    Card,
    Flickity,
    UnderCard,
    Timeline
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.inner {
  background: #1a1a1a;
  text-align: center;
  padding: 20px;
  height: 690px;
  h2 {
    text-align: left;
    color: $yellow;
    font-size: 14px;
  }

  h4 {
    margin-bottom: 50px;
  }

  h5 {
    margin-bottom: 20px;
    color: $yellow;
  }
  ul {
    margin-bottom: 40px;
    max-width: 30vw;
  }

  li {
    color: #98b3b3;
    text-align: left;
    margin-bottom: 10px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 15px;

    &:after {
      content: "";
      width: 8px;
      height: 8px;
      position: absolute;
      background: #98b3b3;
      border-radius: 50%;
      left: 0;
    }
  }

  h5 {
    text-align: left;
  }
}

.portfolio {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1a1a1a;

  .inner-box {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h2 {
    text-align: center;
    margin-bottom: 50px;
    font-family: FuturaHeavy, "Helvetica Neue", Helvetica, sans-serif;

    padding: 0 20px;
    @media only screen and (max-width: 560px) {
      font-size: 20px;
    }
  }
  img {
    width: 50%;
    transition: all 0.4s;
  }
}
.item {
  h2 {
    text-align: center;
  }
  img {
    width: 50%;
    transition: all 0.4s;
  }
}
.item:hover {
  @media (max-width: 560px) {
    h2 {
      opacity: 0;
    }
  }
  img {
    filter: grayscale(1.4);
    transform: scale(1.2);
    transition: all 0.4s;
  }
  .under-card {
    transform: translateY(0) !important;
    transition: transform 1s ease-in-out;

    @media (max-width: 560px) {
      height: 100%;
    }
  }
}
.content p span {
  color: $yellow;
  margin-right: 1rem;
}

.content h3 {
  margin-right: 20px;
}

.buttons {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;
}

.card-mg {
  margin: -100px 0 15vw 0;
}

ul {
  max-width: 20vw;
  font-size: 0;
}

#quantyst .gallery::before {
  background-color: hsl(315, 90%, 90%);
  background-image: linear-gradient(
    340deg,
    hsl(315, 90%, 90%) 0%,
    hsl(280, 20%, 90%) 100%
  );
}

#quantyst .item {
  box-shadow: 0 15px 60px hsla(320, 50%, 40%, 0.35);
}

#mirage .gallery::before {
  background-color: hsl(190, 55%, 80%);
  background-image: linear-gradient(
    340deg,
    hsl(200, 75%, 70%) 0%,
    hsl(180, 55%, 80%) 100%
  );
}

#mirage .item {
  box-shadow: 0 15px 60px hsla(190, 70%, 0%, 0.4);
}

#explain .gallery::before {
  background-color: hsl(220, 40%, 70%);
  background-image: linear-gradient(
    5deg,
    hsl(220, 40%, 70%) 0%,
    hsl(145, 25%, 90%) 100%
  );
}

#explain .item {
  box-shadow: 0 15px 60px hsla(220, 60%, 30%, 0.35);
}

#explain .content h3 {
  margin-left: 8%;
  width: 17%;
  min-width: 232px;
}

@media (min-width: 1600px) {
  #explain .content h3 {
    margin-left: 10%;
    width: 15%;
  }
}

@media (max-width: 960px) {
  #explain .content h3 {
    margin-left: 0;
    width: 100%;
  }

  ul {
    margin: 1.5rem 0 1rem 0;
    max-width: 100%;
  }

  ul li {
    display: inline-block;
    margin-right: 2.5vw;
  }
}

.mobile-visible {
  display: none;
}

@media (max-width: 560px) {
  .buttons {
    flex-direction: column;
  }

  .mobile-visible {
    display: block;

    .item {
      width: 100%;
      height: 600px;
    }

    .inner {
      width: 100%;

      ul {
        max-width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
    }
  }

  .desktop-visible {
    display: none;
  }
}
</style>
