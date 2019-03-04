<template>
  <v-app>
    <v-content>
      <Menu></Menu>
      <v-container fluid>
        <nuxt />
      </v-container>
      <v-container fluid id="footer">
        <v-layout row wrap>
          <v-flex xs12 sm12 md4>
            <h5>
              <a target="_blank" href="/sponsor">Help JsStore Grow</a>
            </h5>
            <p>
              JsStore is an open source project and completely free to use.
              However, the amount of effort needed to maintain and develop new
              features for the project is not sustainable without proper
              financial backing.
            </p>
          </v-flex>
          <v-flex xs12 sm12 md4>
            <h5>
              <a target="_blank" href="/help">Need Help</a>
            </h5>
            <p>
              Dont worry, if something is not working for you. The whole
              community is here for you.
            </p>
          </v-flex>
          <v-flex xs12 sm12 md4>
            <h5>
              <a target="_blank" href="/community">Community</a>
            </h5>
            <p>
              Be a part of JsStore community and help other people in learning
              jsstore, using it in a best way and making jsstore better.
            </p>
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
