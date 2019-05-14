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
  exampleContent = `%3Cpre%3E%3Ccode%3Evar%20Connection%20=%20new%20JsStore.Instance();%0AConnection.openDb(%22Demo%22);%0AConnection.dropDb(function%20()%7B%0A%20%20%20%20log(%22Db%20dropped%20successfully%22);%0A%7D,%0Afunction%20(error)%20%7B%0A%20%20%20%20log(error);%0A%7D);%0A%3C/code%3E%3C/pre%3E`;
  title="Drop Database";
}
</script>
