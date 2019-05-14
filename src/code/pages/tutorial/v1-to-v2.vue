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
  tutorialContent = `%3Cp%3EMigrating%20from%20V1%20to%20V2%20is%20very%20easy%20-%3C/p%3E%0A%3Col%3E%0A%3Cli%3E%3Cp%3EJsStore%20V2%20now%20follows%20standard%20javascript%20coding%20style%20while%20v1%20was%20not%20-%20so%20you%20need%20to%20change%20codes%20as%20per%20V2.%3C/p%3E%0A%3Cp%3Ee.g%20-%20%0Aselect%20code%20in%20V1%20was%20like%20this%20:%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eselect(%7B%0A%20%20%20%20From:'table_name',%0A%20%20%20%20Where:%7B%0A%20%20%20%20%20%20%20%20Column_Name:'Value'%0A%20%20%20%20%7D%0A%7D)%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ESame%20code%20in%20v2%20will%20be%20little%20change%20:%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eselect(%7B%0A%20%20%20%20from:'table_name',%0A%20%20%20%20where:%7B%0A%20%20%20%20%20%20%20%20Column_Name:'Value'%0A%20%20%20%20%7D%0A%7D)%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EAs%20you%20can%20see%20-%20'From'%20is%20changed%20to%20'from'%20and%20'Where'%20is%20changed%20to%20'where'.%20To%20make%20it%20fast%20you%20can%20use%20replace%20function%20of%20your%20edior.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3ECopy%20and%20call%20below%20code%20before%20you%20call%20any%20jsstore%20code%20-%20%3C/p%3E%0A%3Cp%3ECopy%20this%20code%3C/p%3E%0A%3Cpre%3E%3Ccode%3E%20//%20dbName-%20Name%20of%20database%0A//%20dbSchema%20-%20database%20schema%20in%20V2%20Format%0Afunction%20setDbSchemaForV2(dbName,%20dbSchema)%20%7B%0A%20%20%20%20return%20new%20Promise(function(resolve,%20reject)%20%7B%0A%20%20%20%20%20%20%20%20connection.getDbSchema(dbName).then(function(result)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20In%20JsStore%20V1%20db%20was%20stored%20in%20different%20structure%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(result._name)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20connection.set(%22JsStore_%22%20+%20dbName%20+%20%22_Schema%22,%20dbSchema).then(function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve();%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D).catch(function(err)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20reject(err)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resolve();%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D).catch(function(err)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20reject(err)%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%7D);%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ECall%20first%20this%20code%20before%20any%20jsstore%20code%3C/p%3E%0A%3Cpre%3E%3Ccode%3EsetDbSchemaForV2(dbName,dbSchema).then(function()%7B%0A%0A%7D).catch(function(err)%7B%0A%0A%7D)%0A%3C/code%3E%3C/pre%3E%3C/li%3E%0A%3C/ol%3E%0A%3Cp%3EThat's%20all%20you%20need%20to%20do.%20Now%20every%20thing%20should%20work%20as%20normal.%3C/p%3E`;
  title="Migrating from v1 to v2";
  keywords="migrate, v1, v2, indexeddb, jsstore";
}
</script>
