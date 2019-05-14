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
  exampleContent = `%3Cpre%3E%3Ccode%3Evar%20Connection%20=%20new%20JsStore.Instance();%0AConnection.openDb('Demo');%0A%0Avar%20Value=%7B%0A%20%20%20%20customerName:'ujjwal%20gupta',%20%0A%20%20%20%20contactName:'ujjwal',%20%0A%20%20%20%20address:'bhubaneswar%20odisha',%20%0A%20%20%20%20city:'bhubaneswar',%20%0A%20%20%20%20postalCode:'12345',%20%0A%20%20%20%20country:'India'%0A%7D%0A%0AConnection.insert(%7B%0A%20%20%20%20Into:%20%22Customers%22,%0A%20%20%20%20Values:%20%5BValue%5D,%0A%20%20%20%20OnSuccess:function%20(rowAffected)%7B%0A%20%20%20%20%20%20%20%20log(rowAffected%20+%20%22%20records%20added%22);%0A%20%20%20%20%7D,%0A%20%20%20%20OnError:function%20(error)%20%7B%0A%20%20%20%20%20%20%20%20log(error);%0A%20%20%20%20%7D%0A%7D);%0A%3C/code%3E%3C/pre%3E`;
  title="Insert";
}
</script>
