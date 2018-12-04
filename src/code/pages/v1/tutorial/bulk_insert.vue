<template>
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
  tutorialContent = `%3Cp%3EBulk%20insert%20is%20a%20special%20type%20of%20api%20for%20inserting%20large%20amount%20of%20data.%20It%20is%20much%20faster%20compared%20to%20insert%20api%20as%20it%20does%20not%20check%20and%20return%20any%20thing.%3C/p%3E%0A%3Cp%3E%3Cstrong%3EFew%20Points%20:-%3C/strong%3E%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EColumns%20options%20like%20-%20AutoIncrement,%20default%20etc.%20wont%20work.%3C/li%3E%0A%3Cli%3EIt%20does%20not%20guarantee%20that%20whole%20data%20has%20been%20inserted%20successfully%20or%20not.%3C/li%3E%0A%3Cli%3EYou%20should%20use%20this%20api%20-%20when%20you%20have%20very%20large%20amount%20of%20data%20(thousands%20of%20data)%20and%20want%20to%20insert%20into%20indexedDB.%3C/li%3E%0A%3Cli%3EIf%20you%20want%20to%20guarantee%20for%20successful%20of%20data%20insertion%20-%20then%20you%20should%20use%20insert%20with%20SkipDataCheck%20'true'.%3C/li%3E%0A%3C/ul%3E%0A%3Cpre%3E%3Ccode%3Evar%20Value%20=%20%7B%0A%20%20%20%20column1:%20value1%0A%20%20%20%20column2:%20value2%0A%20%20%20%20column3:%20value3%0A%20%20%20%20%20%20%20%20...%0A%20%20%20%20columnN:%20valueN%0A%7D;%0A%0AConnection.bulkInsert(%7B%0A%20%20%20%20Into:%20%22TABLE_NAME%22,%0A%20%20%20%20Values:%20%5BValue%5D,%20//you%20can%20insert%20multiple%20values%20at%20a%20time%0A%20%20%20%20OnSuccess:%20function()%20%7B%0A%20%20%20%20%20%20%20%20alert('Successfully%20Added');%0A%20%20%20%20%7D,%0A%20%20%20%20OnError:%20function(error)%20%7B%0A%20%20%20%20%20%20%20%20alert(error.value);%0A%20%20%20%20%7D%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Bulk Insert";
}
</script>
