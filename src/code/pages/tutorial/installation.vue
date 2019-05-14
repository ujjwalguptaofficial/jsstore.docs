<template>
<Tutorial v-bind:pageKeywords="keywords" v-bind:innerHtml="tutorialContent" v-bind:pageTitle="title"></Tutorial>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Tutorial from "../../components/tutorial.vue";
@Component({
  components: {
    Tutorial
  }
})
export default class extends Vue {
  tutorialContent = `%3Cp%3EIn%20order%20to%20set%20up%20jsstore%20-%20you%20need%20two%20files%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3Ejsstore%20-%20It%20contains%20all%20apis%20code%20and%20need%20to%20be%20included%20directly%20in%20html%20file.%3C/li%3E%0A%3Cli%3Ejsstore.worker.js%20-%20It%20contains%20all%20logic%20and%20can%20be%20used%20as%20worker%20or%20without%20worker.%0AIf%20you%20want%20dont%20want%20to%20use%20as%20worker%20-%20you%20can%20just%20include%20in%20html%20page%20just%20like%20other%20scripts.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3EJsStore%20can%20be%20installed%20by%20multiple%20ways%20-%3C/p%3E%0A%3Ch4%20id=%22cdn%22%3ECdn%20-%3C/h4%3E%0A%3Cul%3E%0A%3Cli%3E%3Cstrong%3ELatest%3C/strong%3E%20-%20https://cdn.jsdelivr.net/npm/jsstore/dist%0Ae.g%20-%20%3Col%3E%0A%3Cli%3Ejsstore%20-%20%20%20https://cdn.jsdelivr.net/npm/jsstore/dist/jsstore.min.js%3C/li%3E%0A%3Cli%3Ejsstore.worker%20-%20https://cdn.jsdelivr.net/npm/jsstore/dist/jsstore.worker.min.js%3C/li%3E%3C/ol%3E%3C/li%3E%0A%3Cli%3E%3Cstrong%3EVersion%3C/strong%3E%20-%20https://cdn.jsdelivr.net/npm/jsstore@version%3Cbr%20/%3E%0Ae.g%20-%20%3Col%3E%0A%3Cli%3Ejsstore%20-%20https://cdn.jsdelivr.net/npm/jsstore@2.1.0/dist/jsstore.min.js%3C/li%3E%0A%3Cli%3Ejsstore.worker%20-%20https://cdn.jsdelivr.net/npm/jsstore@2.1.0/dist/jsstore.worker.min.js%3C/li%3E%3C/ol%3E%3C/li%3E%0A%3C/ul%3E%0A%3Ch4%20id=%22npm%22%3ENpm%20-%3C/h4%3E%0A%3Cul%3E%0A%3Cli%3E%3Cstrong%3ELatest%3C/strong%3E%20-%20npm%20install%20jsstore%3C/li%3E%0A%3Cli%3E%3Cstrong%3EVersion%3C/strong%3E%20-%20npm%20install%20jsstore@version%3Cbr%20/%3E%0Ae.g%20-%20npm%20install%20jsstore@2.0.0%3C/li%3E%0A%3C/ul%3E%0A%3Ch4%20id=%22rawfile%22%3ERaw%20file%20-%3C/h4%3E%0A%3Cp%3EYou%20can%20get%20the%20raw%20file%20from%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore%22%3EGithub%3C/a%3E.You%20will%20find%20the%20script%20in%20dist%20folder.%3C/p%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Installation";
  keywords="installation, npm, cdn, indexeddb, jsstore";
}
</script>
