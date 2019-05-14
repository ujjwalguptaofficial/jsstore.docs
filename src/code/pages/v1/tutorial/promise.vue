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
  tutorialContent = `%3Cp%3EJsStore%20provides%20two%20options%20for%20returning%20results%20-%20OnSuccess%20and%20OnError%20either%20as%20query%20or%20as%20callback.%20Some%20developers%20dont%20like%20to%20use%20callback%20and%20prefers%20promise.%20Thats%20why%20JsStore%20also%20provides%20Promise%20support.%3C/p%3E%0A%3Cp%3EJsStore%20returns%20promise%20when%20you%20dont%20specify%20the%20OnSuccess%20function.%20Lets%20take%20a%20look%20at%20below%20query%20-%3C/p%3E%0A%3Cpre%3E%3Ccode%3EConnection.select(%7B%0A%20%20%20%20From:%20%22Table_Name%22,%0A%7D).then(function(results)%20%7B%0A%20%20%20%20console.log(results);%0A%7D).catch(function(error)%20%7B%0A%20%20%20%20alert(error._message);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22/example/promise%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E`;
  title="Promise";
}
</script>
