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
  tutorialContent = `%3Cp%3ESkip%20is%20used%20to%20specify%20the%20number%20of%20records%20to%20skip.%20It%20is%20available%20with%20only%20select.%3C/p%3E%0A%3Cp%3EIt%20can%20be%20done%20in%20sql%20in%20no%20of%20ways,%20so%20i%20am%20not%20mentioning%20any%20particluar%20example.%3C/p%3E%0A%3Ch4%20id=%22jsstore%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3EConnection.select(%7B%0A%20%20%20%20From:%20%22Table_Name%22,%0A%20%20%20%20Skip:%20number,%0A%20%20%20%20OnSuccess:%20function(results)%20%7B%0A%20%20%20%20%20%20%20%20//results%20will%20be%20array%20of%20objects.%0A%20%20%20%20%20%20%20%20console.log(results);%0A%20%20%20%20%7D,%0A%20%20%20%20OnError:%20function(error)%20%7B%0A%20%20%20%20%20%20%20%20alert(error.value);%0A%20%20%20%20%7D%0A%7D);%0A%3C/code%3E%3C/pre%3E`;
  title="Skip";
}
</script>
