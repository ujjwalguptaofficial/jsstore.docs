<templateundefined>
<Tutorial v-bind:innerHtml="tutorialContent" v-bind:pageTitle="title"></Tutorial>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Tutorial from "../../../components/tutorial.vue";
@Component({
  components: {
    Tutorial
  }
})
export default class extends Vue {
  tutorialContent = `%3Cp%3EBefore%20creating%20Table,%20lets%20see%20how%20to%20create%20a%20column.%20A%20column%20in%20JsStore%20is%20an%20json%20object.%20It%20has%20following%20properties%20-%3C/p%3E%0A%3Cpre%3E%3Ccode%3E%7B%0A%20%20%20%20Name:%20string,%20//%20name%20of%20column%20(required)%0A%20%20%20%20PrimaryKey:%20boolean,%20//%20declare%20this%20column%20as%20primary%20key%20(optional)%0A%20%20%20%20//%20We%20strongly%20recommend%20to%20create%20the%20primary%20keys%20(optional)%0A%20%20%20%20NotNull:%20boolean,%20//%20ensure%20this%20column%20value%20should%20not%20be%20null%20(optional)%0A%20%20%20%20DataType:%20JsStore.Data_Type,%20//%20datatype%20of%20this%20column%20(optional)%0A%20%20%20%20AutoIncrement:%20boolean,%20//%20automatically%20increment%20value%20(optional)%0A%20%20%20%20Unique:%20boolean%20//%20This%20column%20will%20have%20unique%20value%20(optional)%0A%20%20%20%20Default:%20any,%20//%20Provides%20a%20default%20value%20for%20a%20column%20when%20none%20is%20specified%20(optional)%0A%20%20%20%20MultiEntry:%20boolean,%20//%20Provides%20support%20to%20search%20inside%20array%20values%20(optional)%0A%20%20%20%20EnableSearch:%20boolean%20-%20default%20value%20is%20true%20//%20Turn%20on/off%20search%20for%20this%20column%20(optional)%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ESo%20Table%20in%20JsStore%20is%20an%20Array%20of%20columns.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20Table1%20=%20%7B%0A%20%20%20%20Name:%20%22table_name%22,%0A%20%20%20%20Columns:%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Name:%20%22column1%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20DataType:%20'datatype'%0A%20%20%20%20%20%20%20%20%20%20%20%20PrimaryKey:%20true%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Name:%20%22column2%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20DataType:%20'datatype'%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20.....%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Name:%20%22columnN%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20DataType:%20'datatype'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENote%20:-%20We%20strongly%20recommend%20to%20create%20a%20primary%20key%20for%20every%20table.%3C/p%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Table";
}
</script>
