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
  tutorialContent = `%3Cp%3E%3Cstrong%3E%22%20-%20%22%3C/strong%3E%20symbol%20is%20used%20to%20select%20result%20between%20two%20values.%20The%20values%20should%20be%20numbers%20only.%3C/p%3E%0A%3Ch4%20id=%22sqlwhere%22%3ESql%20(Where)%3C/h4%3E%0A%3Cpre%3E%3Ccode%3ESelect%20*%20From%20Table_Name;%0AWhere%0AColumn_Name%20Between%20value1%20and%20value2%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22jsstore%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3EConnection.select(%7B%0A%20%20%20%20From:%20%22Table_Name%22,%0A%20%20%20%20Where:%20%7B%0A%20%20%20%20%20%20%20%20Column_Name:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'-':%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Low:%20value1%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20High:%20value2%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%7D,%0A%20%20%20%20OnSuccess:%20function(results)%20%7B%0A%20%20%20%20%20%20%20%20//results%20will%20be%20array%20of%20objects.%0A%20%20%20%20%20%20%20%20console.log(results);%0A%20%20%20%20%7D,%0A%20%20%20%20OnError:%20function(error)%20%7B%0A%20%20%20%20%20%20%20%20alert(error.value);%0A%20%20%20%20%7D%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Ca%20href=%22/example/between%22%3EExample%3C/a%3E%20%3Ca%20href=%22#%22%3ENext%3C/a%3E%3C/p%3E`;
  title="Between";
}
</script>
