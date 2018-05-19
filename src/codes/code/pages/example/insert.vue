<template>
<IdbStudioAppender v-bind:innerHtml="exampleContent" v-bind:pageTitle="title"></IdbStudioAppender>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import IdbStudioAppender from "../../components/idbstudio_appender.vue";
@Component({
  components: {
    IdbStudioAppender
  }
})
export default class extends Vue {
  exampleContent = `%3Cpre%3E%3Ccode%3Einsert(%7B%0A%20%20%20%20into:%20%22Customers%22,%0A%20%20%20%20values:%20%5B%7B%0A%20%20%20%20customerName:'ujjwal%20gupta',%20%0A%20%20%20%20contactName:'ujjwal',%20%0A%20%20%20%20address:'bhubaneswar%20odisha',%20%0A%20%20%20%20city:'bhubaneswar',%20%0A%20%20%20%20postalCode:'12345',%20%0A%20%20%20%20country:'India'%0A%7D%5D%0A%7D);%0A%3C/code%3E%3C/pre%3E`;
  title="Insert";
}
</script>
