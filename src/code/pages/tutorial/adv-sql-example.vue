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
  tutorialContent = `%3Cp%3EThese%20are%20some%20examples%20of%20common%20use%20cases%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cstrong%3ESQL%3C/strong%3E%20-%20Select%20*%20from%20Table_Name%20where%20Column1=value1%20or%20Column2=value2%20or%20Column3=value3;%3C/li%3E%0A%3C/ul%3E%0A%3Cpre%3E%3Ccode%3Econnection.select(%7B%0A%20%20%20%20from:%20%22Table_Name%22,%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20Column1:%20value1,%0A%20%20%20%20%20%20%20%20or:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Column2:%20value2,%0A%20%20%20%20%20%20%20%20%20%20%20%20Column3:%20value3%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cul%3E%0A%3Cli%3E%3Cstrong%3ESQL%3C/strong%3E%20-%20Select%20*%20from%20Table_Name%20where%20Column1=value1%20and%20(Column2=value2%20or%20Column3=value3);%3C/li%3E%0A%3C/ul%3E%0A%3Cpre%3E%3Ccode%3Econnection.select(%7B%0A%20%20%20%20from:%20%22Table_Name%22,%0A%20%20%20%20where:%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Column1:%20value1%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Column2:%20value2,%0A%20%20%20%20%20%20%20%20%20%20%20%20or:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Column3:%20value3%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cul%3E%0A%3Cli%3E%3Cstrong%3ESQL%3C/strong%3E%20-%20Select%20*%20from%20Table_Name%20where%20Column1=value1%20or%20(Column2=value2%20and%20Column3=value3);%3C/li%3E%0A%3C/ul%3E%0A%3Cpre%3E%3Ccode%3Econnection.select(%7B%0A%20%20%20%20from:%20%22Table_Name%22,%0A%20%20%20%20where:%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Column1:%20value1%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20or:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Column2:%20value2,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Column3:%20value3%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EHope%20these%20examples%20will%20help%20you%20to%20write%20more%20complex%20queries.%20If%20you%20are%20not%20able%20to%20understand%20or%20write%20some%20complex%20queries%20-%20ask%20at%20stackoverflow%20mentioning%20jsstore%20and%20indexeddb.%3C/p%3E`;
  title="Advanced Sql Example";
  keywords="advanced sql, example, indexeddb, jsstore";
}
</script>
