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
  tutorialContent = `%3Cp%3EA%20database%20in%20JsStore%20is%20array%20of%20tables.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20database%20=%20%7B%0A%20%20%20%20name:%20%22database%20name%22,%0A%20%20%20%20tables:%20%5Btable1,%20table2,%20table3%5D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20you%20have%20successfully%20defined%20Database,%20lets%20create%20the%20database%20in%20browser.%3C/p%3E%0A%3Cp%3EJsStore%20executes%20everything%20in%20worker.%20So%20we%20need%20to%20supply%20worker%20instance%20for%20initiating%20the%20jsstore.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20connection%20=%20new%20JsStore.Instance(new%20Worker('jsstore%20worker%20location'));%0Avar%20isDbCreated%20=%20await%20connection.initDb(Database);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EWhen%20Db%20is%20already%20created.%20You%20can%20open%20the%20connection%20using%20%3Cstrong%3EopenDb%3C/strong%3E.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20connection%20=%20new%20JsStore.Instance(new%20Worker('jsstore%20worker%20location'));%0Aawait%20connection.openDb(Database_Name);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EJsStore%20provides%20%3Cstrong%3EisDbExist%3C/strong%3E%20api%20to%20check%20whether%20database%20is%20created%20or%20not.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eawait%20isExist%20=%20connection.isDbExist(db_name);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cstrong%3ENote%20:-%3C/strong%3E%20%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EYou%20dont%20need%20to%20open%20the%20db%20multiple%20times.%20Declare%20it%20one%20time%20at%20page%20load%20and%20use%20it%20always.%3C/li%3E%0A%3Cli%3EAt%20a%20time%20one%20db%20can%20be%20handled%20by%20one%20jsstore%20instance.%20So%20if%20you%20want%20to%20open%20multiple%20db,%20create%20multiple%20instance.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3EIf%20you%20are%20finding%20difficult%20to%20understand,%20please%20take%20a%20look%20at%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples%22%3Eexamples%3C/a%3E%20or%20our%20%3Ca%20href=%22https://medium.com/jsstore%22%3Emedium%20page%3C/a%3E%20%3C/p%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="DataBase";
  keywords="database, api, query, indexeddb, jsstore";
}
</script>
