<template>
<Tutorial v-bind:pageKeywords="keywords" v-bind:innerHtml="tutorialContent" v-bind:pageTitle="title"></Tutorial>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Tutorial from "../../components/tutorial.vue";
@Component({
  components: {
    Tutorial
  }
})
export default class extends Vue {
  tutorialContent = `%3Cp%3EA%20column%20in%20JsStore%20is%20a%20JSON%20object.%20It%20has%20following%20properties%20-%3C/p%3E%0A%3Cpre%3E%3Ccode%3E%7B%0A%20%20%20%20name:%20string,%20//%20name%20of%20column%20(required)%0A%20%20%20%20primaryKey:%20boolean,%20//%20declare%20this%20column%20as%20primary%20key%20(optional)%0A%20%20%20%20//%20We%20strongly%20recommend%20to%20create%20the%20primary%20keys%20(optional)%0A%20%20%20%20notNull:%20boolean,%20//%20ensure%20this%20column%20value%20should%20not%20be%20null%20(optional)%0A%20%20%20%20dataType:%20JsStore.DATA_TYPE,%20//%20datatype%20of%20this%20column%20(optional)%0A%20%20%20%20autoIncrement:%20boolean,%20//%20automatically%20increment%20value%20(optional)%0A%20%20%20%20unique:%20boolean%20//%20This%20column%20will%20have%20unique%20value%20(optional)%0A%20%20%20%20default:%20any,%20//%20Provides%20a%20default%20value%20for%20a%20column%20when%20none%20is%20specified%20(optional)%0A%20%20%20%20multiEntry:%20boolean,%20//%20Provides%20support%20to%20search%20inside%20array%20values%20(optional)%0A%20%20%20%20enableSearch:%20boolean%20-%20default%20value%20is%20true%20//%20Turn%20on/off%20search%20for%20this%20column%20(optional)%0A%20%20%20%20keyPath%20:%20string%5B%5D%20-%20allows%20you%20to%20use%20multiple%20indexing%20//%20optional%20%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EFor%20all%20data%20types%20see%20this%20link%20-%20%3Ca%20href=%22/tutorial/enums/%22%3EDataType%3C/a%3E%3C/p%3E%0A%3Cp%3EColumn%20in%20jsstore%20can%20be%20created%20by%20two%20way%20-%20%3C/p%3E%0A%3Col%3E%0A%3Cli%3EJSON%20object%20-%20%3C/li%3E%0A%3C/ol%3E%0A%3Cpre%3E%3Ccode%3Evar%20column=%7B%0A%20%20%20%20name:'column_name',%0A%20%20%20%20autoIncrement:true,%0A%20%20%20%20dataType:'data_type'%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Col%20start=%222%22%3E%0A%3Cli%3EClass%20Instance%20-%20This%20is%20way%20to%20create%20column%20in%20less%20amount%20of%20code.%3C/li%3E%0A%3C/ol%3E%0A%3Cpre%3E%3Ccode%3Evar%20column=new%20JsStore.Column(%22column_name%22).options(%5BCOL_OPTION.AutoIncrement%5D).setDataType('datatype')%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%3E*%20'options'%20-%20It%20takes%20array%20of%20column%20options%20:%20PrimaryKey,%20AutoIncrement,%20Unique,%20NotNull,%20MultiEntry%20and%20set%20the%20specified%20options%20as%20true.%0A%0A%20%20%20%20%20**Note%20:-**%20If%20supplied%20invalid%20value%20-%20option%20is%20ignored.%0A%0A*%20'setDataType'%20-%20It%20is%20used%20to%20set%20the%20data%20type%20of%20column.%0A*%20'disableSearch'%20-%20It%20disables%20the%20search%20on%20the%20column.%0A*%20'setDefault'%20-%20It%20is%20used%20to%20set%20the%20default%20value%20of%20column.%0A%3C/code%3E%3C/pre%3E`;
  title="Table";
  keywords="column, api, query, indexeddb, jsstore";
}
</script>
