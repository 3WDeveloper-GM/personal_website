<template>
  <component v-for="(item, index) in sectionsArray" :key="index" :is="item.component" ></component>
  <!--- <Front></Front>
  <NavBarVue></NavBarVue>
  <AboutSectionVue></AboutSectionVue>
  <SkillsVue></SkillsVue>
  <Projects></Projects>  --->
</template>

<script>

import AboutSectionVue from './components/AboutSection.vue'
import Front from "./components/Front.vue"
import NavBarVue from './components/NavBar.vue'
import SkillsVue from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/contact.vue'


export default {
  setup() {


    return {}
  },
  components: {
    Front,
    NavBarVue,
    AboutSectionVue,
    SkillsVue,
    Projects,
    Contact,
  },
  data() {
    return {
      sectionsArray: [
        {component: "Front"},
        {component: "NavBarVue"},
        {component: "AboutSectionVue"},
        {component: "SkillsVue"},
        {component: "Projects"},
        {component: "Contact"},
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>