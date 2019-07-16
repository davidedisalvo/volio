<template>
  <div
    class="under-card"
    @mouseenter="fullHeight=true"
    @mouseleave="fullHeight=false"
    :class="{fullHeight : fullHeight}"
  >
    <h4>I want to know more</h4>
    <h5>{{infos.general}}</h5>
    <ul>
      <li>
        <span>TECHNOLOGY</span>
      </li>
      <li v-for="item in infos.technology">{{item}}</li>
    </ul>
    <a data-v-477bfa02 :href="link" target="_blank" class="button center" data-v-2398370e>
      <span data-v-477bfa02 class="highlighter">View the site</span>
      <svg data-v-477bfa02 width="9" height="14" viewBox="0 0 9 14">
        <path
          data-v-477bfa02
          stroke-width="1.8"
          d="M1.5 1.5L7 7l-5.5 5.5"
          fill="none"
          fill-rule="evenodd"
        ></path>
      </svg>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fullHeight: false
    };
  },
  props: {
    link: {
      type: String,
      required: true
    },
    infos: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.under-card {
  position: absolute;
  background: #1a1a1a;
  width: 100%;
  height: 250px;
  bottom: 0;
  padding-left: 30px;
  transform: translateY(220px);
  text-align: left;
  opacity: 0.9;
  transition: transform 1s ease-in-out;

  h4 {
    font-size: 16px;
    color: #ffbc05;
    padding: 7px 0;
    text-align: center;
  }

  ul {
    text-align: left;
    position: relative;
  }

  li {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    margin-left: 15px;
    font-family: Replica-Mono, "Helvetica Neue", Helvetica, sans-serif;

    span {
      color: #ffbc05;
    }

    &:after {
      width: 5px;
      height: 5px;
      position: absolute;
      background: white;
      border-radius: 20%;
      left: 0;
    }

    &:not(:first-child):after {
      content: "";
    }

    &:first-child {
      margin-bottom: 10px;
    }
  }
  .highlighter {
    margin-top: -10px;
    font-size: 14px;
  }

  ul,
  p {
    color: white;
  }
  h5 {
    margin-bottom: 30px;
    font-family: Replica-Mono, "Helvetica Neue", Helvetica, sans-serif;
  }

  .center {
    margin: 0 auto;
    margin-left: 50%;
    transform: translateX(-50%);
  }
}

.fullHeight {
  transform: translateY(0) !important;
  transition: transform 1s ease-in-out;
}
</style>


