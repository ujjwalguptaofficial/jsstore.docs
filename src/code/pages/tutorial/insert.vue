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
  tutorialContent = `%3Cp%3EThe%20Insert%20api%20is%20used%20to%20insert%20new%20records%20in%20a%20table.%3C/p%3E%0A%3Ch4%20id=%22sql%22%3ESql%3C/h4%3E%0A%3Cpre%3E%3Ccode%3EINSERT%20INTO%20TABLE_NAME%0A(column1,%20column2,%20column3,...columnN)%0AVALUES%0A(value1,%20value2,%20value3,...valueN);%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22jsstore%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3Evar%20value%20=%20%7B%0A%20%20%20%20column1:%20value1,%0A%20%20%20%20column2:%20value2,%0A%20%20%20%20column3:%20value3,%0A%20%20%20%20...%0A%20%20%20%20columnN:%20valueN%0A%7D;%0A%0Avar%20noOfRowsInserted%20=%20await%20connection.insert(%7B%0A%20%20%20%20into:%20%22TABLE_NAME%22,%0A%20%20%20%20values:%20%5BValue%5D,%20//you%20can%20insert%20multiple%20values%20at%20a%20time%0A%7D);%0Aif%20(noOfRowsInserted%20&gt;%200)%20%7B%0A%20%20%20%20alert('Successfully%20Added');%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EInsert%20api%20has%20following%20options%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3Einto%20:%20string%20//%20table%20name%3C/li%3E%0A%3Cli%3Evalues:%20Array%20//%20values%20to%20insert%3C/li%3E%0A%3Cli%3Ereturn?:%20Boolean%20//%20Return%20the%20inserted%20record.%20Default%20value%20is%20false.This%20is%20useful%20in%20case%20-%20you%20want%20the%20autoincrement%20column%20value.%3C/li%3E%0A%3Cli%3EskipDataCheck?:%20Boolean%20//%20Whether%20to%20check%20or%20not%20supplied%20data.%20Default%20value%20is%20false.%20If%20supplied%20true,%20this%20will%20directly%20insert%20data%20without%20checking%20any%20thing%20like%20datatype,%20auto%20increment%20etc.%20This%20is%20useful%20in%20case%20-%20where%20you%20want%20to%20insert%20huge%20record%20at%20a%20time.%3C/li%3E%0A%3Cli%3Eupsert?:%20boolean;%20//%20Update%20data%20if%20exist%20otherwise%20insert%20%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3Cstrong%3ENote%20:-%3C/strong%3E%20You%20can%20also%20insert%20column,%20which%20you%20have%20not%20defined%20in%20db.%20JsStore%20preserves%20the%20NoSql%20functionality%20of%20IndexedDb.%3C/p%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22/example/insert%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Insert";
  keywords="insert, api, query, indexeddb, jsstore";
}
</script>
