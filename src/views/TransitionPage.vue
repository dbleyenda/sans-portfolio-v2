<template>
  <transition
    :name="transitionName"
    :mode="transitionMode"
    @beforeLeave="beforeLeave"
    @enter="enter"
    @afterEnter="afterEnter"
  >
    <slot/>
  </transition>
</template>

<script>
const DEFAULT_TRANSITION = 'fade';
const DEFAULT_TRANSITION_MODE = 'out-in';

export default {
  name: 'TransitionPage',
  data() {
    return {
      transitionName: DEFAULT_TRANSITION,
      transitionMode: DEFAULT_TRANSITION_MODE,
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
        
        let transitionName = to.meta.transitionName || from.meta.transitionName || DEFAULT_TRANSITION;

        //   if (transitionName === 'slide') {
        //     const toDepth = to.path.split('/').length;
        //     const fromDepth = from.path.split('/').length;
        //     transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
        //   }

        //   this.transitionMode = DEFAULT_TRANSITION_MODE;
        //   this.transitionEnterActiveClass = `${transitionName}-enter-active`;

        //   if (to.meta.transitionName === 'zoom') {
        //     this.transitionMode = 'in-out';
        //     this.transitionEnterActiveClass = 'zoom-enter-active';
        //     document.body.style.overflow = 'hidden';
        //   }

        //   if (from.meta.transitionName === 'zoom') {
        //     this.transitionMode = null;
        //     this.transitionEnterActiveClass = null;
        //     document.body.style.overflow = null;
        //   }

        this.transitionName = transitionName;

        next();
        
    });
  },
  methods: {
    beforeLeave(element) {
      
    },
    enter(element) {

    },
    afterEnter(element) {

    },
  },
};
</script>

<style lang="scss">

//Home Transition
.home-enter{
    opacity:0;
}
.home-enter-active {
    transition:opacity .500s ease;
}
.home-leave{
    // opacity:1;
}
.home-leave-active {
    transition:opacity .500s ease;
    opacity:0;
}

// Fade
.fade-enter-active,
.fade-leave-active {
  transition-duration: .375s;
  transition-property: opacity;
  transition-timing-function: ease;
  overflow: hidden;
}
.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>