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
  tutorialContent = `%3Cp%3EOr%20can%20be%20used%20with%20Where%20to%20filter%20records.%3C/p%3E%0A%3Ch4%20id=%22sql%22%3ESql%3C/h4%3E%0A%3Cpre%3E%3Ccode%3ESelect%20*%20From%20Table_Name;%0AWhere%0AColumn1=some_value%0Aor%0AColumn2=some_another_value;%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22jsstore%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3EConnection.select(%7B%0A%20%20%20%20From:%20%22Table_Name%22,%0A%20%20%20%20Where:%20%7B%0A%20%20%20%20%20%20%20%20Column1:%20some_value,%0A%20%20%20%20%20%20%20%20Or:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Column2:%20some_another_value%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D,%0A%20%20%20%20OnSuccess:%20function(results)%20%7B%0A%20%20%20%20%20%20%20%20//results%20will%20be%20array%20of%20objects.%0A%20%20%20%20%20%20%20%20console.log(results);%0A%20%20%20%20%7D,%0A%20%20%20%20OnError:%20function(error)%20%7B%0A%20%20%20%20%20%20%20%20alert(error.value);%0A%20%20%20%20%7D%0A%7D);%0A%3C/code%3E%3C/pre%3E`;
  title="Or";
}
</script>
