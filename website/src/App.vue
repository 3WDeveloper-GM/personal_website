<template>
  <Front></Front>
  <NavBarVue></NavBarVue>
  <AboutSectionVue></AboutSectionVue>
</template>

<script>

import AboutSectionVue from './components/AboutSection.vue'
import Front from "./components/Front.vue"
import NavBarVue from './components/NavBar.vue'

export default {
  setup() {


    return {}
  },
  components: {
    Front,
    NavBarVue,
    AboutSectionVue
  }
}
</script>

<style lang="scss" scoped></style>