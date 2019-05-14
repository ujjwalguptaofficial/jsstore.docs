<templateundefined>
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
  exampleContent = `%3Cpre%3E%3Ccode%3Eupdate(%7B%0A%20%20%20%20in:%20%22Customers%22,%0A%20%20%20%20set:%20%7B%0A%20%20%20%20%20%20%20%20contactName:%20'Ujjwal',%0A%20%20%20%20%20%20%20%20city:%20'Bhubaneswar'%0A%20%20%20%20%7D,%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20customerId:%201%0A%20%20%20%20%7D%0A%7D);%0A%3C/code%3E%3C/pre%3E`;
  title="Update";
}
</script>
