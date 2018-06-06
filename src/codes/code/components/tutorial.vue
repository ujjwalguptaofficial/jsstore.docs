<template>
<v-layout row wrap>
    <v-flex md2 class="hidden-sm-and-down" id="divMenuContainer" :class="{'show-menu':showMenu}">
        <ul>
            <li class="search margin-bottom-10px">
              <v-card class="search-wrapper">
                <v-card-text style="padding:5px;">
                    <input v-model="searchValue" id="txtSearch" type="text" placeholder="Search" 
                    @keyup="onSearch">
                    <i class="material-icons">search</i>
                    <div class="search-results" v-html="searchResult"></div>
                </v-card-text>
              </v-card>
            </li>
            <li v-for="link in links" :key="link.text" v-bind:class="{'link-active': link.url=== activeUrl}">
                <a :href="relativeUrl+link.url">{{link.text}}</a>
            </li>
        </ul>
    </v-flex>
    <v-flex id="divTutorialContent" data-fuck="ddd"
    :class="{'margin-left-15px': $vuetify.breakpoint.mdAndUp}"
    xs12 md9 l7 xl6>
      <div v-html="tutorialHtml" class="margin-top-20px"></div>
    </v-flex>
</v-layout>

</template>
<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import * as axios from "axios";
import DomHelper from "../helpers/dom_helper";
import { vueEvent } from "../common_var";
import { IInputSelect } from "../interfaces";

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
  showMenu = false;
  searchValue = "";
  searchResult = "";

  constructor() {
    super();
    this.catchEvents();
  }

  catchEvents() {
    vueEvent.$on("version_change", this.onVersionChange);
    vueEvent.$on("menu_click", this.toggleMenu);
  }

  onSearch() {
    var html = "";
    this.links.forEach(link => {
      if (link.text.toLowerCase().indexOf(this.searchValue) >= 0) {
        html += "<a href=" + link.url + ">" + link.text + "</a>";
      }
    });
    this.searchResult = html;
  }

  mounted() {
    this.setVersion();
    var currentUrl: string = (this.$route as any).path;
    const activeUrl = this.links.find(
      value =>
        currentUrl.toLowerCase().replace(/\//g, "") ===
        `${this.relativeUrl}${value.url.toLowerCase()}`.replace(/\//g, "")
    );
    if (activeUrl && activeUrl.url.length > 0) {
      this.activeUrl = activeUrl.url;
    }
    this.registerNextBtnEvents();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  showHideMenuButton() {
    setTimeout(() => {
      if (this.$vuetify.breakpoint.mdAndUp) {
        this.showMenu = true;
      } else {
        this.showMenu = false;
      }
    }, 200);
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

  setVersion(value?: number) {
    this.version = value ? value : Number(this.getVersion());
  }

  onVersionChange(value: number) {
    this.setVersion(value);
    const currentUrl: string = (this.$route as any).path;
    const splittedUrl = currentUrl.split("/").reverse();
    const nextUrl = splittedUrl[0].length > 0 ? splittedUrl[0] : splittedUrl[1];
    this.$router.push(this.relativeUrl + nextUrl);
  }

  get tutorialHtml() {
    return decodeURI(this.innerHtml);
  }

  get links() {
    var linksToRemove;
    switch (this.version) {
      case 1:
        linksToRemove = ["v1-to-v2"];
        break;
      case 2:
        linksToRemove = ["promise"];
        break;
    }
    return this.allLinks_.filter(
      value => linksToRemove.findIndex(qry => qry === value.url) < 0
    );
  }

  private get allLinks_() {
    return [
      {
        text: "Get Started",
        url: "get-started"
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
        url: "bulk-insert"
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
        url: "ignore-case"
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
        url: "order-by"
      },
      {
        text: "Aggregate",
        url: "aggregate"
      },
      {
        text: "Group By",
        url: "group-by"
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
        url: "update-with-operators"
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
        url: "drop-db"
      },
      {
        text: "Change Table Design",
        url: "change-table-design"
      },
      {
        text: "Export Json",
        url: "export-json"
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
        url: "adv-sql-example"
      },
      {
        text: "Enums",
        url: "enums"
      },
      {
        text: "V1 To V2",
        url: "v1-to-v2"
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
    const relativeUrl = this.relativeUrl;
    const links = this.links;
    const activeUrlIndex = links.findIndex(
      value =>
        currentUrl.toLowerCase().replace(/\//g, "") ===
        `${this.relativeUrl}${value.url.toLowerCase()}`.replace(/\//g, "")
    );
    if (activeUrlIndex >= 0) {
      const nextUrl = links[activeUrlIndex + 1];
      if (nextUrl) {
        this.$router.push(this.relativeUrl + nextUrl.url);
      }
    }
  }
}
</script>
<style>
@import url("~/styles/tutorial.css");
</style>
