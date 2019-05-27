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
  tutorialContent = `%3Cp%3EDefine%20your%20Table%20Object%20and%20add%20an%20extra%20property%20'version'%20with%20a%20value%20greater%20than%20Db%20Version%20and%20call%20api%20'isDbExit'%20supplying%20table%20details%20(check%20out%20example).%20You%20can%20get%20Db%20version%20by%20using%20below%20code.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.getDbVersion(db_name).then(function(version)%20%7B%0A%20%20%20%20console.log(version)%0A%7D)%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EThe%20above%20code%20is%20for%20only%20development%20purpose.%20Dont%20execute%20this%20code%20to%20increase%20Db%20Version.%20You%20will%20have%20to%20specify%20the%20value%20manually.%3C/p%3E%0A%3Cp%3E%3Cstrong%3ENote%20:-%3C/strong%3E%20Doing%20this%20will%20delete%20all%20data%20from%20browser%20for%20the%20particular%20table.%3C/p%3E%0A%3Cp%3EIf%20you%20want%20to%20save%20your%20data.You%20can%20select%20all%20data%20and%20save%20it%20in%20a%20variable.%20When%20your%20new%20db%20schema%20is%20created%20,%20inserts%20all%20data%20into%20new%20table.%3C/p%3E%0A%3Ch4%20id=%22example%22%3EExample%3C/h4%3E%0A%3Cp%3EChange%20the%20version%20in%20your%20table%20schema%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20table1%20=%20%7B%0A%20%20%20%20name:%20%22table_name%22,%0A%20%20%20%20columns:%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20%22column1%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20dataType:%20'datatype'%0A%20%20%20%20%20%20%20%20%20%20%20%20primaryKey:%20true%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20%22column2%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20dataType:%20'datatype'%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20.....%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20%22columnN%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20dataType:%20'datatype'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D,%0A%20%20%20%20version:%202%20//Default%20version%20is%201.%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/change%2520table%2520schema%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Change Table Design";
  keywords="change table, api, query, indexeddb, jsstore";
}
</script>
