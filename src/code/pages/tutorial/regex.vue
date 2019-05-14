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
  tutorialContent = `%3Cp%3ERegex%20is%20used%20with%20Where%20to%20search%20for%20a%20specified%20pattern%20in%20a%20column.%20For%20more%20information%20about%20regex,%20visit%20%3Ca%20href=%22https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions%22%3Emozilla%20regular%20expression%20guide%3C/a%3E%3C/p%3E%0A%3Ch4%20id=%22jsstore%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3Econnection.select(%7B%0A%20%20%20%20from:%20'Customers',%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20Country:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20regex:%20/mexico%7Cbrazil/i%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D).then(function(results)%20%7B%0A%20%20%20%20//results%20will%20be%20array%20of%20objects.%0A%20%20%20%20console.log(results);%0A%7D).catch(function(error)%20%7B%0A%20%20%20%20alert(error.message);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%257B%250A%2520%2520%2520%2520from%253A%2520'Customers'%252C%250A%2520%2520%2520%2520where%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520country%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520regex%253A%2520%252Fmexico%257Cbrazil%252Fi%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%250A%257D)%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Regex";
  keywords="regex, api, query, indexeddb, jsstore";
}
</script>
