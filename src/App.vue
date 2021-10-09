<template>
  <div class="app">
    <Header v-if="currentRouteName !== 'login' && currentRouteName !== 'register'"/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  },
  computed: {
    currentRouteName(){
      return this.$route.name;
    }
  }
}
</script>

<style lang="scss">
@import './sass/main.scss'

//router-link-exact-active {

</style>
