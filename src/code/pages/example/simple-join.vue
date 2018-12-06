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
  exampleContent = `%3Cpre%3E%3Ccode%3Evar%20joinLogic=%7B%0A%20%20%20%20table1:%7B%0A%20%20%20%20%20%20%20%20table:'Orders',%0A%20%20%20%20%20%20%20%20column:'customerId'%0A%20%20%20%20%7D,%0A%20%20%20%20join:'inner',%0A%20%20%20%20table2:%7B%0A%20%20%20%20%20%20%20%20table:'Customers',%0A%20%20%20%20%20%20%20%20column:'customerId'%0A%20%20%20%20%7D%0A%7D%0A%0Aselect(%7B%0A%20%20%20%20from:%20JoinLogic%0A%7D);%0A%3C/code%3E%3C/pre%3E`;
  title="Simple Join";
}
</script>
