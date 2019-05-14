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
  tutorialContent = `%3Cp%3EDistinct%20is%20used%20to%20return%20the%20unique%20set%20of%20result.%20Distinct%20filters%20the%20result%20for%20all%20columns%20together%20except%20Primary%20column,%20since%20Primary%20column%20will%20make%20the%20result%20always%20unique.%3C/p%3E%0A%3Cp%3E%3Cstrong%3ENote%20:-%3C/strong%3E%20If%20you%20want%20to%20return%20the%20distinct%20results%20based%20on%20some%20columns,%20then%20you%20should%20use%20GroupBy.%3C/p%3E%0A%3Ch4%20id=%22sqlwhere%22%3ESql%20(Where)%3C/h4%3E%0A%3Cpre%3E%3Ccode%3ESelect%20Distinct%20*%20From%20Table_Name;%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22jsstore%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3Econnection.select(%7B%0A%20%20%20%20from:%20%22Table_Name%22,%0A%20%20%20%20distinct:%20true,%0A%20%20%20%20//%20it%20is%20optional%20value%20which%20takes%20boolean%20value-%20true%20or%20false.%0A%7D).then(function(results)%20%7B%0A%20%20%20%20//results%20will%20be%20array%20of%20objects.%0A%20%20%20%20console.log(results);%0A%7D).catch(function(error)%20%7B%0A%20%20%20%20alert(error.value);%0A%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22/example/distinct%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Distinct";
  keywords="distinct, select, query, indexeddb, jsstore";
}
</script>
