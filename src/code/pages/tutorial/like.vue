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
  tutorialContent = `%3Cp%3ELike%20is%20used%20with%20Where%20to%20search%20for%20a%20specified%20pattern%20in%20a%20column.%20Currently%20We%20support%20only%20'%25'%20character.%3C/p%3E%0A%3Cp%3ESome%20Examples%20of%20Like%20supported%20by%20JsStore%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cstrong%3ELike%20'a%25'%20:%3C/strong%3E%20Finds%20any%20values%20that%20starts%20with%20%22a%22.%3C/li%3E%0A%3Cli%3E%3Cstrong%3ELike%20'%25a'%20:%3C/strong%3E%20Finds%20any%20values%20that%20ends%20with%20%22a%22.%3C/li%3E%0A%3Cli%3E%3Cstrong%3ELike%20'%25a%25'%20:%3C/strong%3E%20Finds%20any%20values%20that%20contains%20%22a%22%20at%20any%20position.%3C/li%3E%0A%3C/ul%3E%0A%3Ch4%20id=%22sql%22%3ESql%3C/h4%3E%0A%3Cpre%3E%3Ccode%3ESelect%20*%20From%20Table_Name;%0AWhere%0AColumn_Name%20Like%20'a%25'%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22jsstore%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3Evar%20results%20=%20await%20connection.select(%7B%0A%20%20%20%20from:%20%22Table_Name%22,%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20Column_Name:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20like:%20'a%25'%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%7D%0A%7D);%0A//results%20will%20be%20array%20of%20objects.%0Aconsole.log(results);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22/example/like%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Like";
  keywords="like, filter, query, indexeddb, jsstore";
}
</script>
