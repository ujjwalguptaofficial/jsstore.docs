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
  tutorialContent = `%3Cp%3EMigrating%20from%20V2%20to%20V3%20is%20very%20easy%20-%20You%20just%20need%20to%20change%20the%20db%20schema%20as%20per%20v3.%3C/p%3E%0A%3Cp%3Ee.g%20-%20schema%20of%20v2%20looks%20like%20this%3C/p%3E%0A%3Cpre%3E%3Ccode%3Efunction%20getDbSchema()%20%7B%0A%20%20var%20tblProduct%20=%20%7B%0A%20%20%20%20name:%20'Product',%0A%20%20%20%20columns:%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20'Id',%0A%20%20%20%20%20%20%20%20%20%20%20%20primaryKey:%20true,%0A%20%20%20%20%20%20%20%20%20%20%20%20autoIncrement:%20true%0A%20%20%20%20%20%20%20%20%7D,%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20'ItemName',%0A%20%20%20%20%20%20%20%20%20%20%20%20notNull:%20true,%0A%20%20%20%20%20%20%20%20%20%20%20%20dataType:%20JsStore.DATA_TYPE.String%0A%20%20%20%20%20%20%20%20%7D,%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20'Price',%0A%20%20%20%20%20%20%20%20%20%20%20%20notNull:%20true,%0A%20%20%20%20%20%20%20%20%20%20%20%20dataType:%20JsStore.DATA_TYPE.Number%0A%20%20%20%20%20%20%20%20%7D,%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20'Quantity',%0A%20%20%20%20%20%20%20%20%20%20%20%20notNull:%20true,%0A%20%20%20%20%20%20%20%20%20%20%20%20dataType:%20JsStore.DATA_TYPE.Number%0A%20%20%20%20%20%20%20%20%7D%5D%20%20%20%0A%20%20%20%20%7D;%0A%20%20%20%20var%20db%20=%20%7B%0A%20%20%20%20%20%20name:%20dbName,%0A%20%20%20%20%20%20tables:%5BtblProduct%5D%0A%20%20%20%20%7D;%0A%20%20%20%20return%20db;%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3Enow%20we%20need%20to%20convert%20the%20schema%20as%20per%20v3%3C/p%3E%0A%3Cpre%3E%3Ccode%3Efunction%20getDbSchema()%20%7B%0A%20%20var%20tblProduct%20=%20%7B%0A%20%20%20%20name:%20'Product',%0A%20%20%20%20columns:%20%20%7B%0A%20%20%20%20%20%20%20%20Id:%7B%20primaryKey:%20true,%20autoIncrement:%20true%20%7D,%0A%20%20%20%20%20%20%20%20ItemName:%20%20%7B%20notNull:%20true,%20dataType:%20%22string%22%20%7D,%0A%20%20%20%20%20%20%20%20Price:%20%20%7B%20notNull:%20true,%20dataType:%20%22number%22%20%7D,%0A%20%20%20%20%20%20%20%20Quantity%20:%20%7B%20notNull:%20true,%20dataType:%20%22number%22%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20var%20db%20=%20%7B%0A%20%20%20%20%20%20name:%20dbName,%0A%20%20%20%20%20%20tables:%5BtblProduct%5D%0A%20%20%20%20%7D;%0A%20%20%20%20return%20db;%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EThat's%20all%20you%20need%20to%20do%20&amp;%20everything%20should%20work%20as%20normal.%3C/p%3E`;
  title="Migrating from v1 to v2";
  keywords="migrate, v1, v2, indexeddb, jsstore";
}
</script>
