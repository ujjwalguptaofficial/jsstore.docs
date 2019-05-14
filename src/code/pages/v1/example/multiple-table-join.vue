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
  exampleContent = `%3Cpre%3E%3Ccode%3E//first%20join%20between%20two%20tables%0Avar%20Join1=%7B%0A%20%20%20%20Table1:%7B%0A%20%20%20%20%20%20%20%20Table:'Orders',%0A%20%20%20%20%20%20%20%20Column:'customerId'%0A%20%20%20%20%7D,%0A%20%20%20%20Join:'inner',%0A%20%20%20%20Table2:%7B%0A%20%20%20%20%20%20%20%20Table:'Customers',%0A%20%20%20%20%20%20%20%20Column:'customerId'%0A%20%20%20%20%7D,%0A%20%20%20%20NextJoin:%7B%20//%20Provide%20details%20for%20next%20join%20%0A%20%20%20%20%20%20%20%20Table:%20'Orders',%20%20//%20which%20table%20will%20be%20used%20from%20above%20two%20tables.,%20%20%0A%20%20%20%20%20%20%20%20Column:%20'shipperId'%20//%20which%20column%20will%20be%20used%20from%20Table%0A%20%20%20%20%7D%0A%20%20%20%20//%20we%20have%20defined%20that%20table%20Orders%20will%20be%20used%20for%20next%20join%20on%20column%20ShippersID%0A%7D%0A%0A//join%20with%20third%20tables%0Avar%20Join2=%7B%0A%20%20%20%20Table1:Join1,%0A%20%20%20%20Join:'inner',%0A%20%20%20%20Table2:%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20Table:'Shippers',%0A%20%20%20%20%20%20%20%20Column:'shipperId'%0A%20%20%20%20%7D%0A%7D%0A%0Avar%20Connection%20=%20new%20JsStore.Instance();%0AConnection.openDb(%22Demo%22).select(%7B%0A%20%20%20%20From:%20Join2,%20//%20provide%20last%20join%20query%0A%20%20%20%20OnSuccess:function%20(results)%7B%0A%20%20%20%20%20%20%20%20log(results);%0A%20%20%20%20%7D,%0A%20%20%20%20OnError:function%20(error)%20%7B%0A%20%20%20%20%20%20%20%20log(error);%0A%20%20%20%20%7D%0A%7D);%0A%3C/code%3E%3C/pre%3E`;
  title="Multiple Table Join";
}
</script>
