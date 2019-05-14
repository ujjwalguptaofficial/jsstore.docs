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
  tutorialContent = `%3Cp%3EIDBStudio%20is%20a%20helper%20tool%20for%20jsstore%20development.%20It%20helps%20users%20to%20execute%20,%20debug%20and%20learn%20jsstore%20query.%3C/p%3E%0A%3Cp%3EImagine%20you%20are%20in%20a%20situation%20where%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EYou%20dont%20know%20what%20query%20will%20be%20used%20to%20get%20the%20perfect%20result.%3C/li%3E%0A%3Cli%3EYou%20have%20a%20big%20database%20&amp;%20you%20want%20to%20work%20on%20optimization%20of%20query.%3C/li%3E%0A%3Cli%3EYou%20are%20experimenting%20with%20database%20format.%3C/li%3E%0A%3Cli%3EYou%20want%20to%20learn%20jsstore%20&amp;%20want%20to%20experiment%20something.%3C/li%3E%0A%3Cli%3EYou%20want%20to%20inspect%20database%20-%20tables,%20columns%20etc.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0AWith%20all%20of%20these%20situations%20-%20you%20end%20up%20creating%20an%20application%20&amp;%20executing%20queries%20through%20console%20or%20taking%20help%20of%20browser%20debugging%20tools.%20%3C/p%3E%0A%3Cp%3EIDBStudio%20helps%20you%20with%20these%20situations%20and%20let%20you%20speed%20up%20your%20development.%3C/p%3E%0A%3Cp%3EHere%20is%20the%20github%20repo%20link%20-%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/idbstudio%22%3Ehttps://github.com/ujjwalguptaofficial/idbstudio%3C/a%3E%3C/p%3E`;
  title="IDBStudio";
  keywords="idbstudio, debugger, tool, indexeddb, jsstore";
}
</script>
