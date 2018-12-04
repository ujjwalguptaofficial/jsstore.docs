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
  tutorialContent = `%3Cp%3EJsStore%20supports%20following%20operators%20:%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cstrong%3E%22%20&gt;%20%22%20:%3C/strong%3E%20Finds%20value%20greater%20than%20supplied%20value.%3C/li%3E%0A%3Cli%3E%3Cstrong%3E%22%20&lt;%20%22%20:%3C/strong%3E%20Finds%20value%20less%20than%20supplied%20value.%3C/li%3E%0A%3Cli%3E%3Cstrong%3E%22%20&gt;=%20%22%20:%3C/strong%3E%20Finds%20value%20greater%20than%20or%20equal%20to%20supplied%20value.%3C/li%3E%0A%3Cli%3E%3Cstrong%3E%22%20&lt;=%20%22%20:%3C/strong%3E%20Finds%20value%20less%20than%20or%20equal%20to%20supplied%20value.%3C/li%3E%0A%3Cli%3E%3Cstrong%3E%22%20-%20%22%20:%3C/strong%3E%20Finds%20value%20between%20two%20supplied%20value.%3C/li%3E%0A%3Cli%3E%3Cstrong%3E%22%20!=%20%22%20:%3C/strong%3E%20Finds%20value%20not%20equal%20to%20supplied%20value.%3C/li%3E%0A%3C/ul%3E%0A%3Ch4%20id=%22sql%22%3ESql%3C/h4%3E%0A%3Cpre%3E%3Ccode%3ESelect%20*%20From%20Table_Name;%0AWhere%0AColumn_Name%20&gt;%20some_value%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22jsstore%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3Econnection.select(%7B%0A%20%20%20%20from:%20%22Table_Name%22,%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20Column_Name:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'&gt;':%20some_value%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%7D%0A%7D).then(function(results)%20%7B%0A%20%20%20%20//results%20will%20be%20array%20of%20objects.%0A%20%20%20%20console.log(results);%0A%7D).catch(function(error)%20%7B%0A%20%20%20%20alert(error.message);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22/example/operator%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Operators";
}
</script>
