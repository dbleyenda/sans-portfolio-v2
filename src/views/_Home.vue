<template>
  <div class="page home" data-page="home" :data-selected="selectedSlide">
    
    <!-- TEXTS -->
    <div class="texts">

      <!-- KEYOCOIN -->
      <div class="item" data-position="1">
        <div class="text">
          <div data-depth="0.1">
            <h2>KeyoCoin</h2>
            <p class="highlight"><span>Universal</span><br><span>Travel Rewards</span><br><span>Cryptocurrency</span></p>
          </div>
        </div>
      </div>

      <!-- IMPACTPASS -->
      <div class="item" data-position="2">
        <div class="text">
          <div data-depth="0.1">
            <h2>ImpactPass</h2>
            <p class="highlight"><span>Social</span><br><span>Impact</span><br><span>Platform</span></p>
          </div>
        </div>
      </div>

      <!-- KEYOPASS -->
      <div class="item" data-position="3">
        <div class="text">
          <div data-depth="0.1">
            <h2>KeyoPass</h2>
            <p class="highlight"><span>Concierge</span><br><span>Travel</span><br><span>App</span></p>
          </div>
        </div>
      </div>

      <!-- VACATION VOUCHER -->
      <div class="item" data-position="4">
        <div class="text">
          <div data-depth="0.1">
            <h2>Vacation Voucher</h2>
            <p class="highlight"><span>Argentine</span><br><span>Ministry of Tourism</span><br><span>COVID–19 Initiative</span></p>
          </div>
        </div>
      </div>

      <!-- JUNAR -->
      <div class="item" data-position="5">
        <div class="text">
          <div data-depth="0.1">
            <h2>Junar</h2>
            <p class="highlight"><span>Data</span><br><span>Platform</span></p>
          </div>
        </div>
      </div>

    </div>

    <!-- IMAGES -->
    <div class="images">

      <!-- KEYOCOIN -->
      <div class="item" data-position="1" data-relative-input="true">
        <div data-depth="0.1" class="img bg">  
          <img src="~@/assets/img/im_projects-01-bg.jpg" scrset="~@/assets/img/im_projects-01-bg.jpg 1x, ~@/assets/img/im_projects-01-bg@2x.jpg 2x" alt="KeyoCoin - Universal Travel Rewards Cryptocurrency" @mouseenter="stopTimer" @mouseleave="startTimer" @click="openProject( 'keyocoin')">
        </div>
        <div data-depth="0.2" class="img bg-behind">
          <img src="~@/assets/img/im_projects-01-behind.jpg" scrset="~@/assets/img/im_projects-01-behind.jpg 1x, ~@/assets/img/im_projects-01-behind@2x.jpg 2x" alt="">
        </div>
      </div>

      <!-- IMPACTPASS -->
      <div class="item" data-position="2">
        <div data-depth="0.1" class="img bg">        
          <img src="~@/assets/img/im_projects-02-bg.jpg" scrset="~@/assets/img/im_projects-02-bg.jpg 1x, ~@/assets/img/im_projects-02-bg@2x.jpg 2x" alt="ImpactPass - Social Impact Platform" @mouseenter="stopTimer" @mouseleave="startTimer" @click="openProject('impactpass')">
        </div>
        <div data-depth="0.4" class="img on-top a">
          <img src="~@/assets/img/im_projects-02-A.png" scrset="~@/assets/img/im_projects-02-A.png 1x, ~@/assets/img/im_projects-02-A@2x.png 2x" alt="">
        </div>
        <div data-depth="0.3" class="img on-top b">
          <img src="~@/assets/img/im_projects-02-B.png" scrset="~@/assets/img/im_projects-02-B.png 1x, ~@/assets/img/im_projects-02-B@2x.png 2x" alt="">
        </div>
        <div data-depth="0.2" class="img on-top c">
          <img src="~@/assets/img/im_projects-02-C.png" scrset="~@/assets/img/im_projects-02-C.png 1x, ~@/assets/img/im_projects-02-C@2x.png 2x" alt="">
        </div>
      </div>

      <!-- KEYOPASS -->
      <div class="item" data-position="3">
        <div data-depth="0.1" class="img bg">
          <img src="~@/assets/img/im_projects-03-bg.jpg" scrset="~@/assets/img/im_projects-03-bg.jpg 1x, ~@/assets/img/im_projects-03-bg@2x.jpg 2x" alt="KeyoPass – Concierge Travel App" @mouseenter="stopTimer" @mouseleave="startTimer" @click="openProject('keyopass')">
        </div>
        <div data-depth="0.3" class="img on-top a">
          <img src="~@/assets/img/im_projects-03-A.png" scrset="~@/assets/img/im_projects-03-A.png 1x, ~@/assets/img/im_projects-03-A@2x.png 2x" alt="">
        </div>
        <div data-depth="0.2" class="img on-top b">
          <img src="~@/assets/img/im_projects-03-B.png" scrset="~@/assets/img/im_projects-03-B.png 1x, ~@/assets/img/im_projects-03-B@2x.png 2x" alt="">
        </div>
      </div>

      <!-- VACATION VOUCHER -->
      <div class="item" data-position="4">
        <div data-depth="0.1" class="img bg">
          <img class="bg" src="~@/assets/img/im_projects-04-bg.jpg" scrset="~@/assets/img/im_projects-04-bg.jpg 1x, ~@/assets/img/im_projects-04-bg@2x.jpg 2x" alt="Vacation Voucher - Argentine Ministry of Tourism COVID–19 Initiative" @mouseenter="stopTimer" @mouseleave="startTimer" @click="openProject('vacation-voucher')">
        </div>
        <div data-depth="0.3" class="img on-top a">
          <img src="~@/assets/img/im_projects-04-A.png" scrset="~@/assets/img/im_projects-04-A.png 1x, ~@/assets/img/im_projects-04-A@2x.png 2x" alt="">
        </div>
        <div data-depth="0.2" class="img on-top b">
          <img src="~@/assets/img/im_projects-04-B.png" scrset="~@/assets/img/im_projects-04-B.png 1x, ~@/assets/img/im_projects-04-B@2x.png 2x" alt="">
        </div>
      </div>

      <!-- JUNAR -->
      <div class="item" data-position="5">
        <div data-depth="0.1" class="img bg" @mouseenter="stopTimer" @mouseleave="startTimer" @click="openProject('junar')">
          <img src="~@/assets/img/im_projects-05-bg.jpg" scrset="~@/assets/img/
        im_projects-05-bg.jpg 1x, ~@/assets/img/im_projects-05-bg@2x.jpg 2x" alt="Junar - Data Platform">
        </div>
        <div data-depth="0.2" class="img on-top a">
          <img src="~@/assets/img/im_projects-05-A.png" scrset="~@/assets/img/im_projects-05-A.png 1x, ~@/assets/img/im_projects-05-A@2x.png 2x" alt="">
        </div>
      </div>

    </div>

    <!-- PAGINATION -->
    <ul class="pagination">
      <li data-position="1" @click="spinTo"><span>1</span></li>
      <li data-position="2" @click="spinTo"><span>2</span></li>
      <li data-position="3" @click="spinTo"><span>3</span></li>
      <li data-position="4" @click="spinTo"><span>4</span></li>
      <li data-position="5" @click="spinTo"><span>5</span></li>
    </ul>

  </div>
