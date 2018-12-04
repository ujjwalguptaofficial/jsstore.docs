<template>
<Tutorial v-bind:innerHtml="tutorialContent" v-bind:pageTitle="title"></Tutorial>
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
  tutorialContent = `%3Cp%3ESqlWeb%20is%20an%20extension%20of%20JsStore%20which%20allows%20to%20use%20sql%20query%20for%20performing%20database%20operation%20in%20IndexedDB.%3C/p%3E%0A%3Cp%3EFor%20developers%20who%20love%20sql%20or%20still%20are%20using%20WebSql%20(which%20is%20deprecated)%20-%20SqlWeb%20will%20be%20the%20solution.%20Its%20easy%20to%20learn%20&amp;%20then%20very%20easy%20to%20implement.%20%3C/p%3E%0A%3Cp%3ESqlWeb%20docs%20are%20available%20at%20-%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/sqlweb/wiki/%22%3Ehttps://github.com/ujjwalguptaofficial/sqlweb/wiki/%3C/a%3E%3C/p%3E%0A%3Cp%3EBut%20i%20will%20recommend%20you%20to%20take%20a%20look%20at%20Get%20started%20page%20-%20https://github.com/ujjwalguptaofficial/sqlweb/wiki/Get-Started%3C/p%3E%0A%3Cp%3ESqlWeb%20provides%20examples%20for%20different%20tools%20&amp;%20scenario%20:-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3ETypeScript%20-%20https://github.com/ujjwalguptaofficial/sqlweb/tree/master/examples/typescript%3C/li%3E%0A%3Cli%3EWebpack%20-%20https://github.com/ujjwalguptaofficial/sqlweb/tree/master/examples/webpack%3C/li%3E%0A%3Cli%3EReact%20-%20https://github.com/ujjwalguptaofficial/sqlweb/tree/master/examples/react%3C/li%3E%0A%3C/ul%3E`;
  title="SqlWeb";
}
</script>
