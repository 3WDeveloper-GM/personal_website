<template>
  <Front></Front>
  <NavBarVue></NavBarVue>
  <AboutSectionVue></AboutSectionVue>

  <div style="height: 7000px; width: 100%;"></div>
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