</template>

<script>
// @ is an alias to /src
import Parallax from 'parallax-js';
import { gsap } from "gsap";

export default {
  name: 'Home',
  data(){
    return {
      selectedSlide: "1",
      maxSlides: 5,
      timer: null,
      parallaxInstances: [],
    }
  },
  methods: {
    spinTo(event){
      this.stopTimer();
      this.selectedSlide = event.target.dataset.position;
      this.startTimer();
    }, 
    startTimer(){
      this.timer = setInterval(() => {
        var spinTo = (parseInt(this.selectedSlide) + 1);
        if( spinTo > this.maxSlides){
          this.selectedSlide = "1";
        }else{
          this.selectedSlide = spinTo.toString();
        }
      }, 5000);
    },
    stopTimer(){
      clearInterval(this.timer);
    },
    openProject(slug){
      this.$router.push({ path: `/work/${slug}` });
    },
    initParallax(){
      
      // Project Images - Parallax
      let projectsImages = document.getElementsByClassName('images')[0].querySelectorAll('[data-position]');
      projectsImages.forEach(image => {
        var instance = new Parallax(image);
        this.parallaxInstances.push(instance);
      });

      // Project Texts - Parallax
      let projectsTexts = document.getElementsByClassName('texts')[0].querySelectorAll('[data-position]');
      projectsTexts.forEach(text => {
        var instance = new Parallax(text.querySelectorAll('.text')[0]);
        this.parallaxInstances.push(instance);
      });

    },
    destroyParallax(){
      this.parallaxInstances.forEach(instance => instance.destroy());
      this.parallaxInstances = [];
    },
    animateIn(){
      
      // Texts
      document.getElementsByClassName('texts')[0].classList.add('loaded');

      // Images
      let images = document.getElementsByClassName('images')[0];
      images.classList.add('loaded');
      images.getElementsByClassName('item').forEach(el => el.style = "transition:transform .375s ease-in-out, opacity .375s ease-in-out;");

    },
    animateOut(){

      // Texts
      document.getElementsByClassName('texts')[0].classList.remove('loaded');

      // AnimateOut
      let images = document.getElementsByClassName('images')[0];
      images.classList.remove('loaded');
      images.getElementsByClassName('item').forEach(el => el.style = "");

    }
  },
  mounted(){

    // Init Parallax
    this.initParallax();
    
    // Timer for spin to next project
    this.startTimer();

    // AnimateIn - need to be called last
    this.animateIn();    

  }, 
  beforeDestroyed(){

    // Destroy Parallax
    this.destroyParallax();

  },
  beforeRouteLeave(to, from, next) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.

    this.animateOut();

    // Animation Delay
    setTimeout(function(){
      next();
    }, 500);

  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';
@import '~@/assets/styles/mixins.scss';

// Texts
.texts{padding:$page-padding;position:fixed;top:0;left:0;right:0;bottom:0;z-index:600;display:flex;align-items:flex-end;pointer-events:none;

  // Item
  .item{position:absolute;display:flex;padding-left:calc(#{$col-w}*2);width:7500px;transform-origin:right center;transition:transform .375s ease-in-out, opacity .375s ease-in-out;
    .text{
      & > div{display:flex !important;align-items:flex-end;}
    }
    h2{font-family:$font-titles;@include text-stroke(1px transparentize($light, .9));color:transparentize($light, 1);z-index:500;margin-right:30px;font-size:250px;white-space:nowrap;text-transform:uppercase;transition:text-stroke .375s ease-in-out, color .375s ease-in-out;}
    .highlight{opacity:0;transition:opacity .500s ease-in-out;display:inline-block;flex-direction:column;margin-bottom:124px;
      span{display:inline-block;background:$yellow;padding:5px 10px;color:$dark;text-transform:uppercase;font-size:30px;line-height:30px;box-shadow:0 4px 4px 0 transparentize($dark,.8);}
    }

  }

}

// Images
.images{transform:rotate(-1deg);display:flex;height:100%;position:relative;
  .item{opacity:0;transition:opacity .750s ease-in-out;position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:flex-end;
    .img{width:100%;height:100%;display:flex !important;align-items:center;justify-content:flex-end;padding-right:calc(#{$col-w}*1);position:absolute;
      &.bg{z-index:50;
        img{box-shadow:0 0 35px 0 transparentize($dark,.6);cursor:pointer;}
      }
      &.on-top{z-index:100;pointer-events:none;}
      &.bg-behind{z-index:25;pointer-events:none;}
    }

    // Position 1
    &[data-position="1"]{
      .img{
        &.bg-behind{z-index:-1;
          img{transform:rotate(2deg) translate(calc(#{$col-w}*0.5), calc(#{$col-h}*1));box-shadow:0 0 35px 0 transparentize($blue,.7);}
        }
      }
    }

    // Position 2
    &[data-position="2"]{
      .img.on-top{
        &.a{z-index:300;
          img{transform:rotate(1deg);}
        }
        &.b{z-index:200;}
        &.c{z-index:100;
          img{transform:rotate(1deg);}
        }
      }
    }

    // Position 3
    &[data-position="3"]{
      .img.on-top{align-items:center;justify-content:flex-end;
        &.a{z-index:300;
          img{right:calc(#{$col-w}*2.3);bottom:calc(#{$col-h}*2);transform:rotate(1deg);position:relative;}
        }
        &.b{z-index:200;}
      }
    }

    // Position 4
    &[data-position="4"]{
      .img.on-top{
        &.a{z-index:300;}
        &.b{z-index:200;}
      }
    }

    // Position 5
    &[data-position="5"]{
      .img.on-top{
        &.a{z-index:300;
          img{transform:rotate(1deg) translate(-7%, 1%);margin-left:-100px;}
        }
      }
    }

  }

}

// Pagination
.pagination{position:fixed;z-index:800;right:$page-padding;top:$page-padding;bottom:$page-padding;display:flex;flex-direction:column;justify-content:center;list-style:none;margin:0;padding:0;
  li{padding:10px;margin-right:-10px;cursor:pointer;
    span{@include circle-img(12px);display:block;background:$yellow;opacity:.2;text-indent:10000px;transform:scale(.666);transition:transform .375s ease-in-out, opacity .375s ease-in-out;pointer-events:none;}
    &:hover{
      span{transform:scale(1);opacity:.5;}
    }
  }
}

// Spinner configuration
.page{max-width:100vw;overflow:hidden;

  // Position 1
  &[data-selected="1"]{
    .texts .item[data-position="1"]{
      h2{@include text-stroke(0);color:$light;text-shadow:0 0 35px transparentize($dark,.6);}
      .highlight{opacity:1;}
    }
    .images .item[data-position="1"]{opacity:1;pointer-events:auto !important;}
    .pagination li[data-position="1"] span{transform:scale(1);opacity:.8;}

    // Rotation
    .texts .item[data-position="3"]{transform:rotate(9deg);}
    .texts .item[data-position="4"]{transform:rotate(6deg);}
    .texts .item[data-position="5"]{transform:rotate(3deg);}
    .texts .item[data-position="1"]{transform:rotate(0deg);}
    .texts .item[data-position="2"]{transform:rotate(-3deg);}
    
  }

  // Position 2
  &[data-selected="2"]{
    .texts .item[data-position="2"]{
      h2{@include text-stroke(0);color:$light;text-shadow:0 0 35px transparentize($dark,.6);}
      .highlight{opacity:1;}
    }
    .images .item[data-position="2"]{opacity:1;pointer-events:auto !important;}
    .pagination li[data-position="2"] span{transform:scale(1);opacity:.8;}

    // Rotation
    .texts .item[data-position="4"]{transform:rotate(9deg);}
    .texts .item[data-position="5"]{transform:rotate(6deg);}
    .texts .item[data-position="1"]{transform:rotate(3deg);}
    .texts .item[data-position="2"]{transform:rotate(0deg);}
    .texts .item[data-position="3"]{transform:rotate(-3deg);}
    
  }

  // Position 3
  &[data-selected="3"]{
    .texts .item[data-position="3"]{
      h2{@include text-stroke(0);color:$light;text-shadow:0 0 35px transparentize($dark,.6);}
      .highlight{opacity:1;}
    }
    .images .item[data-position="3"]{opacity:1;pointer-events:auto !important;}
    .pagination li[data-position="3"] span{transform:scale(1);opacity:.8;}

    // Rotation
    .texts .item[data-position="5"]{transform:rotate(9deg);}
    .texts .item[data-position="1"]{transform:rotate(6deg);}
    .texts .item[data-position="2"]{transform:rotate(3deg);}
    .texts .item[data-position="3"]{transform:rotate(0deg);}
    .texts .item[data-position="4"]{transform:rotate(-3deg);}

  }

  // Position 4
  &[data-selected="4"]{
    .texts .item[data-position="4"]{
      h2{@include text-stroke(0);color:$light;text-shadow:0 0 35px transparentize($dark,.6);}
      .highlight{opacity:1;}
    }
    .images .item[data-position="4"]{opacity:1;pointer-events:auto !important;}
    .pagination li[data-position="4"] span{transform:scale(1);opacity:.8;}

    // Rotation
    .texts .item[data-position="1"]{transform:rotate(9deg);}
    .texts .item[data-position="2"]{transform:rotate(6deg);}
    .texts .item[data-position="3"]{transform:rotate(3deg);}
    .texts .item[data-position="4"]{transform:rotate(0deg);}
    .texts .item[data-position="5"]{transform:rotate(-3deg);}    

  }

  // Position 5
  &[data-selected="5"]{
    .texts .item[data-position="5"]{
      h2{@include text-stroke(0);color:$light;text-shadow:0 0 35px transparentize($dark,.6);}
      .highlight{opacity:1;}
    }
    .images .item[data-position="5"]{opacity:1;pointer-events:auto !important;}
    .pagination li[data-position="5"] span{transform:scale(1);opacity:.8;}

    // Rotation
    .texts .item[data-position="2"]{transform:rotate(9deg);}
    .texts .item[data-position="3"]{transform:rotate(6deg);}
    .texts .item[data-position="4"]{transform:rotate(3deg);}
    .texts .item[data-position="5"]{transform:rotate(0deg);}
    .texts .item[data-position="1"]{transform:rotate(-3deg);}

  }

}

// Animations
.page{perspective:600px;

  // Common
  .texts{
    
    // Initial State
    opacity:0;transition:opacity .375s ease-in-out;
    .item{transition-duration:.750s;transition-timing-function:ease-out;}

    // Loaded
    &.loaded{opacity:1;}
    
  }

  // Position 1
  &[data-selected="1"] .texts{
    .item[data-position="4"]{transform:rotate(0deg);}
    .item[data-position="5"]{transform:rotate(-3deg);}
    .item[data-position="1"]{transform:rotate(-6deg);}
    .item[data-position="2"]{transform:rotate(-9deg);}
    .item[data-position="3"]{transform:rotate(-12deg);}
    
    // Loaded
    &.loaded{
      .item[data-position="4"]{transform:rotate(6deg);}
      .item[data-position="5"]{transform:rotate(3deg);}
      .item[data-position="1"]{transform:rotate(0deg);}
      .item[data-position="2"]{transform:rotate(-3deg);}
      .item[data-position="3"]{transform:rotate(-6deg);}
    }
  }

  // Position 2
  &[data-selected="2"] .texts{
    .item[data-position="5"]{transform:rotate(0deg);}
    .item[data-position="1"]{transform:rotate(-3deg);}
    .item[data-position="2"]{transform:rotate(-6deg);}
    .item[data-position="3"]{transform:rotate(-9deg);}
    .item[data-position="4"]{transform:rotate(-12deg);}
    
    // Loaded
    &.loaded{
      .item[data-position="5"]{transform:rotate(6deg);}
      .item[data-position="1"]{transform:rotate(3deg);}
      .item[data-position="2"]{transform:rotate(0deg);}
      .item[data-position="3"]{transform:rotate(-3deg);}
      .item[data-position="4"]{transform:rotate(-6deg);}
    }
  }

  // Position 1
  &[data-selected="3"] .texts{
    .item[data-position="1"]{transform:rotate(0deg);}
    .item[data-position="2"]{transform:rotate(-3deg);}
    .item[data-position="3"]{transform:rotate(-6deg);}
    .item[data-position="4"]{transform:rotate(-9deg);}
    .item[data-position="5"]{transform:rotate(-12deg);}
    
    // Loaded
    &.loaded{
      .item[data-position="1"]{transform:rotate(6deg);}
      .item[data-position="2"]{transform:rotate(3deg);}
      .item[data-position="3"]{transform:rotate(0deg);}
      .item[data-position="4"]{transform:rotate(-3deg);}
      .item[data-position="5"]{transform:rotate(-6deg);}
    }
  }

  // Position 1
  &[data-selected="4"] .texts{
    .item[data-position="2"]{transform:rotate(0deg);}
    .item[data-position="3"]{transform:rotate(-3deg);}
    .item[data-position="4"]{transform:rotate(-6deg);}
    .item[data-position="5"]{transform:rotate(-9deg);}
    .item[data-position="1"]{transform:rotate(-12deg);}
    
    // Loaded
    &.loaded{
      .item[data-position="2"]{transform:rotate(6deg);}
      .item[data-position="3"]{transform:rotate(3deg);}
      .item[data-position="4"]{transform:rotate(0deg);}
      .item[data-position="5"]{transform:rotate(-3deg);}
      .item[data-position="1"]{transform:rotate(-6deg);}
    }
  }

  // Position 1
  &[data-selected="5"] .texts{
    .item[data-position="3"]{transform:rotate(0deg);}
    .item[data-position="4"]{transform:rotate(-3deg);}
    .item[data-position="5"]{transform:rotate(-6deg);}
    .item[data-position="1"]{transform:rotate(-9deg);}
    .item[data-position="2"]{transform:rotate(-12deg);}
    
    // Loaded
    &.loaded{
      .item[data-position="3"]{transform:rotate(6deg);}
      .item[data-position="4"]{transform:rotate(3deg);}
      .item[data-position="5"]{transform:rotate(0deg);}
      .item[data-position="1"]{transform:rotate(-3deg);}
      .item[data-position="2"]{transform:rotate(-6deg);}
    }
  }

  // Images
  .images{

    // Initial State
    opacity:0;
    transform: rotateY( -90deg );
    transition:opacity .375s ease-in-out, transform .500s ease-in-out;
    transform-origin: right center;
    
    // Loaded
    &.loaded{
      opacity:1;
      transform: rotateY( 0 );
    }

  }

}
</style>