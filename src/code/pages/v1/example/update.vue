<templateundefined>
<Example v-bind:innerHtml="exampleContent" v-bind:pageTitle="title"></Example>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Example from "../../../components/example.vue";
@Component({
  components: {
    Example
  }
})
export default class extends Vue {
  exampleContent = `%3Cpre%3E%3Ccode%3Evar%20Connection%20=%20new%20JsStore.Instance().openDb(%22Demo%22);%0AConnection.update(%7B%0A%20%20%20%20In:%20%22Customers%22,%0A%20%20%20%20Set:%20%7B%0A%20%20%20%20%20%20%20%20contactName:%20'Ujjwal',%0A%20%20%20%20%20%20%20%20city:%20'Bhubaneswar'%0A%20%20%20%20%7D,Where:%20%7B%0A%20%20%20%20%20%20%20%20customerId:%201%0A%20%20%20%20%7D,%0A%20%20%20%20OnSuccess:function%20(results)%7B%0A%20%20%20%20%20%20%20%20log(results);%0A%20%20%20%20%7D,%0A%20%20%20%20OnError:function%20(error)%20%7B%0A%20%20%20%20%20%20%20%20log(error);%0A%20%20%20%20%7D%0A%7D);%0A%3C/code%3E%3C/pre%3E`;
  title="Update";
}
</script>
