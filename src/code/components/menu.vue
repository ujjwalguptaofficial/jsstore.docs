<template>
  <v-toolbar floating app>
    <button
      @click="onMenuBtnClick"
      :class="{'hidden': $vuetify.breakpoint.mdAndUp}"
      style="color:white;padding-right:10px;"
    >
      <i class="material-icons">menu</i>
    </button>
    <a href="/" title="JsStore Index Page" class="logo">
      <img
        src="/img/JsStore_145_64.png"
        alt="JsStore"
        :class="{'height-50px':$vuetify.breakpoint.smAndDown}"
      />
    </a>
    <ul id="ulLink">
      <li>
        <a title="star jsstore" href="https://github.com/ujjwalguptaofficial/JsStore">
          <i class="fab fa-github"></i>
          Star
          <span class="star-count" v-if="starCount">{{starCount}}</span>
        </a>
      </li>
      <li class="seperator" style="color:white;">|</li>
      <li>
        <a title="fork on github" href="https://github.com/ujjwalguptaofficial/JsStore/fork">
          <svg
            version="1.1"
            width="10"
            height="18"
            style="fill: white;vertical-align: sub;"
            viewBox="0 0 10 16"
            class="octicon octicon-repo-forked"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
            />
          </svg>
          Fork
        </a>
      </li>
      <li>
        <select id="selectVersions" v-model="activeVersion" @change="onVersionChange">
          <option :value="i" v-for="i in 3" :key="i">V {{i}}</option>
        </select>
      </li>
    </ul>
  </v-toolbar>
</template>
<script lang="ts">
import { Component } from "nuxt-property-decorator";
import { vueEvent, VueWithRoute } from "../common_var";

@Component
export default class Menu extends VueWithRoute {
  activeVersion = 3;
  starCount = null;

  async mounted() {
    this.activeVersion = this.getVersion();
    try {
      const response = await fetch(
        "//api.github.com/repos/ujjwalguptaofficial/jsstore"
      );
      this.starCount = (await response.json()).stargazers_count;
    } catch (ex) {}
  }

  onMenuBtnClick() {
    vueEvent.$emit("menu_click");
  }

  onVersionChange() {
    vueEvent.$emit("version_change", this.activeVersion);
  }

  getVersion() {
    const currentUrl = (this.$route as any).path;
    if (currentUrl.indexOf("v1") >= 0 && currentUrl.indexOf("v2") < 0) {
      return 1;
    } else if (currentUrl.indexOf("v2") >= 0 && currentUrl.indexOf("v3") < 0) {
      return 2;
    }
    return 3;
  }
}
</script>
<style>
#selectVersions {
  -webkit-appearance: menulist;
  background-color: white;
  margin-top: -3px;
  margin-left: 5px;
  padding: 3px;
}
.height-50px {
  height: 50px;
}
.star-count {
  padding: 5px;
  color: black;
  background: white;
  margin-left: 6px;
  position: relative;
  border-radius: 4px;
}
.star-count:before {
  content: "";
  position: absolute;
  display: inline-block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  top: 50%;
  border-right-color: #fafafa;
  left: -5px;
  margin-top: -6px;
  border-width: 6px 6px 6px 0;
  /* content: "";
  position: absolute;
  height: 0;
  width: 0;
  right: 100%;
  top: 0;
  border: 20px solid transparent;
  border-right: 20px solid red; */
}
</style>

