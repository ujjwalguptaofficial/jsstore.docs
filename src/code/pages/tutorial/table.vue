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
  tutorialContent = `%3Cp%3ETable%20in%20JsStore%20is%20an%20object%20which%20contains%20columns.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20table1%20=%20%7B%0A%20%20%20%20name:%20%22table_name%22,%0A%20%20%20%20columns:%20%7B%0A%20%20%20%20%20%20%20%20column1:%20%7B%20dataType:%20'datatype',%20primaryKey:%20true%20%7D,%0A%20%20%20%20%20%20%20%20column2%20:%20%7B%20dataType:%20'datatype'%7D,%0A%20%20%20%20%20%20%20%20.....%20,%0A%20%20%20%20%20%20%20%20columnN:%20%7B%20dataType:%20'datatype'%20%7D%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENote%20:-%20We%20strongly%20recommend%20to%20create%20a%20primary%20key%20for%20every%20table.%3C/p%3E%0A%3Cp%3EAbove%20Syntax%20is%20good%20and%20clear%20but%20when%20there%20are%20lots%20of%20tables%20-%20codes%20becomes%20large%20and%20messy.%20So%20JsStore%20provides%20another%20approach%20to%20create%20column.%3C/p%3E%0A%3Cp%3EFor%20more%20information%20about%20column%20-%20please%20check%20%3Ca%20href=%22/tutorial/column%22%3Ecolumn%3C/a%3E%20doc.%3C/p%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Table";
  keywords="table, api, query, indexeddb, jsstore";
}
</script>
