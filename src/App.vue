<template>
  <div id="app">
    <nav v-if="showNav">
      <router-link to="/" class="logo">sans</router-link>
      <router-link to="/about" class="about-link">About</router-link>
      <router-link to="/work" class="work-link">Selected Work</router-link>
      <router-link to="/side-projects" class="side-projects-link">Side-Projects</router-link>
    </nav>
    <transition-page>
      <router-view></router-view>
    </transition-page>
  </div>
</template>

<script>
//import { gsap } from "gsap";
import TransitionPage from '@/views/TransitionPage.vue';

export default {
  data(){
    return {
      showNav: true
    }
  },
  components: {
    TransitionPage,
  },
}
</script>

<style lang="scss">
@import '~modern-css-reset/dist/reset.min.css';
@import '~@/assets/styles/mixins.scss';

// Fonts
@font-face {
  font-family: 'Morganite Black';
  font-style: normal;
  font-weight: 900;
  src: local('Morganite'), url('~@/assets/fonts/Morganite-Black.woff') format('woff');
}
@font-face {
  font-family: 'Monument Extended Regular';
  font-style: normal;
  font-weight: normal;
  src: local('Monument Extended'), url('~@/assets/fonts/MonumentExtended-Regular.woff') format('woff');
}

// Variables
@import '~@/assets/styles/variables.scss';

// Common
html, body{background:$dark;}
*{font-family:$font-text;}
a{text-decoration:none;cursor:pointer;}

// App
#app{min-height:100vh;width:100%;background:url('~@/assets/img/bg_site.jpg') repeat center center;@include image-2x('~@/assets/img/bg_site@2x.jpg', 1920px, 980px);color:$light;
  
  // Navigation
  nav{
    a{position:fixed;color:$yellow;text-transform:uppercase;font-size:14px;z-index:1000;transition:color .375s ease-in-out;
      &:hover{color:darken($yellow, 10%);}
      &.logo{top:$page-padding;left:$page-padding;font-size:33px;text-transform:lowercase;}
      &.about-link{bottom:$page-padding;left:$page-padding;}
      &.work-link{top:$page-padding;right:$page-padding;}
      &.side-projects-link{bottom:$page-padding;right:$page-padding;}
    }
  }

  // Page
  .page{width:100vw;height:100vh;padding:$page-padding;position:relative;}

}
</style>
