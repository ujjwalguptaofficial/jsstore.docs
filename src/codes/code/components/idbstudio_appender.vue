<template>
<v-layout row wrap>
    <v-flex xs12>
        <iframe></iframe>
    </v-flex>
</v-layout>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
declare var document;
import DomHelper from "../helpers/dom_helper";
import { vueEvent } from "../common_var";

@Component({
  props: {
    innerHtml: String,
    pageTitle: String
  }
})
export default class IdbStudioAppender extends Vue {
  // props
  innerHtml;
  pageTitle;

  //member
  iframeUrl = "https://ujjwalguptaofficial.github.io/idbstudio";
  version = 2;

  constructor() {
    super();
  }

  head() {
    return {
      title: `Example - ${this.pageTitle}`
    };
  }

  mounted() {
    var $ = new DomHelper("iframe");
    $.css("height", $.innerHeight + "px");
    $.attr("src", this.url);
  }

  get url() {
    var url = this.iframeUrl;
    var $ = new DomHelper();
    var params = {
      query: encodeURI($.innerTextFromHtml(decodeURI(this.innerHtml))),
      db: "Demo"
    };

    var queryString = Object.keys(params)
      .map(key => key + "=" + params[key])
      .join("&");
    url += `/?${queryString}`;
    return url;
  }
}
</script>
<style>
iframe {
  width: 100%;
  height: 100%;
  border: none;
}
#footer,
.toolbar {
  display: none;
}
.container {
  padding: 0px;
  top: 0px;
  position: absolute;
}
.application--wrap {
  overflow: hidden;
}
</style>
