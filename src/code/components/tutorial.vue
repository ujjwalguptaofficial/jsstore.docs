<template src="../views/tutorial.html"></template>
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
    pageKeywords: String,
    pageDescription: String
  }
})
export default class Tutorial extends VueWithRoute {
  // props
  innerHtml: string;
  pageTitle: string;
  version: number = 3;
  pageKeywords: string;
  pageDescription: string;

  //property
  activeUrl = "";
  showMenu = false;
  searchValue = "";
  searchResult = "";

  jsstoreText = [
    "Component based framework for nodejs",
    "Features like dependency injection, es6 & typescript approach",
    "Easy to learn, faster to implement"
  ];

  adIndex = -1;
  get docToEdit() {
    const url = this.allLinks_[this.getCurrentUrlIndex()];
    if (url) {
      return url.url;
    }
    return null;
  }

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
    this.showAds();
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
        },
        {
          hid: "description",
          name: "description",
          content: this.pageDescription
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
          "data-type",
          "initiate-database",
          "event",
          "union",
          "case"
        ];
        break;
      case 2:
        linksToRemove = [
          "promise",
          "export-json",
          "v2-to-v3",
          "data-type",
          "initiate-database",
          "event",
          "union",
          "case"
        ];
      case 3:
        linksToRemove = ["promise", "export-json", "v1-to-v2", "bulk-insert"];
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

  getCurrentUrlIndex() {
    const currentUrl = (this.$route as any).path;
    const relativeUrl = this.relativeUrl;
    const links = this.links;
    const activeUrlIndex = links.findIndex(
      value =>
        currentUrl.toLowerCase().replace(/\//g, "") ===
        `${this.relativeUrl}${value.url.toLowerCase()}`.replace(/\//g, "")
    );
    return activeUrlIndex;
  }

  onNextBtnClick() {
    const activeUrlIndex = this.getCurrentUrlIndex();
    if (activeUrlIndex >= 0) {
      const nextUrl = links[activeUrlIndex + 1];
      if (nextUrl) {
        this.$router.push(this.relativeUrl + nextUrl.url);
      }
    }
  }
  showAds() {
    let newIndex = ++this.adIndex;
    if (newIndex >= this.jsstoreText.length) {
      newIndex = this.adIndex = 0;
    }
    this.adIndex = newIndex;
    setTimeout(() => {
      this.showAds();
    }, 5000);
  }
}
</script>
<style lang="scss">
@import "~/styles/tutorial.scss";
</style>
