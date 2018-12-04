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
  tutorialContent = `%3Cp%3EUpdate%20is%20used%20to%20modify%20the%20existing%20records%20in%20a%20table.%20You%20can%20use%20Where%20to%20filter%20records.%3C/p%3E%0A%3Ch4%20id=%22sql%22%3ESql%3C/h4%3E%0A%3Cpre%3E%3Ccode%3EUpdate%20Table_Name;%0ASet%0A%20%20%20%20column1%20=%20value1,%0A%20%20%20%20column2%20=%20value2,%0AWhere%0A%20%20%20%20Column3=some_value%0Aand%0A%20%20%20%20Column4=some_another_value;%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22jsstore%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3Econnection.update(%7B%20%0A%20%20%20%20%20%20in:%20%22Table_Name%22,%0A%20%20%20%20set:%20%7B%0A%20%20%20%20%20%20%20%20Column1:%20value1,%0A%20%20%20%20%20%20%20%20Column2:%20value2%0A%20%20%20%20%7D,%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20Column3:%20some_value,%0A%20%20%20%20%20%20%20%20Column4:%20some_another_value%0A%20%20%20%20%7D%0A%7D).then(function(rowsUpdated)%20%7B%0A%20%20%20%20alert(rowsUpdated%20+%20'%20rows%20updated');%0A%7D).catch(function(err)%20%7B%0A%20%20%20%20console.log(err);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22/example/update%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Update";
}
</script>
