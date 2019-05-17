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
  tutorialContent = `%3Cp%3EConnection%20in%20jsstore%20is%20object%20of%20%3Ccode%3EInstance%3C/code%3E%20class%20of%20jsstore.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20connection%20=%20new%20JsStore.Instance(new%20Worker('jsstore%20worker%20location'));%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cstrong%3EImportant%20points%20:-%3C/strong%3E%20%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EThe%20connection%20variable%20will%20be%20used%20to%20execute%20the%20further%20query.%3C/li%3E%0A%3Cli%3EA%20connection%20will%20handle%20one%20db%20at%20a%20time.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3EIf%20you%20are%20finding%20difficult%20to%20understand,%20please%20take%20a%20look%20at%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples%22%3Eexamples%3C/a%3E%20or%20our%20%3Ca%20href=%22https://medium.com/jsstore%22%3Emedium%20page%3C/a%3E%20%3C/p%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Connection";
  keywords="database, connection, query, indexeddb, jsstore";
}
</script>
