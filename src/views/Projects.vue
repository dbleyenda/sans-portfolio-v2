<template>
  <div class="page projects" data-page="projects">
    <transition-page>
      <router-view></router-view>
    </transition-page>
  </div>
</template>

<script>
// @ is an alias to /src
// import Parallax from 'parallax-js';
import TransitionPage from '@/views/TransitionPage.vue';

export default {
  name: 'ProjectDetail',
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';
@import '~@/assets/styles/mixins.scss';

</style>