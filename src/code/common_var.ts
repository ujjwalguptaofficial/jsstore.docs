import { Vue } from "nuxt-property-decorator";
import { Route } from "vue-router";
export class VueWithRoute extends Vue {
    $route: Route
}
export const vueEvent = new Vue();