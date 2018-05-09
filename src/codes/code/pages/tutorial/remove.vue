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
  tutorialContent = `%3Cp%3EYou%20can%20use%20Where%20to%20filter%20results.%3C/p%3E%0A%3Ch4%20id=%22sql%22%3ESql%3C/h4%3E%0A%3Cpre%3E%3Ccode%3EDelete%20From%20Table_Name;%0AWhere%0A%20%20%20%20Column1=some_value%0Aand%0A%20%20%20%20Column2=some_another_value;%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22jsstore%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3Econnection.remove(%7B%0A%20%20%20%20from:%20%22Table_Name%22,%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20column1:%20some_value,%0A%20%20%20%20%20%20%20%20column2:%20some_another_value%0A%20%20%20%20%7D%0A%7D).then(function(rowsDeleted)%20%7B%0A%20%20%20%20//results%20will%20contains%20no%20of%20rows%20deleted.%0A%20%20%20%20console.log(rowsDeleted);%0A%7D).catch(function(error)%20%7B%0A%20%20%20%20alert(error.message);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22/example/remove%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Delete";
}
</script>
