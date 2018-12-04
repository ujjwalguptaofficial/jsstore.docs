<template>
<Tutorial v-bind:innerHtml="tutorialContent" v-bind:pageTitle="title"></Tutorial>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Tutorial from "../../../components/tutorial.vue";
@Component({
  components: {
    Tutorial
  }
})
export default class extends Vue {
  tutorialContent = `%3Cp%3EdropDb%20is%20used%20to%20remove%20a%20database%20from%20browser%20storage.%3C/p%3E%0A%3Cpre%3E%3Ccode%3EConnection.dropDb(function%20()%7B%0A%20%20%20%20console.log('Db%20deleted%20successfully');%0A%7D,%0Afunction%20(error)%20%7B%0A%20%20%20%20alert(error.value);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22/example/drop_db%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Drop Database";
}
</script>
