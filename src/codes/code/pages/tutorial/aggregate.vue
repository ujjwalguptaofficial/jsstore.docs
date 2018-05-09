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
  tutorialContent = `%3Cp%3EJsStore%20supports%20following%20aggregate%20functions%20:%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cstrong%3ECount%20:%3C/strong%3E%20Returns%20the%20number%20of%20rows%20of%20specified%20column.%3C/li%3E%0A%3Cli%3E%3Cstrong%3ESum%20:%3C/strong%3E%20Returns%20the%20total%20sum%20of%20numeric%20column.%3C/li%3E%0A%3Cli%3E%3Cstrong%3EAvg%20:%3C/strong%3E%20Returns%20the%20average%20value%20of%20numeric%20column.%3C/li%3E%0A%3Cli%3E%3Cstrong%3EMax%20:%3C/strong%3E%20Returns%20the%20maximum%20value%20of%20specified%20column.%3C/li%3E%0A%3Cli%3E%3Cstrong%3EMin%20:%3C/strong%3E%20Returns%20the%20minimum%20value%20of%20specified%20column.%3C/li%3E%0A%3C/ul%3E%0A%3Ch4%20id=%22sql%22%3ESql%3C/h4%3E%0A%3Cpre%3E%3Ccode%3ESelect%20min(Column%5C_Name)%20From%20Table%5C_Name;%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22jsstore%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3EConnection.select(%7B%0A%20%20%20%20From:%20%22Table_Name%22,%0A%20%20%20%20Aggregate:%20%7B%0A%20%20%20%20%20%20%20%20Min:%20Column_Name,%0A%20%20%20%20%20%20%20%20//%20You%20can%20specify%20multiple%20columns%20at%20a%20time%20by%20giving%20the%20columns%20name%20in%20an%20array.%0A%20%20%20%20%20%20%20%20//%20Count:%5B'column1','column2'%5D%0A%20%20%20%20%7D,%0A%20%20%20%20OnSuccess:%20function(results)%20%7B%0A%20%20%20%20%20%20%20%20//aggregate%20result%20will%20be%20in%20the%20first%20index%20only.%0A%20%20%20%20%20%20%20%20console.log(results%5B0%5D);%0A%20%20%20%20%7D,%0A%20%20%20%20OnError:%20function(error)%20%7B%0A%20%20%20%20%20%20%20%20alert(error.value);%0A%20%20%20%20%7D%0A%7D);%0A%3C/code%3E%3C/pre%3E`;
  title="Aggregate Functions";
}
</script>
