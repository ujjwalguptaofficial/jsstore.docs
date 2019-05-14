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
  tutorialContent = `%3Cp%3Eclear%20is%20used%20to%20remove%20all%20records%20from%20a%20table.%20You%20can%20also%20use%20delete%20api%20to%20clear%20records%20from%20particular%20table%20but%20difference%20is%20that%20clear%20will%20be%20fast%20and%20wont%20return%20no%20of%20record%20deleted%20while%20delete%20will%20return%20no%20of%20record%20deleted.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.clear(table_name).then(function()%20%7B%0A%20%20%20%20console.log('data%20cleared%20successfully');%0A%7D).catch(function(error)%20%7B%0A%20%20%20%20alert(error.value);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22/example/clear%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Clear";
  keywords="clear, table, api, indexeddb, jsstore";
}
</script>
