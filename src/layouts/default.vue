<template>
  <div>
    <Menu />
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
import Vue from "vue";
import "../styles/index.scss";
import Menu from "@/components/menu.vue";
import AppFooter from "@/components/footer.vue";
Vue.filter("imgPath", (val) => {
  return "/img/" + val;
});
export default {
  components: { Menu, AppFooter },
  mounted() {},
};
</script>
 <style>
.code-copy {
  z-index: 1000;
  cursor: pointer;
  padding: 5px;
  margin-bottom: -30px;
  text-align: right;
}
</style>