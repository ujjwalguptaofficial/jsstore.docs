<template>
     <v-toolbar floating app>
         <button @click="onMenuBtnClick" :class="{'hidden': $vuetify.breakpoint.mdAndUp}" style="color:white;padding-right:10px;"> 
            <i class="material-icons">
                menu
            </i>
         </button>
           <a href="/" title="JsStore Index Page" class="logo">
                <img src="/img/JsStore_145_64.png" alt="JsStore" :class="{'height-50px':$vuetify.breakpoint.smAndDown}" />
            </a>
            <ul id="ulLink">
               <li>
                <a title="star jsstore" href="https://github.com/ujjwalguptaofficial/JsStore">
                    <i class="material-icons" style="display: inline-block;vertical-align: top;font-size: 18px;">star</i>
                    Star
                </a>
            </li>
            <li class="seperator" style="color:white;">|</li>
            <li>
                <a title="fork on github" href="https://github.com/ujjwalguptaofficial/JsStore/fork">
                    <svg version="1.1" width="10" height="18" style="fill: white;vertical-align: sub;" viewBox="0 0 10 16" class="octicon octicon-repo-forked"
                        aria-hidden="true">
                        <path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
                    </svg>
                    Fork
                </a>
            </li>
            <li>
               <select id="selectVersions" v-model="activeVersion" @change="onVersionChange">
                   <option v-bind:value="i" v-for="i in 2" :key="i">V {{i}}</option>
               </select>
            </li>
            </ul>
        </v-toolbar>
</template>
<script lang="ts">
import { Component } from "nuxt-property-decorator";
import { vueEvent,VueWithRoute } from "../common_var";
@Component
export default class Menu extends VueWithRoute {
  activeVersion = 2;

  mounted() {
    this.activeVersion = this.getVersion();
  }

  onMenuBtnClick() {
    vueEvent.$emit("menu_click");
  }

  onVersionChange() {
    vueEvent.$emit("version_change", this.activeVersion);
  }

  getVersion() {
    const currentUrl = (this.$route as any).path;
    if (currentUrl.indexOf("v1") >= 0) {
      return 1;
    } else {
      return 2;
    }
  }
}
</script>
<style>
#selectVersions {
  -webkit-appearance: menulist;
  background-color: white;
  margin-top: -3px;
  margin-left: 10px;
  padding: 3px;
}
.height-50px {
  height: 50px;
}
</style>

