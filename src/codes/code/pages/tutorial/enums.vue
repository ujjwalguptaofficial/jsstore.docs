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
  tutorialContent = `%3Cp%3EJsStore%20provides%20some%20enum%20values.%20These%20are%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cstrong%3EData_Type%20-%3C/strong%3E%20String,%20Object,%20Number,%20Boolean,%20Array%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3ENote%20:-%20enums%20are%20javascript%20object,%20so%20you%20can%20use%20%3Cstrong%3E%22%20.%20%22%3C/strong%3E%20symbol%20to%20get%20values.%3C/p%3E%0A%3Cp%3Ee.g.%20-%20To%20access%20datatype%20'string'%20using%20jsstore%20Data_type%20-%20JsStore.Data_Type.String%3C/p%3E%0A%3Cp%3E%3Ca%20href=%22#%22%3ENext%3C/a%3E%3C/p%3E`;
  title="Enums";
}
</script>
