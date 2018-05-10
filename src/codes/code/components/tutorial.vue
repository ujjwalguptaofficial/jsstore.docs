<template>
<v-layout row wrap>
    <v-flex md2 class="hidden-sm-and-down" id="divMenuContainer">
<ul>
     <li class="search margin-bottom-10px">
       <v-card class="search-wrapper">
         <v-card-text>
            <input id="txtSearch" type="text" placeholder="Search">
            <i class="material-icons">search</i>
            <div class="search-results"></div>
         </v-card-text>
       </v-card>
       
    </li>
    <li v-for="link in links" :key="link.text" v-bind:class="{'link-active': link.url=== activeUrl}">
        <a :href="relativeUrl+link.url">{{link.text}}</a>
    </li>
</ul>
    </v-flex>
    <v-flex id="divTutorialContent" sm12 md9 l7 xl6 class="margin-left-15px">
    <div v-html="tutorialHtml" class="margin-top-20px"></div>
    </v-flex>
</v-layout>

</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import * as axios from "axios";
import DomHelper from "../helpers/dom_helper";
import { vueEvent } from "../common_var";

export interface ITutorialLink {
  text: string;
  url: string;
}
@Component({
  props: {
    innerHtml: String,
    pageTitle: String
  }
})
export default class Tutorial extends Vue {
  // props
  innerHtml: string;
  pageTitle: string;
  version: number = 2;

  //property
  activeUrl = "";

  constructor() {
    super();
    this.catchEvents();
  }

  catchEvents() {
    vueEvent.$on("version_change", this.onVersionChange);
  }

  mounted() {
    this.version = Number(this.getVersion());
    var currentUrl: string = (this.$route as any).path;
    this.links.every(value => {
      if (currentUrl.toLowerCase() === `/tutorial/${value.url.toLowerCase()}`) {
        this.activeUrl = value.url;
        return false;
      }
      return true;
    });
    this.registerNextBtnEvents();
  }

  registerNextBtnEvents() {
    var $ = new DomHelper(".btnNext");
    if ($.el) {
      $.el.onclick = this.onNextBtnClick.bind(this);
    }
  }

  head() {
    return {
      title: `JsStore - ${this.pageTitle}`
    };
  }

  getVersion(): string {
    const $ = new DomHelper("#selectVersions");
    return $.val();
  }

  onVersionChange(value: number) {
    this.version = value;
    const currentUrl: string = (this.$route as any).path;
    const nextUrl = this.relativeUrl + currentUrl.split("/").reverse()[0];
    this.$router.push(nextUrl);
  }

  get tutorialHtml() {
    return decodeURI(this.innerHtml);
  }

  get links() {
    const links = this.allLinks_;
    switch (this.version) {
      case 1:
        break;
      case 2:
        const linksToRemove = ["promise", "helpers"];
        return links.filter(
          value => linksToRemove.findIndex(qry => qry === value.url) < 0
        );
    }
    return links;
  }

  get allLinks_() {
    return [
      {
        text: "Get Started",
        url: "getstarted"
      },
      {
        text: "Installation",
        url: "installation"
      },
      {
        text: "Table",
        url: "table"
      },
      {
        text: "Database",
        url: "database"
      },
      {
        text: "insert",
        url: "insert"
      },
      {
        text: "Bulk Insert",
        url: "bulkinsert"
      },
      {
        text: "Select",
        url: "select"
      },
      {
        text: "Where",
        url: "where"
      },
      {
        text: "Ignore Case",
        url: "ignorecase"
      },
      {
        text: "Or",
        url: "or"
      },
      {
        text: "Limit",
        url: "limit"
      },
      {
        text: "Skip",
        url: "skip"
      },
      {
        text: "Order By",
        url: "orderby"
      },
      {
        text: "Aggregate",
        url: "aggregate"
      },
      {
        text: "Group By",
        url: "groupby"
      },
      {
        text: "Distinct",
        url: "distinct"
      },
      {
        text: "Update",
        url: "update"
      },
      {
        text: "Update with operators",
        url: "updatewithoperators"
      },
      {
        text: "Remove",
        url: "remove"
      },
      {
        text: "Count",
        url: "count"
      },
      {
        text: "Like",
        url: "like"
      },
      {
        text: "In",
        url: "in"
      },
      {
        text: "Operators",
        url: "operators"
      },
      {
        text: "Between",
        url: "between"
      },
      {
        text: "Join",
        url: "join"
      },
      {
        text: "Clear",
        url: "clear"
      },
      {
        text: "Drop Database",
        url: "dropdatabase"
      },
      {
        text: "Change Table Design",
        url: "changetabledesign"
      },
      {
        text: "Export Json",
        url: "exportjson"
      },
      {
        text: "Helpers",
        url: "helpers"
      },
      {
        text: "Promise",
        url: "promise"
      },
      {
        text: "Adv. Sql Example",
        url: "advsqlexample"
      },
      {
        text: "Enums",
        url: "enums"
      }
    ] as ITutorialLink[];
  }

  get relativeUrl() {
    switch (this.version) {
      case 1:
        return "/v1/tutorial/";
      case 2:
        return "/tutorial/";
      default:
        return "/";
    }
  }

  onNextBtnClick() {
    const currentUrl = (this.$route as any).path;
    var nextUrl;
    const relativeUrl = this.relativeUrl;
    this.links.every((value, index) => {
      if (currentUrl === relativeUrl + value.url) {
        nextUrl = relativeUrl + this.links[index + 1].url;
        return false;
      }
      return true;
    });
    if (nextUrl) {
      this.$router.push(nextUrl);
    }
  }
}
</script>
<style>
@import url("~/styles/tutorial.css");
</style>
