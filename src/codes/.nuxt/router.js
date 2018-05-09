import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _4da82f0a = () => import('..\\code\\pages\\tutorial\\aggregate.vue' /* webpackChunkName: "pages_tutorial_aggregate" */).then(m => m.default || m)
const _893374ba = () => import('..\\code\\pages\\tutorial\\where.vue' /* webpackChunkName: "pages_tutorial_where" */).then(m => m.default || m)
const _d8374eea = () => import('..\\code\\pages\\tutorial\\like.vue' /* webpackChunkName: "pages_tutorial_like" */).then(m => m.default || m)
const _01f6da6f = () => import('..\\code\\pages\\tutorial\\database.vue' /* webpackChunkName: "pages_tutorial_database" */).then(m => m.default || m)
const _5beb4b1a = () => import('..\\code\\pages\\tutorial\\skip.vue' /* webpackChunkName: "pages_tutorial_skip" */).then(m => m.default || m)
const _22464f70 = () => import('..\\code\\pages\\tutorial\\distinct.vue' /* webpackChunkName: "pages_tutorial_distinct" */).then(m => m.default || m)
const _30fdf8a6 = () => import('..\\code\\pages\\tutorial\\insert.vue' /* webpackChunkName: "pages_tutorial_insert" */).then(m => m.default || m)
const _07531052 = () => import('..\\code\\pages\\tutorial\\or.vue' /* webpackChunkName: "pages_tutorial_or" */).then(m => m.default || m)
const _7bfea344 = () => import('..\\code\\pages\\tutorial\\between.vue' /* webpackChunkName: "pages_tutorial_between" */).then(m => m.default || m)
const _02c6f6c4 = () => import('..\\code\\pages\\tutorial\\join.vue' /* webpackChunkName: "pages_tutorial_join" */).then(m => m.default || m)
const _ad71c7ee = () => import('..\\code\\pages\\tutorial\\clear.vue' /* webpackChunkName: "pages_tutorial_clear" */).then(m => m.default || m)
const _4b369c70 = () => import('..\\code\\pages\\tutorial\\select.vue' /* webpackChunkName: "pages_tutorial_select" */).then(m => m.default || m)
const _51c7e1ea = () => import('..\\code\\pages\\tutorial\\operators.vue' /* webpackChunkName: "pages_tutorial_operators" */).then(m => m.default || m)
const _7e80f90a = () => import('..\\code\\pages\\tutorial\\table.vue' /* webpackChunkName: "pages_tutorial_table" */).then(m => m.default || m)
const _b7bf5d5a = () => import('..\\code\\pages\\example\\where.vue' /* webpackChunkName: "pages_example_where" */).then(m => m.default || m)
const _17913ca4 = () => import('..\\code\\pages\\tutorial\\installation.vue' /* webpackChunkName: "pages_tutorial_installation" */).then(m => m.default || m)
const _1c3df3ce = () => import('..\\code\\pages\\tutorial\\in.vue' /* webpackChunkName: "pages_tutorial_in" */).then(m => m.default || m)
const _459985cb = () => import('..\\code\\pages\\tutorial\\count.vue' /* webpackChunkName: "pages_tutorial_count" */).then(m => m.default || m)
const _047e46ce = () => import('..\\code\\pages\\tutorial\\enums.vue' /* webpackChunkName: "pages_tutorial_enums" */).then(m => m.default || m)
const _1717fd9f = () => import('..\\code\\pages\\tutorial\\delete.vue' /* webpackChunkName: "pages_tutorial_delete" */).then(m => m.default || m)
const _c7721c86 = () => import('..\\code\\pages\\tutorial\\update.vue' /* webpackChunkName: "pages_tutorial_update" */).then(m => m.default || m)
const _01d1a252 = () => import('..\\code\\pages\\tutorial\\promise.vue' /* webpackChunkName: "pages_tutorial_promise" */).then(m => m.default || m)
const _5d004a77 = () => import('..\\code\\pages\\tutorial\\limit.vue' /* webpackChunkName: "pages_tutorial_limit" */).then(m => m.default || m)
const _d2f6d17e = () => import('..\\code\\pages\\tutorial\\helpers.vue' /* webpackChunkName: "pages_tutorial_helpers" */).then(m => m.default || m)
const _1ff03482 = () => import('..\\code\\pages\\tutorial\\create_table.vue' /* webpackChunkName: "pages_tutorial_create_table" */).then(m => m.default || m)
const _f324f8f2 = () => import('..\\code\\pages\\tutorial\\drop_database.vue' /* webpackChunkName: "pages_tutorial_drop_database" */).then(m => m.default || m)
const _63204cc2 = () => import('..\\code\\pages\\tutorial\\bulk_insert.vue' /* webpackChunkName: "pages_tutorial_bulk_insert" */).then(m => m.default || m)
const _3ea1495c = () => import('..\\code\\pages\\tutorial\\order_by.vue' /* webpackChunkName: "pages_tutorial_order_by" */).then(m => m.default || m)
const _464ab59a = () => import('..\\code\\pages\\tutorial\\create_database.vue' /* webpackChunkName: "pages_tutorial_create_database" */).then(m => m.default || m)
const _3b2cc9ba = () => import('..\\code\\pages\\tutorial\\change_table_design.vue' /* webpackChunkName: "pages_tutorial_change_table_design" */).then(m => m.default || m)
const _5ec9c329 = () => import('..\\code\\pages\\tutorial\\adv_sql_example.vue' /* webpackChunkName: "pages_tutorial_adv_sql_example" */).then(m => m.default || m)
const _7012d7fb = () => import('..\\code\\pages\\tutorial\\update_with_operator.vue' /* webpackChunkName: "pages_tutorial_update_with_operator" */).then(m => m.default || m)
const _965ae78e = () => import('..\\code\\pages\\tutorial\\ignore_case.vue' /* webpackChunkName: "pages_tutorial_ignore_case" */).then(m => m.default || m)
const _52693dd4 = () => import('..\\code\\pages\\tutorial\\get_started.vue' /* webpackChunkName: "pages_tutorial_get_started" */).then(m => m.default || m)
const _167eddea = () => import('..\\code\\pages\\tutorial\\group_by.vue' /* webpackChunkName: "pages_tutorial_group_by" */).then(m => m.default || m)
const _0376ca4f = () => import('..\\code\\pages\\tutorial\\export_json.vue' /* webpackChunkName: "pages_tutorial_export_json" */).then(m => m.default || m)
const _7c9ffc2c = () => import('..\\code\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/tutorial/aggregate",
			component: _4da82f0a,
			name: "tutorial-aggregate"
		},
		{
			path: "/tutorial/where",
			component: _893374ba,
			name: "tutorial-where"
		},
		{
			path: "/tutorial/like",
			component: _d8374eea,
			name: "tutorial-like"
		},
		{
			path: "/tutorial/database",
			component: _01f6da6f,
			name: "tutorial-database"
		},
		{
			path: "/tutorial/skip",
			component: _5beb4b1a,
			name: "tutorial-skip"
		},
		{
			path: "/tutorial/distinct",
			component: _22464f70,
			name: "tutorial-distinct"
		},
		{
			path: "/tutorial/insert",
			component: _30fdf8a6,
			name: "tutorial-insert"
		},
		{
			path: "/tutorial/or",
			component: _07531052,
			name: "tutorial-or"
		},
		{
			path: "/tutorial/between",
			component: _7bfea344,
			name: "tutorial-between"
		},
		{
			path: "/tutorial/join",
			component: _02c6f6c4,
			name: "tutorial-join"
		},
		{
			path: "/tutorial/clear",
			component: _ad71c7ee,
			name: "tutorial-clear"
		},
		{
			path: "/tutorial/select",
			component: _4b369c70,
			name: "tutorial-select"
		},
		{
			path: "/tutorial/operators",
			component: _51c7e1ea,
			name: "tutorial-operators"
		},
		{
			path: "/tutorial/table",
			component: _7e80f90a,
			name: "tutorial-table"
		},
		{
			path: "/example/where",
			component: _b7bf5d5a,
			name: "example-where"
		},
		{
			path: "/tutorial/installation",
			component: _17913ca4,
			name: "tutorial-installation"
		},
		{
			path: "/tutorial/in",
			component: _1c3df3ce,
			name: "tutorial-in"
		},
		{
			path: "/tutorial/count",
			component: _459985cb,
			name: "tutorial-count"
		},
		{
			path: "/tutorial/enums",
			component: _047e46ce,
			name: "tutorial-enums"
		},
		{
			path: "/tutorial/delete",
			component: _1717fd9f,
			name: "tutorial-delete"
		},
		{
			path: "/tutorial/update",
			component: _c7721c86,
			name: "tutorial-update"
		},
		{
			path: "/tutorial/promise",
			component: _01d1a252,
			name: "tutorial-promise"
		},
		{
			path: "/tutorial/limit",
			component: _5d004a77,
			name: "tutorial-limit"
		},
		{
			path: "/tutorial/helpers",
			component: _d2f6d17e,
			name: "tutorial-helpers"
		},
		{
			path: "/tutorial/create:table?",
			component: _1ff03482,
			name: "tutorial-createtable"
		},
		{
			path: "/tutorial/drop:database?",
			component: _f324f8f2,
			name: "tutorial-dropdatabase"
		},
		{
			path: "/tutorial/bulk:insert?",
			component: _63204cc2,
			name: "tutorial-bulkinsert"
		},
		{
			path: "/tutorial/order:by?",
			component: _3ea1495c,
			name: "tutorial-orderby"
		},
		{
			path: "/tutorial/create:database?",
			component: _464ab59a,
			name: "tutorial-createdatabase"
		},
		{
			path: "/tutorial/change:table_design?",
			component: _3b2cc9ba,
			name: "tutorial-changetable_design"
		},
		{
			path: "/tutorial/adv:sql_example?",
			component: _5ec9c329,
			name: "tutorial-advsql_example"
		},
		{
			path: "/tutorial/update:with_operator?",
			component: _7012d7fb,
			name: "tutorial-updatewith_operator"
		},
		{
			path: "/tutorial/ignore:case?",
			component: _965ae78e,
			name: "tutorial-ignorecase"
		},
		{
			path: "/tutorial/get:started?",
			component: _52693dd4,
			name: "tutorial-getstarted"
		},
		{
			path: "/tutorial/group:by?",
			component: _167eddea,
			name: "tutorial-groupby"
		},
		{
			path: "/tutorial/export:json?",
			component: _0376ca4f,
			name: "tutorial-exportjson"
		},
		{
			path: "/",
			component: _7c9ffc2c,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
