<template>
  <div class="project-detail" data-page="project-detail">
    <h1>Project Detail</h1>
    <p>{{ title }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Parallax from 'parallax-js';

export default {
  name: 'ProjectDetail',
  data(){
    return {
      title: "KeyoCoin"
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';
@import '~@/assets/styles/mixins.scss';

</style>