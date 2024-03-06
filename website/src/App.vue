<template>
  <Front></Front>
  <NavBarVue></NavBarVue>
  <AboutSectionVue></AboutSectionVue>
  <SkillsVue></SkillsVue>
</template>

<script>

import AboutSectionVue from './components/AboutSection.vue'
import Front from "./components/Front.vue"
import NavBarVue from './components/NavBar.vue'
import SkillsVue from './components/Skills.vue'


export default {
  setup() {


    return {}
  },
  components: {
    Front,
    NavBarVue,
    AboutSectionVue,
    SkillsVue
  }
}
</script>

<style lang="scss" scoped></style>