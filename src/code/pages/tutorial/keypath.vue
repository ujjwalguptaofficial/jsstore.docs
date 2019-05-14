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
  tutorialContent = `%3Cp%3EkeyPath%20is%20a%20option%20in%20column.%20It%20is%20used%20to%20add%20multiple%20index,%20so%20that%20query%20execution%20can%20be%20made%20faster.%20It%20takes%20an%20array%20of%20type%20string.%3C/p%3E%0A%3Cp%3EIt%20is%20helpful%20in%20case%20-%20when%20you%20have%20large%20amount%20of%20data%20&amp;%20its%20taking%20long%20time.%3C/p%3E%0A%3Cp%3Ee.g%20-%20Lets%20take%20a%20table%20name%20with%20cities%20having%20column%20pinCodes%20&amp;%20name%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20table%20=%20%7B%0A%20%20%20%20name:%20'cities',%0A%20%20%20%20columns:%20%5B%7B%0A%20%20%20%20%20%20%20%20name:%20'cityName'%0A%20%20%20%20%7D,%20%7B%0A%20%20%20%20%20%20%20%20name:%20'pincCodes'%0A%20%20%20%20%7D%5D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EWe%20want%20to%20query%20on%20pincodes%20&amp;%20name%20so%20a%20select%20query%20will%20be%20like%20this%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.select(%7B%0A%20%20%20%20from:%20'cities',%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20pinCodes:%2012345,%0A%20%20%20%20%20%20%20%20name:%20'london'%0A%20%20%20%20%7D%0A%7D)%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20lets%20define%20the%20table%20using%20keyPath%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20table%20=%20%7B%0A%20%20%20%20name:%20'cities',%0A%20%20%20%20columns:%20%5B%7B%0A%20%20%20%20%20%20%20%20name:%20'cityName'%0A%20%20%20%20%7D,%20%7B%0A%20%20%20%20%20%20%20%20name:%20'pincCodes'%0A%20%20%20%20%7D,%7B%0A%20%20%20%20%20%20%20%20name:'cityPincodes',%0A%20%20%20%20%20%20%20%20keyPath:%5B'cityName','pinCodes'%5D%0A%20%20%20%20%7D%5D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3Eand%20now%20new%20query%20can%20be%20written%20as%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.select(%7B%0A%20%20%20%20from:%20'cities',%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20cityPincodes:%20%5B'london',12345%5D%20//%20order%20of%20values%20should%20be%20same%20as%20what%20has%20been%20defined%20in%20keyPath%0A%20%20%20%20%7D%0A%7D)%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENote%20:-%20Please%20compare%20between%20query%20execution%20time%20if%20there%20is%20no%20difference%20or%20very%20less%20then%20dont%20use%20keyPath.%20Adding%20multiple%20index%20will%20increase%20the%20db%20size%20which%20is%20limited%20for%20users.%3C/p%3E`;
  title="keyPath";
  keywords="keypath, column, indexing, indexeddb, jsstore";
}
</script>
