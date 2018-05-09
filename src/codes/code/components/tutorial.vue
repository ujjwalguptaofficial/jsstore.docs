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
        <a :href="link.url">{{link.text}}</a>
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

export interface ITutorialLink {
  text: string;
  url: string;
}
@Component({
  props: {
    innerHtml: String,
    pageTitle: String,
    version: Number
  }
})
export default class Tutorial extends Vue {
  // props
  innerHtml: string;
  pageTitle: string;
  version: number;

  //property
  activeUrl = "";

  constructor() {
    super();
  }

  mounted() {
    var currentUrl: string = (this.$route as any).path;
    this.links.every(value => {
      if (currentUrl.toLowerCase() === `/tutorial/${value.url.toLowerCase()}`) {
        this.activeUrl = value.url;
        return false;
      }
      return true;
    });
  }

  head() {
    return {
      title: `JsStore - ${this.pageTitle}`
    };
  }

  get tutorialHtml() {
    return decodeURI(this.innerHtml);
  }

  get links() {
    const links = this.allLinks;
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

  get allLinks() {
    return [
      {
        text: "Get Started",
        url: "get_started"
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
        url: "bulk_insert"
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
        url: "ignore_case"
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
        url: "order_by"
      },
      {
        text: "Aggregate",
        url: "aggregate"
      },
      {
        text: "Group By",
        url: "group_by"
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
        url: "update_with_operators"
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
        url: "drop_database"
      },
      {
        text: "Change Table Design",
        url: "change_table_design"
      },
      {
        text: "Export Json",
        url: "export_json"
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
        url: "adv_sql_example"
      },
      {
        text: "Enums",
        url: "enums"
      }
    ] as ITutorialLink[];
  }

  onNextBtnClick() {
    const currentUrl = (this.$route as any).path;
    var nextUrl;
    this.links.every((value, index) => {
      if (currentUrl === value.url) {
        nextUrl = this.links[index + 1].url;
        return false;
      }
      return true;
    });
    this.$router.push(nextUrl);
  }
}
</script>
<style>
@import url("~/styles/tutorial.css");
</style>
