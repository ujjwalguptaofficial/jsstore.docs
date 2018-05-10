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
  tutorialContent = `%3Cp%3EAs%20the%20name%20say%20-%20%22exportJson%22%20will%20download%20a%20json%20file.%20It%20takes%20a%20select%20query%20and%20result%20from%20the%20query%20is%20saved%20as%20a%20json%20file.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.exportJson(%7B%0A%20%20%20%20from:%20%22Table_Name%22,%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20Column1:%20some_value,%0A%20%20%20%20%20%20%20%20Column2:%20some_another_value%0A%20%20%20%20%7D%0A%7D).then(function()%20%7B%0A%20%20%20%20console.log('Successfully%20exported');%0A%7D).catch(function(error)%20%7B%0A%20%20%20%20console.log(error);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22/example/export_json%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Export Json";
}
</script>
