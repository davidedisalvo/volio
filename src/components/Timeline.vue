<template>
  <div class="timeline-c" data-aos="zoom-in-up">
    <div class="timeline">
      <div class="timeline-date">
        <span>2017</span>
      </div>
      <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div class="timeline-info">
          <h3>Digital accelerator course and Google Analytics individual qualification</h3>
          <p>Awards Level 2 Diploma in Skills for the Creative and Cultural Sector -Digital accelerator course-creative process</p>
        </div>
      </div>
    </div>

    <div class="timeline">
      <div class="timeline-date">
        <span>2015</span>
      </div>
      <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div class="timeline-info">
          <h3>Internship at Giona.net</h3>
          <P>Key responsibilities: Turn design pages and specific components into Html and Css, Analyzed UI for responsive layout for improved usability, Worked with senior developer to solve front-end and css issues, Optimized images for web.</P>
        </div>
      </div>
    </div>
    <div class="timeline">
      <div class="timeline-date">
        <span>2014</span>
      </div>
      <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div class="timeline-info">
          <h3>Bologna Business School</h3>
          <p>Degree in Management from the “Bologna Business School”, Bologna, Italy.</p>
          <p>Won the best student prize.</p>
        </div>
      </div>
    </div>
    <div class="timeline">
      <div class="timeline-date">
        <span>
          2010
          <br>&#8212;
          <br>2013
        </span>
      </div>
      <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div class="timeline-info">
          <h3>Master's Degree</h3>
          <P>Master’s Degree in Philosophy of language: University of Rome, La Sapienza (2010- 2013) (Final Mark: 110/110)</P>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@mixin bp($point) {
  @if $point==full {
    @media (min-width: 960px) {
      @content;
    }
  } @else if $point==medium {
    @media (min-width: 768px) {
      @content;
    }
  } @else if $point==small {
    @media (min-width: 500px) {
      @content;
    }
  }
}

.content h3 {
  width: 75%;
  margin-left: 15px;
  text-align: left;
  font-family: Replica-Mono, "Helvetica Neue", Helvetica, sans-serif;
}

.content p {
  @media only screen and (max-width: 470px) {
    margin-left: 0px;
  }
}

.timeline {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 2.5rem; //change
  &:before {
    display: inline-block;
    position: absolute;
    content: "";
    top: 0; //change
    left: 0;
    height: 1.5rem; //change
    width: 1.5rem; //change
    border: 2px solid #1a1a1a;
    border-radius: 50%;
    background: #ffbc05;
    z-index: 1;
  }
  &:after {
    content: "";
    border-left: 2px solid #1a1a1a;
    //height: calc(100% + 4rem);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0.7rem; //changable
    z-index: 0;
  }
  &:last-child {
    &:after {
      content: none;
    }
  }
  h2 {
    margin: 0;
    padding: 0;
    color: white;
    font-family: Replica-Mono, "Helvetica Neue", Helvetica, sans-serif;
  }
  .timeline-date {
    padding-right: 3rem; //change
    span {
      display: inline-block;
      font-weight: 600;
      color: black;
      background: white;
      padding: 0.2rem 0.4rem;
      margin: -4px 0 1rem 0;
      font-family: Replica-Mono, "Helvetica Neue", Helvetica, sans-serif;
    }
  }
  .timeline-info {
    flex: 1;
    margin: 0 0 2rem 0;

    h3 {
      color: #1a1a1a;
      font-family: Replica-Mono, "Helvetica Neue", Helvetica, sans-serif;
    }
  }
  @include bp(medium) {
    flex-direction: row;
    padding: 0;
    &:before {
      content: " ";
      left: 4.4rem; //change
    }
    &:after {
      content: " ";
      left: 5.05rem; //change
    }
  }
}
</style>

