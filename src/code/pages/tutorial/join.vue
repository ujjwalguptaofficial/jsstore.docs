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
  tutorialContent = `%3Cp%3EJsStore%20supports%20two%20joins%20-%20Inner%20&amp;%20Left.%3C/p%3E%0A%3Ch4%20id=%22sqlinnerjoinbetweentwotables%22%3ESql%20(inner%20join%20between%20two%20tables)%3C/h4%3E%0A%3Cpre%3E%3Ccode%3ESelect%20*%20From%20Table1;%0AInner%20Join%20Table2%0AOn%20Table1.common_field%20=%20Table2.common_field%0AWhere%0ATable1.Column1=some_value%0AAnd%0ATable2.Column1=some_another_value%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22jsstore%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3Evar%20results%20=%20await%20connection.select(%7B%0A%20%20%20%20from:%20table1%20name,%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20%5Bcolumn%20name%5D:%20some%20value%0A%20%20%20%20%7D,%0A%20%20%20%20join:%20%7B%0A%20%20%20%20%20%20%20%20with:%20table2_name,%0A%20%20%20%20%20%20%20%20on:%20%22table1.common_field=table2.common_field%22,%0A%20%20%20%20%20%20%20%20type:%22inner%22,%0A%20%20%20%20%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%5Bcolumn%20name%5D:%20some%20value%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D);%0Aconsole.log(results);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cstrong%3ENote%20:-%3C/strong%3E%20you%20can%20also%20use%20-%20WhereIn,%20Skip,%20Order%20By%20and%20limit%20just%20like%20where%20has%20been%20used%20in%20the%20above%20example.%3C/p%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22/example/simple-join%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E%0A%3Ch4%20id=%22sqlinnerjoinbetweenthreetables%22%3ESql%20(inner%20join%20between%20three%20tables)%3C/h4%3E%0A%3Cpre%3E%3Ccode%3ESelect%20*%20From%20Table1;%0AInner%20Join%20Table2%0AOn%20Table1.common_field%20=%20Table2.common_field%0AInner%20Join%20Table3%0AOn%20Table1.some_column%20=%20Table3.some_common_column%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22jsstore-1%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3Evar%20results%20=%20await%20connection.select(%7B%0A%20%20%20%20from:%20table1_name,%0A%20%20%20%20join:%5B%7B%0A%20%20%20%20%20%20%20%20with:table2_name,%0A%20%20%20%20%20%20%20%20on:%20%22table1.common_field=table2.common_field%22%0A%20%20%20%20%7D,%7B%0A%20%20%20%20%20%20%20%20with:table3_name,%0A%20%20%20%20%20%20%20%20on:%20%22table1.common_field=table3.common_field%22%0A%20%20%20%20%7D%5D%0A%7D);%0Aconsole.log(results);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22/example/multiple-table-join%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Join";
  keywords="indexeddb, join, left, inner, jsstore";
}
</script>
