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
  exampleContent = `%3Cpre%3E%3Ccode%3E//first%20join%20between%20two%20tables%0Avar%20join1=%7B%0A%20%20%20%20table1:%7B%0A%20%20%20%20%20%20%20%20table:'Orders',%0A%20%20%20%20%20%20%20%20column:'customerId'%0A%20%20%20%20%7D,%0A%20%20%20%20join:'inner',%0A%20%20%20%20table2:%7B%0A%20%20%20%20%20%20%20%20table:'Customers',%0A%20%20%20%20%20%20%20%20column:'customerId'%0A%20%20%20%20%7D,%0A%20%20%20%20nextJoin:%7B%20//%20Provide%20details%20for%20next%20join%20%0A%20%20%20%20%20%20%20%20table:%20'Orders',%20%20//%20which%20table%20will%20be%20used%20from%20above%20two%20tables.,%20%20%0A%20%20%20%20%20%20%20%20column:%20'shipperId'%20//%20which%20column%20will%20be%20used%20from%20Table%0A%20%20%20%20%7D%0A%20%20%20%20//%20we%20have%20defined%20that%20table%20Orders%20will%20be%20used%20for%20next%20join%20on%20column%20ShippersID%0A%7D%0A%0A//join%20with%20third%20tables%0Avar%20join2=%7B%0A%20%20%20%20table1:join1,%0A%20%20%20%20join:'inner',%0A%20%20%20%20table2:%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20table:'Shippers',%0A%20%20%20%20%20%20%20%20column:'shipperId'%0A%20%20%20%20%7D%0A%7D%0A%0Aselect(%7B%0A%20%20%20%20from:%20join2%20//%20provide%20last%20join%20query%0A%7D);%0A%3C/code%3E%3C/pre%3E`;
  title="Multiple Table Join";
}
</script>
