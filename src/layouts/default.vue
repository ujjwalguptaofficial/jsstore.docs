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
  mounted() {
    document.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach((el) => {
      const link = document.createElement("a");
      link.classList = "anchor";
      link.innerText = "#";
      link.href = "#" + el.id;
      link.setAttribute("aria-hidden", "true");
      el.appendChild(link);
    });
  },
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