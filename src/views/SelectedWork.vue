<template>
  <div class="selected-work" data-page="selected-work">
    <h1>Selected Work</h1>
      <ul>
        <li><router-link to="/work/keyocoin">KeyoCoin</router-link></li>
        <li><router-link to="/work/impactpass">ImpactPass</router-link></li>
        <li><router-link to="/work/keyopass">KeyoPass</router-link></li>
        <li><router-link to="/work/vacation-voucher">Vacation Voucher</router-link></li>
        <li><router-link to="/work/junar">Junar</router-link></li>
      </ul>
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
