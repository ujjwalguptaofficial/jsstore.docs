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
  exampleContent = `%3Cpre%3E%3Ccode%3Eselect(%7B%0A%20%20%20%20from:%20%22Customers%22,%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20customerName:%7B%20like:'%25or%25'%7D%0A%20%20%20%20%7D%0A%7D);%0A%3C/code%3E%3C/pre%3E`;
  title="Like";
}
</script>
