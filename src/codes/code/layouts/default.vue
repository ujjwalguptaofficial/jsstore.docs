<template>
  <v-app>
      <v-content>
          <Menu></Menu>
         <v-container fluid>
         <nuxt/>
         </v-container>
         <v-container fluid id="footer">
            <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                    <h5><a target="_blank" href="/donate">Help JsStore Grow</a></h5>
                    <p>We hope you like JsStore. Please help us by donating some amount. Any amount is greatly appreciated and will help
                        us to continue our development.</p>
                </v-flex>
                <v-flex xs12 sm6 md3>
                    <h5><a target="_blank" href="/issues">Got Issue</a></h5>
                    <p>Dont worry, if something is not working for you. You can ask question at stackoverflow or raise an issue at Github.</p>
                </v-flex>
                <v-flex xs12 sm6 md3>
                    <h5><a target="_blank" href="/sponsor">Sponsor Us</a></h5>
                    <p>Sponsor us and get help directly from creators. We will also show your company name on our website in sponsors
                        list.
                    </p>
                </v-flex>
                <v-flex xs12 sm6 md3>
                    <h5><a target="_blank" href="/invite">Invite Us</a></h5>
                    <p>Invite us into your company, colleges and communities for an awesome session on JsStore.</p>
                </v-flex>
            </v-layout>
 </v-container>
      </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { vueEvent } from "../common_var";
import Menu from "../components/menu.vue";

@Component({
  components: {
    Menu
  }
})
export default class extends Vue {}
</script>
