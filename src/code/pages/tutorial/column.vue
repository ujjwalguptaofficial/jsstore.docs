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
  tutorialContent = `%3Cp%3EColumns%20in%20jsstore%20is%20an%20object%20where%20column%20name%20is%20key%20&amp;%20column%20options%20are%20values.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20columns%20=%20%7B%0A%20%20%20%20%5Bcolumn%20name%5D:%20%7B%7D%20%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ELet's%20see%20an%20example%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20columns%20=%20%7B%0A%20%20%20%20Id:%7B%20primaryKey:%20true,%20autoIncrement:%20true%20%7D,%0A%20%20%20%20ItemName:%20%20%7B%20notNull:%20true,%20dataType:%20%22string%22%20%7D,%0A%20%20%20%20Price:%20%20%7B%20notNull:%20true,%20dataType:%20%22number%22%20%7D,%0A%20%20%20%20Quantity%20:%20%7B%20notNull:%20true,%20dataType:%20%22number%22%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EA%20column%20has%20following%20properties%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3EprimaryKey:%20boolean,%20//%20declare%20this%20column%20as%20primary%20key%20(optional)%0A//%20We%20strongly%20recommend%20to%20create%20the%20primary%20keys%20(optional)%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EnotNull:%20boolean,%20//%20ensure%20this%20column%20value%20should%20not%20be%20null%20(optional)%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EdataType:%20JsStore.DATA_TYPE,%20//%20datatype%20of%20this%20column%20(optional)%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cstrong%3ENote:-%3C/strong%3E%20do%20not%20use%20data%20type%20boolean,%20if%20you%20want%20to%20filter%20on%20that%20column.%20For%20more%20info,check%20out%20-%20https://stackoverflow.com/questions/48149851/failed-to-execute-only-on-idbkeyrange-the-parameter-is-not-a-valid-key/48179792#48179792%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3EautoIncrement:%20boolean,%20//%20automatically%20increment%20value%20(optional)%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3Eunique:%20boolean%20//%20This%20column%20will%20have%20unique%20value%20(optional)%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3Edefault:%20any,%20//%20Provides%20a%20default%20value%20for%20a%20column%20when%20none%20is%20specified%20(optional)%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EmultiEntry:%20boolean,%20//%20Provides%20support%20to%20search%20inside%20array%20values%20(optional)%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EenableSearch:%20boolean%20-%20default%20value%20is%20true%20//%20Turn%20on/off%20search%20for%20this%20column%20(optional)%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EkeyPath%20:%20string%5B%5D%20-%20allows%20you%20to%20use%20multiple%20indexing%20//%20optional%20%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3EFor%20all%20data%20types%20see%20this%20link%20-%20%3Ca%20href=%22/tutorial/enums/%22%3EDataType%3C/a%3E%3C/p%3E`;
  title="Table";
  keywords="column, api, query, indexeddb, jsstore";
}
</script>
