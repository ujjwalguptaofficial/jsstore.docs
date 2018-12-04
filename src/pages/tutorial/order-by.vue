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
  tutorialContent = `%3Cp%3EOrder%20By%20is%20used%20to%20sort%20the%20data%20in%20ascending%20or%20descending%20order,%20based%20on%20any%20column.%3C/p%3E%0A%3Ch4%20id=%22sql%22%3ESql%3C/h4%3E%0A%3Cpre%3E%3Ccode%3ESelect%20*%20from%20Table_Name%20Order%20by%20column_name%20sort_type;%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22jsstore%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3Econnection.select(%7B%0A%20%20%20%20from:%20%22Table_Name%22,%0A%20%20%20%20order:%20%7B%0A%20%20%20%20%20%20%20%20by:%20column_name,%0A%20%20%20%20%20%20%20%20type:%20sort_type%20//supprted%20sort%20type%20is%20-%20asc,desc%0A%20%20%20%20%7D%0A%7D).then(function(results)%20%7B%0A%20%20%20%20//results%20will%20be%20array%20of%20objects.%0A%20%20%20%20console.log(results);%0A%7D).catch(function(error)%20%7B%0A%20%20%20%20alert(error.message);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EOption%20order%20is%20of%20type%20-%20OrderQuery%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Etype%20OrderQuery%20=%20%7B%0A%20%20%20%20/**%0A%20%20%20%20%20*%20sorting%20column%20name%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Bstring%7D%0A%20%20%20%20%20*/%0A%20%20%20%20by:%20string;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20sorting%20type%20-%20asc/desc%0A%20%20%20%20%20*%0A%20%20%20%20%20*%20@type%20%7Bstring%7D%0A%20%20%20%20%20*/%0A%20%20%20%20type:%20string;%0A%0A%20%20%20%20/**%0A%20%20%20%20%20*%20whether%20to%20do%20sorting%20by%20indexeddb%20or%20by%20jsstore%0A%20%20%20%20%20*%20default%20-%20true%0A%20%20%20%20%20*%20@type%20%7Bboolean%7D%0A%20%20%20%20%20*/%0A%20%20%20%20idbSorting:%20boolean%0A%7D;%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22/example/order-by%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Order By";
}
</script>
