<template>
  <v-layout row wrap>
    <v-flex
      md2
      xl2
      class="hidden-sm-and-down"
      id="divMenuContainer"
      :class="{'show-menu':showMenu}"
    >
      <ul>
        <li class="search margin-bottom-10px">
          <v-card class="search-wrapper">
            <v-card-text style="padding:5px;">
              <input
                v-model="searchValue"
                id="txtSearch"
                type="text"
                placeholder="Search"
                @keyup="onSearch"
              >
              <i class="material-icons">search</i>
              <div class="search-results" v-html="searchResult"></div>
            </v-card-text>
          </v-card>
        </li>
        <li
          v-for="link in links"
          :key="link.text"
          v-bind:class="{'link-active': link.url=== activeUrl}"
        >
          <a :href="relativeUrl+link.url">{{link.text}}</a>
        </li>
      </ul>
    </v-flex>
    <v-flex
      id="divTutorialContent"
      :class="{'padding-left-15px': $vuetify.breakpoint.mdAndUp}"
      xs12
      md8
      xl8
    >
      <div v-html="tutorialHtml" class="margin-top-20px"></div>
    </v-flex>
    <v-flex md2 class="margin-top-50px">
      <v-btn href="/sponsor" color="success right-side-button">
        Sponsor Us &
        <br>get your logo here
      </v-btn>
      <br>
      <br>
      <v-btn href="/sponsor" color="success right-side-button">
        Be a backer &
        <br>get your logo on our page
      </v-btn>
      <br>
      <br>
      <!-- codefund ads -->
      <div id="codefund"></div>
      <script src="https://codefund.app/properties/280/funder.js" async="async"></script>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import * as axios from "axios";
import DomHelper from "../helpers/dom_helper";
import { vueEvent, VueWithRoute } from "../common_var";
import { IInputSelect } from "../interfaces";
import { links } from "../links";

@Component({
  props: {
    innerHtml: String,
    pageTitle: String,
    pageKeywords: String
  }
})
export default class Tutorial extends VueWithRoute {
  // props
  innerHtml: string;
  pageTitle: string;
  version: number = 3;
  pageKeywords: string;

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
        html += `<a href="/tutorial/${link.url}">${link.text}</a>`;
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
      title: `JsStore - ${this.pageTitle}`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "keywords",
          name: "keywords",
          content: this.pageKeywords
        }
      ]
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
        linksToRemove = [
          "v1-to-v2",
          "terminate",
          "transaction",
          "regex",
          "connection",
          "v2-to-v3",
          "data-type"
        ];
        break;
      case 2:
        linksToRemove = ["promise", "export-json", "v2-to-v3", "data-type"];
      case 3:
        linksToRemove = ["promise", "export-json", "v1-to-v2"];
        break;
    }
    return this.allLinks_.filter(
      value => linksToRemove.findIndex(qry => qry === value.url) < 0
    );
  }

  private get allLinks_() {
    return links;
  }

  get relativeUrl() {
    switch (this.version) {
      case 1:
        return "/v1/tutorial/";
      case 2:
        return "/v2/tutorial/";
      case 3:
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
