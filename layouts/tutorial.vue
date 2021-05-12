<template>
  <div class="row b-tutorial">
    <div class="col-sm-4 col-md-3 col-lg-2 b-tutorial__links">
      <div v-for="(link, index) in links" :key="link.text">
        <a
          class="row content-v-center b-tutorial__links__item ripple"
          :class="{
            'b-tutorial__links__item--active':
              index === (!link.children && activeUrlIndex),
          }"
          :href="url(link.url)"
        >
          <template v-if="link.children">
            <i v-if="index === activeUrlIndex" class="fas fa-chevron-down"></i>
            <i v-else class="fas fa-chevron-right"></i>
          </template>
          {{ link.text }}
        </a>
        <template v-if="index === activeUrlIndex">
          <a
            v-for="(item, childIndex) in link.children"
            :key="item.url"
            class="row content-v-center b-tutorial__links__item-children ripple"
            :class="{
              'b-tutorial__links__item--active':
                childIndex === childActiveUrlIndex,
            }"
            :href="url(link.url + '/' + item.url)"
          >
            {{ item.text }}
          </a>
        </template>
      </div>
    </div>
    <div class="b-tutorial__content col-sm-8 col-md-9 col-lg-8">
      <slot></slot>
      <div class="b-tutorial__content__btns">
        <i @click="goto(-1)" class="fas fa-chevron-left"></i>
        <i @click="goto(1)" class="fas fa-chevron-right"></i>
      </div>
    </div>
    <div class="col-lg-2 width-full">
      <!-- Side bar -->
    </div>
    <div class="b-tutorial__sticky-btn">
      <a
        class="btn rounded secondary margin-bottom-70px"
        alt="edit this doc"
        target="_blank"
        href="https://gitter.im/JsStore/Lobby"
      >
        <i class="fab fa-gitter"></i>
      </a>
      <a
        alt="edit this doc"
        target="_blank"
        :href="`https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/content${currentUrl}.md`"
        class="btn secondary"
        fixed
        bottom
        right
        fab
      >
        <i class="far fa-edit"></i>
      </a>
    </div>
  </div>
</template>
<script  >
import { copyToClipboard } from "@/utils";

export default {
  head() {
    return {
      title: `JsStore - ${this.title}`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "keywords",
          name: "keywords",
          content: this.keywords,
        },
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
      ],
    };
  },
  props: {
    contentSrc: String,
    title: String,
    description: String,
    keywords: String,
  },
  computed: {
    currentUrl() {
      return this.$route.path;
    },
    activeUrlIndex() {
      const splittedPath = this.$route.path.split("/");
      const lastPath = splittedPath[splittedPath.length - 1];
      const result = this.links.findIndex((val) => {
        if (val.url === lastPath) {
          this.childActiveUrlIndex = -1;
          return true;
        }
        const children = val.children;
        if (children) {
          for (let i = 0, length = children.length; i < length; i++) {
            if (children[i].url === lastPath) {
              this.childActiveUrlIndex = i;
              return true;
            }
          }
        }
      });
      // console.log("result", result, this.childActiveUrlIndex);
      return result;
    },
  },
  data() {
    return {
      links: [],
      childActiveUrlIndex: -1,
    };
  },
  fetch() {
    const links = require("../content/tutorial");
    this.links = links;
  },
  mounted() {
    hljs.highlightAll();
    const copyHtml = `Copy <i class="margin-left-10px far fa-copy"></i>`;
    document.querySelectorAll("pre code").forEach((el) => {
      const div = document.createElement("div");
      div.className = "code-copy ripple";
      div.innerHTML = copyHtml;
      el.parentNode.prepend(div);
      div.onclick = () => {
        const text = el.innerText;
        copyToClipboard(text);
        div.innerHTML = `Copied <i class="margin-left-10px fas fa-check"></i>`;
        setTimeout(() => {
          div.innerHTML = copyHtml;
        }, 1000);
      };
    });
  },
  methods: {
    url(value) {
      return "/tutorial/" + value;
    },
    goto(delta) {
      const childActiveUrlIndex = this.childActiveUrlIndex;
      let path;
      let activeLink = this.links[this.activeUrlIndex];
      if (childActiveUrlIndex >= 0) {
        const nextChildren = activeLink.children[childActiveUrlIndex + delta];
        if (nextChildren) {
          path = nextChildren.url;
        }
      }
      if (!path) {
        path = this.links[this.activeUrlIndex + delta].url;
      }
      return this.$router.push({
        path: this.url(path),
      });
    },
  },
};
</script>
<style scoped lang="scss">
.b-tutorial {
  padding: 10px 10px 0 10px;
}
.b-tutorial__links {
  padding-right: 30px;
  border-right: 1px solid #e9ecef;
}
.b-tutorial__links__item {
  cursor: pointer;
  padding: 10px;
  color: var(--link-color);
  font-size: 1.1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  .fas {
    margin-right: 5px;
  }
}

.b-tutorial__links__item-children {
  @extend .b-tutorial__links__item;
  margin-left: 20px;
  font-size: 1rem;
}

.b-tutorial__links__item--active {
  /* background: var(--secondary-color); */
  border: 1px solid;
  border-radius: 3px;
  text-align: center;
  color: var(--secondary-color);
  justify-content: center;
}
.b-tutorial__content {
  padding-left: 40px;
}
.b-tutorial__content__btns {
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  margin-top: 30px;
  margin-bottom: 20px;
  i {
    cursor: pointer;
  }
}
.b-tutorial__sticky-btn {
  position: fixed;
  right: 0;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  a {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-bottom: 10px;
    padding: 0;
  }
}
</style>