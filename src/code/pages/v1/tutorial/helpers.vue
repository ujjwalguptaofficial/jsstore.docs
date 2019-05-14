<templateundefined>
<Tutorial v-bind:innerHtml="tutorialContent" v-bind:pageTitle="title"></Tutorial>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Tutorial from "../../../components/tutorial.vue";
@Component({
  components: {
    Tutorial
  }
})
export default class extends Vue {
  tutorialContent = `%3Ch4%20id=%22getdbversion%22%3EgetDbVersion%3C/h4%3E%0A%3Cp%3EIt%20returns%20the%20current%20Database%20version.%3C/p%3E%0A%3Cpre%3E%3Ccode%3EJsStore.getDbVersion(db_name,%20function(version)%20%7B%0A%20%20%20%20console.log(version)%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Ca%20href=%22/example/get_db_version%22%3EExample%3C/a%3E%3C/p%3E%0A%3Ch4%20id=%22getdbschema%22%3EgetDbSchema%3C/h4%3E%0A%3Cp%3EIt%20returns%20the%20current%20Database%20Schema.%3C/p%3E%0A%3Cpre%3E%3Ccode%3EJsStore.getDbSchema(db_name,%20function(schema)%20%7B%0A%20%20%20%20console.log(schema)%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22isnull%22%3EisNull%3C/h4%3E%0A%3Cp%3ECheck%20whether%20supplied%20value%20is%20null%20or%20not.%3C/p%3E%0A%3Cpre%3E%3Ccode%3EJsStore.isNull(value)%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22enablelog%22%3EenableLog%3C/h4%3E%0A%3Cp%3EIt%20enables%20the%20log%3C/p%3E%0A%3Cpre%3E%3Ccode%3EJsStore.enableLog()%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22disablelog%22%3EdisableLog%3C/h4%3E%0A%3Cp%3EIt%20disable%20the%20log%3C/p%3E%0A%3Cpre%3E%3Ccode%3EJsStore.disableLog()%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22getdblist%22%3EgetDbList%3C/h4%3E%0A%3Cp%3EIt%20returns%20list%20of%20database%20created%20using%20jsstore.%3C/p%3E%0A%3Cpre%3E%3Ccode%3EJsStore.getDbList(function(result)%20%7B%0A%20%20%20%20console.log(result)%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22gettype%22%3EgetType%3C/h4%3E%0A%3Cp%3EIt%20returns%20type%20of%20data.%3C/p%3E%0A%3Cpre%3E%3Ccode%3EJsStore.getType(%22hi%22);%20//%20It%20should%20return%20string%0AJsStore.getType(true);%20//%20It%20should%20return%20boolean%0A%3C/code%3E%3C/pre%3E`;
  title="Helpers";
}
</script>
