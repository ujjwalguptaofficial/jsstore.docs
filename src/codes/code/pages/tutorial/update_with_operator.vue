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
  tutorialContent = `%3Cp%3EJsStore%20provides%20you%20a%20way%20to%20update%20data%20with%20arithmetic%20operators.%3C/p%3E%0A%3Cp%3Ee.g%20-%20you%20want%20to%20add%205%20to%20current%20stored%20data.%3C/p%3E%0A%3Cpre%3E%3Ccode%3EConnection.update(%7B%0A%20%20%20%20In:%20%22Table_Name%22,%0A%20%20%20%20Set:%20%7B%0A%20%20%20%20%20%20%20%20Column1:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'+':%20value1%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20//Supported%20operators%20are%20-%20+,%20-,%20*,%20/%0A%20%20%20%20%20%20%20%20Column2:%20value2%0A%20%20%20%20%7D,%0A%20%20%20%20Where:%20%7B%0A%20%20%20%20%20%20%20%20Column3:%20some_value,%0A%20%20%20%20%20%20%20%20Column4:%20some_another_value%0A%20%20%20%20%7D,%0A%20%20%20%20OnSuccess:%20function(rowUpdated)%20%7B%0A%20%20%20%20%20%20%20%20//results%20will%20contains%20no%20of%20rows%20updated.%0A%20%20%20%20%20%20%20%20console.log(results);%0A%20%20%20%20%7D,%0A%20%20%20%20OnError:%20function(error)%20%7B%0A%20%20%20%20%20%20%20%20alert(error.value);%0A%20%20%20%20%7D%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Ca%20href=%22/example/update_with_operators%22%3EExample%3C/a%3E%20%3Ca%20href=%22#%22%3ENext%3C/a%3E%3C/p%3E`;
  title="Update With Operators";
}
</script>
