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
  tutorialContent = `%3Cp%3ETerminate%20close%20the%20connection%20and%20releases%20everything.%20This%20is%20useful%20in%20case%20-%20where%20you%20dont%20want%20to%20keep%20the%20connection%20alive%20since%20you%20are%20not%20using%20it%20often.%3C/p%3E%0A%3Ch4%20id=%22jsstore%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3Econnection.terminate().then(function()%20%7B%0A%20%20%20%20console.log(%22connection%20terminated%22);%0A%7D).catch(function(error)%20%7B%0A%20%20%20%20alert(error.message);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EBut%20what%20to%20do%20-%20when%20you%20want%20to%20initiate%20the%20terminated%20connection%20?%3C/p%3E%0A%3Cp%3EYou%20will%20have%20to%20create%20the%20instance%20again.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection%20=%20new%20JsStore.Instance(new%20Worker('worker_url'));%0A%3C/code%3E%3C/pre%3E`;
  title="Terminate";
  keywords="terminate, api, query, indexeddb, jsstore";
}
</script>
