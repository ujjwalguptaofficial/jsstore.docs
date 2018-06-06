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
  exampleContent = `%3Cpre%3E%3Ccode%3Einsert(%7B%0A%20%20%20%20into:%20%22Customers%22,%0A%20%20%20%20values:%20%5B%7B%0A%20%20%20%20%20%20%20%20customerName:%20'ujjwal%20gupta',%0A%20%20%20%20%20%20%20%20contactName:%20'ujjwal',%0A%20%20%20%20%20%20%20%20address:%20'bhubaneswar%20odisha',%0A%20%20%20%20%20%20%20%20city:%20'bhubaneswar',%0A%20%20%20%20%20%20%20%20postalCode:%20'12345',%0A%20%20%20%20%20%20%20%20country:%20'India'%0A%20%20%20%20%7D%5D%0A%7D);%0A%3C/code%3E%3C/pre%3E`;
  title="Insert";
}
</script>
