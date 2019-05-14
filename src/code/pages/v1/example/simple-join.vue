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
  exampleContent = `%3Cpre%3E%3Ccode%3Evar%20JoinLogic=%7B%0A%20%20%20%20Table1:%7B%0A%20%20%20%20%20%20%20%20Table:'Orders',%0A%20%20%20%20%20%20%20%20Column:'customerId'%0A%20%20%20%20%7D,%0A%20%20%20%20Join:'inner',%0A%20%20%20%20Table2:%7B%0A%20%20%20%20%20%20%20%20Table:'Customers',%0A%20%20%20%20%20%20%20%20Column:'customerId'%0A%20%20%20%20%7D%0A%7D%0A%0Avar%20Connection%20=%20new%20JsStore.Instance();%0AConnection.openDb(%22Demo%22).select(%7B%0A%20%20%20%20From:%20JoinLogic,%0A%20%20%20%20OnSuccess:function%20(results)%7B%0A%20%20%20%20%20%20%20%20log(results);%0A%20%20%20%20%7D,%0A%20%20%20%20OnError:function%20(error)%20%7B%0A%20%20%20%20%20%20%20%20log(error);%0A%20%20%20%20%7D%0A%7D);%0A%3C/code%3E%3C/pre%3E`;
  title="Simple Join";
}
</script>
