<template>
<Tutorial v-bind:innerHtml="tutorialContent" v-bind:pageTitle="title"></Tutorial>
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
  tutorialContent = `%3Ch4%20id=%22setlogstatus%22%3EsetLogStatus%3C/h4%3E%0A%3Cp%3EIt%20sets%20the%20status%20of%20log.%20When%20supplied%20true%20-%20JsStore%20logs%20query%20flow%20in%20console.%20This%20is%20helpful%20in%20debugging.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.setLogStatus(true);%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22getdbversion%22%3EgetDbVersion%3C/h4%3E%0A%3Cp%3EIt%20returns%20the%20current%20Database%20version.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.getDbVersion(db_name).then(function(version)%20%7B%0A%20%20%20%20console.log(version)%0A%7D)%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22getdbschema%22%3EgetDbSchema%3C/h4%3E%0A%3Cp%3EIt%20returns%20the%20Database%20Schema.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.getDbSchema(db_name).then(function(schema)%20%7B%0A%20%20%20%20console.log(schema)%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22getdblist%22%3EgetDbList%3C/h4%3E%0A%3Cp%3EIt%20returns%20list%20of%20database%20created%20using%20jsstore.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.getDbList().then(function(result)%20%7B%0A%20%20%20%20console.log(result)%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22set%22%3Eset%3C/h4%3E%0A%3Cp%3EIt%20stores%20data%20in%20form%20of%20key%20and%20value%20in%20a%20special%20table.%20You%20can%20think%20of%20it%20is%20similar%20to%20localStorage%20but%20you%20can%20store%20every%20type%20of%20data%20using%20'set'%20which%20is%20not%20the%20case%20with%20localStorage%20(can%20be%20stored%20only%20string).%3C/p%3E%0A%3Cp%3ELets%20say%20you%20want%20to%20store%20user%20profile%20picture%20or%20may%20be%20some%20basic%20information,%20so%20that%20you%20can%20load%20it%20on%20page%20load.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20userInfo%20=%20%7B%0A%20%20%20%20name:%20'ujjwal%20gupta',%0A%20%20%20%20accountType:%20'super_admin',%0A%20%20%20%20profilePic:%20Blob%20Object%20//%20i%20am%20not%20creating%20it.%0A%0A%7D%0Aconnection.set(%22user_info%22,%20userInfo).then(function()%20%7B%0A%20%20%20%20console.log('value%20setted');%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22get%22%3Eget%3C/h4%3E%0A%3Cp%3EGet%20data%20from%20special%20table.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.get(%22user_info%22).then(function(userInfo)%20%7B%0A%20%20%20%20console.log(userInfo);%20%0A%7D);%0A%3C/code%3E%3C/pre%3E`;
  title="Helpers";
}
</script>
