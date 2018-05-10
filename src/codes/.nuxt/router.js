import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _4d4f8a27 = () => import('..\\code\\pages\\example\\or.vue' /* webpackChunkName: "pages_example_or" */).then(m => m.default || m)
const _17913ca4 = () => import('..\\code\\pages\\tutorial\\installation.vue' /* webpackChunkName: "pages_tutorial_installation" */).then(m => m.default || m)
const _dbfdb08e = () => import('..\\code\\pages\\example\\clear.vue' /* webpackChunkName: "pages_example_clear" */).then(m => m.default || m)
const _ea3bd24a = () => import('..\\code\\pages\\example\\like.vue' /* webpackChunkName: "pages_example_like" */).then(m => m.default || m)
const _07531052 = () => import('..\\code\\pages\\tutorial\\or.vue' /* webpackChunkName: "pages_tutorial_or" */).then(m => m.default || m)
const _047e46ce = () => import('..\\code\\pages\\tutorial\\enums.vue' /* webpackChunkName: "pages_tutorial_enums" */).then(m => m.default || m)
const _bd05e2f2 = () => import('..\\code\\pages\\example\\promise.vue' /* webpackChunkName: "pages_example_promise" */).then(m => m.default || m)
const _d8374eea = () => import('..\\code\\pages\\tutorial\\like.vue' /* webpackChunkName: "pages_tutorial_like" */).then(m => m.default || m)
const _306b7dca = () => import('..\\code\\pages\\tutorial\\column.vue' /* webpackChunkName: "pages_tutorial_column" */).then(m => m.default || m)
const _abbfccd0 = () => import('..\\code\\pages\\tutorial\\changetabledesign.vue' /* webpackChunkName: "pages_tutorial_changetabledesign" */).then(m => m.default || m)
const _01d1a252 = () => import('..\\code\\pages\\tutorial\\promise.vue' /* webpackChunkName: "pages_tutorial_promise" */).then(m => m.default || m)
const _6a6347e6 = () => import('..\\code\\pages\\example\\update.vue' /* webpackChunkName: "pages_example_update" */).then(m => m.default || m)
const _893374ba = () => import('..\\code\\pages\\tutorial\\where.vue' /* webpackChunkName: "pages_tutorial_where" */).then(m => m.default || m)
const _45ba5627 = () => import('..\\code\\pages\\example\\limit.vue' /* webpackChunkName: "pages_example_limit" */).then(m => m.default || m)
const _79989c2b = () => import('..\\code\\pages\\example\\aggregate.vue' /* webpackChunkName: "pages_example_aggregate" */).then(m => m.default || m)
const _793450a7 = () => import('..\\code\\pages\\tutorial\\updatewithoperator.vue' /* webpackChunkName: "pages_tutorial_updatewithoperator" */).then(m => m.default || m)
const _00a1e2a1 = () => import('..\\code\\pages\\tutorial\\dropdb.vue' /* webpackChunkName: "pages_tutorial_dropdb" */).then(m => m.default || m)
const _d9210858 = () => import('..\\code\\pages\\example\\multipletablejoin.vue' /* webpackChunkName: "pages_example_multipletablejoin" */).then(m => m.default || m)
const _1717fd9f = () => import('..\\code\\pages\\tutorial\\delete.vue' /* webpackChunkName: "pages_tutorial_delete" */).then(m => m.default || m)
const _ad71c7ee = () => import('..\\code\\pages\\tutorial\\clear.vue' /* webpackChunkName: "pages_tutorial_clear" */).then(m => m.default || m)
const _1decc648 = () => import('..\\code\\pages\\example\\remove.vue' /* webpackChunkName: "pages_example_remove" */).then(m => m.default || m)
const _01f6da6f = () => import('..\\code\\pages\\tutorial\\database.vue' /* webpackChunkName: "pages_tutorial_database" */).then(m => m.default || m)
const _30fdf8a6 = () => import('..\\code\\pages\\tutorial\\insert.vue' /* webpackChunkName: "pages_tutorial_insert" */).then(m => m.default || m)
const _00a53d0c = () => import('..\\code\\pages\\example\\updatewithoperators.vue' /* webpackChunkName: "pages_example_updatewithoperators" */).then(m => m.default || m)
const _7bfea344 = () => import('..\\code\\pages\\tutorial\\between.vue' /* webpackChunkName: "pages_tutorial_between" */).then(m => m.default || m)
const _5d004a77 = () => import('..\\code\\pages\\tutorial\\limit.vue' /* webpackChunkName: "pages_tutorial_limit" */).then(m => m.default || m)
const _1c3df3ce = () => import('..\\code\\pages\\tutorial\\in.vue' /* webpackChunkName: "pages_tutorial_in" */).then(m => m.default || m)
const _2e53917b = () => import('..\\code\\pages\\example\\count.vue' /* webpackChunkName: "pages_example_count" */).then(m => m.default || m)
const _7e80f90a = () => import('..\\code\\pages\\tutorial\\table.vue' /* webpackChunkName: "pages_tutorial_table" */).then(m => m.default || m)
const _5beb4b1a = () => import('..\\code\\pages\\tutorial\\skip.vue' /* webpackChunkName: "pages_tutorial_skip" */).then(m => m.default || m)
const _d2f6d17e = () => import('..\\code\\pages\\tutorial\\helpers.vue' /* webpackChunkName: "pages_tutorial_helpers" */).then(m => m.default || m)
const _1e6482f4 = () => import('..\\code\\pages\\example\\between.vue' /* webpackChunkName: "pages_example_between" */).then(m => m.default || m)
const _3193c570 = () => import('..\\code\\pages\\example\\changetabledesign.vue' /* webpackChunkName: "pages_example_changetabledesign" */).then(m => m.default || m)
const _51c7e1ea = () => import('..\\code\\pages\\tutorial\\operators.vue' /* webpackChunkName: "pages_tutorial_operators" */).then(m => m.default || m)
const _b7bf5d5a = () => import('..\\code\\pages\\example\\where.vue' /* webpackChunkName: "pages_example_where" */).then(m => m.default || m)
const _66c73480 = () => import('..\\code\\pages\\example\\distinct.vue' /* webpackChunkName: "pages_example_distinct" */).then(m => m.default || m)
const _6defce7a = () => import('..\\code\\pages\\example\\skip.vue' /* webpackChunkName: "pages_example_skip" */).then(m => m.default || m)
const _459985cb = () => import('..\\code\\pages\\tutorial\\count.vue' /* webpackChunkName: "pages_tutorial_count" */).then(m => m.default || m)
const _79be06c0 = () => import('..\\code\\pages\\example\\select.vue' /* webpackChunkName: "pages_example_select" */).then(m => m.default || m)
const _4da82f0a = () => import('..\\code\\pages\\tutorial\\aggregate.vue' /* webpackChunkName: "pages_tutorial_aggregate" */).then(m => m.default || m)
const _42da1869 = () => import('..\\code\\pages\\example\\in.vue' /* webpackChunkName: "pages_example_in" */).then(m => m.default || m)
const _7ca76930 = () => import('..\\code\\pages\\example\\operator.vue' /* webpackChunkName: "pages_example_operator" */).then(m => m.default || m)
const _16086dfd = () => import('..\\code\\pages\\example\\insert.vue' /* webpackChunkName: "pages_example_insert" */).then(m => m.default || m)
const _22464f70 = () => import('..\\code\\pages\\tutorial\\distinct.vue' /* webpackChunkName: "pages_tutorial_distinct" */).then(m => m.default || m)
const _4b369c70 = () => import('..\\code\\pages\\tutorial\\select.vue' /* webpackChunkName: "pages_tutorial_select" */).then(m => m.default || m)
const _21354810 = () => import('..\\code\\pages\\tutorial\\remove.vue' /* webpackChunkName: "pages_tutorial_remove" */).then(m => m.default || m)
const _02c6f6c4 = () => import('..\\code\\pages\\tutorial\\join.vue' /* webpackChunkName: "pages_tutorial_join" */).then(m => m.default || m)
const _c7721c86 = () => import('..\\code\\pages\\tutorial\\update.vue' /* webpackChunkName: "pages_tutorial_update" */).then(m => m.default || m)
const _04c3b58b = () => import('..\\code\\pages\\tutorial\\advsqlexample.vue' /* webpackChunkName: "pages_tutorial_advsqlexample" */).then(m => m.default || m)
const _7df413a6 = () => import('..\\code\\pages\\v1\\example\\remove.vue' /* webpackChunkName: "pages_v1_example_remove" */).then(m => m.default || m)
const _5e7f7588 = () => import('..\\code\\pages\\v1\\tutorial\\where.vue' /* webpackChunkName: "pages_v1_tutorial_where" */).then(m => m.default || m)
const _5c53be78 = () => import('..\\code\\pages\\v1\\tutorial\\update.vue' /* webpackChunkName: "pages_v1_tutorial_update" */).then(m => m.default || m)
const _6189db42 = () => import('..\\code\\pages\\v1\\example\\promise.vue' /* webpackChunkName: "pages_v1_example_promise" */).then(m => m.default || m)
const _0339160d = () => import('..\\code\\pages\\v1\\example\\operator.vue' /* webpackChunkName: "pages_v1_example_operator" */).then(m => m.default || m)
const _3a7915a2 = () => import('..\\code\\pages\\v1\\example\\limit.vue' /* webpackChunkName: "pages_v1_example_limit" */).then(m => m.default || m)
const _60af6854 = () => import('..\\code\\pages\\v1\\tutorial\\in.vue' /* webpackChunkName: "pages_v1_tutorial_in" */).then(m => m.default || m)
const _eeb9cff4 = () => import('..\\code\\pages\\v1\\tutorial\\like.vue' /* webpackChunkName: "pages_v1_tutorial_like" */).then(m => m.default || m)
const _d2af13ae = () => import('..\\code\\pages\\v1\\tutorial\\installation.vue' /* webpackChunkName: "pages_v1_tutorial_installation" */).then(m => m.default || m)
const _1cd736a5 = () => import('..\\code\\pages\\v1\\example\\select.vue' /* webpackChunkName: "pages_v1_example_select" */).then(m => m.default || m)
const _0b43692b = () => import('..\\code\\pages\\v1\\tutorial\\select.vue' /* webpackChunkName: "pages_v1_tutorial_select" */).then(m => m.default || m)
const _2e9a94a0 = () => import('..\\code\\pages\\v1\\tutorial\\count.vue' /* webpackChunkName: "pages_v1_tutorial_count" */).then(m => m.default || m)
const _194977ce = () => import('..\\code\\pages\\v1\\tutorial\\join.vue' /* webpackChunkName: "pages_v1_tutorial_join" */).then(m => m.default || m)
const _1252d96b = () => import('..\\code\\pages\\v1\\tutorial\\distinct.vue' /* webpackChunkName: "pages_v1_tutorial_distinct" */).then(m => m.default || m)
const _1bf9372c = () => import('..\\code\\pages\\v1\\tutorial\\database.vue' /* webpackChunkName: "pages_v1_tutorial_database" */).then(m => m.default || m)
const _3405fde8 = () => import('..\\code\\pages\\v1\\example\\skip.vue' /* webpackChunkName: "pages_v1_example_skip" */).then(m => m.default || m)
const _4c604bee = () => import('..\\code\\pages\\v1\\tutorial\\clear.vue' /* webpackChunkName: "pages_v1_tutorial_clear" */).then(m => m.default || m)
const _2ebe7720 = () => import('..\\code\\pages\\v1\\tutorial\\operators.vue' /* webpackChunkName: "pages_v1_tutorial_operators" */).then(m => m.default || m)
const _b0e45f30 = () => import('..\\code\\pages\\v1\\tutorial\\insert.vue' /* webpackChunkName: "pages_v1_tutorial_insert" */).then(m => m.default || m)
const _219a28ef = () => import('..\\code\\pages\\v1\\tutorial\\table.vue' /* webpackChunkName: "pages_v1_tutorial_table" */).then(m => m.default || m)
const _00197a5c = () => import('..\\code\\pages\\v1\\tutorial\\limit.vue' /* webpackChunkName: "pages_v1_tutorial_limit" */).then(m => m.default || m)
const _0e293065 = () => import('..\\code\\pages\\v1\\example\\distinct.vue' /* webpackChunkName: "pages_v1_example_distinct" */).then(m => m.default || m)
const _2a9ec440 = () => import('..\\code\\pages\\v1\\tutorial\\aggregate.vue' /* webpackChunkName: "pages_v1_tutorial_aggregate" */).then(m => m.default || m)
const _8dbcc43c = () => import('..\\code\\pages\\v1\\example\\insert.vue' /* webpackChunkName: "pages_v1_example_insert" */).then(m => m.default || m)
const _b0d1129a = () => import('..\\code\\pages\\v1\\tutorial\\enums.vue' /* webpackChunkName: "pages_v1_tutorial_enums" */).then(m => m.default || m)
const _40a3f97c = () => import('..\\code\\pages\\v1\\tutorial\\promise.vue' /* webpackChunkName: "pages_v1_tutorial_promise" */).then(m => m.default || m)
const _431d60a2 = () => import('..\\code\\pages\\v1\\example\\between.vue' /* webpackChunkName: "pages_v1_example_between" */).then(m => m.default || m)
const _6de78bf2 = () => import('..\\code\\pages\\v1\\example\\update.vue' /* webpackChunkName: "pages_v1_example_update" */).then(m => m.default || m)
const _405e748c = () => import('..\\code\\pages\\v1\\example\\or.vue' /* webpackChunkName: "pages_v1_example_or" */).then(m => m.default || m)
const _231250f6 = () => import('..\\code\\pages\\v1\\example\\count.vue' /* webpackChunkName: "pages_v1_example_count" */).then(m => m.default || m)
const _69a52626 = () => import('..\\code\\pages\\v1\\example\\aggregate.vue' /* webpackChunkName: "pages_v1_example_aggregate" */).then(m => m.default || m)
const _ce41de64 = () => import('..\\code\\pages\\v1\\example\\where.vue' /* webpackChunkName: "pages_v1_example_where" */).then(m => m.default || m)
const _726dcc24 = () => import('..\\code\\pages\\v1\\tutorial\\skip.vue' /* webpackChunkName: "pages_v1_tutorial_skip" */).then(m => m.default || m)
const _a11bae9a = () => import('..\\code\\pages\\v1\\tutorial\\remove.vue' /* webpackChunkName: "pages_v1_tutorial_remove" */).then(m => m.default || m)
const _6b24da12 = () => import('..\\code\\pages\\v1\\tutorial\\or.vue' /* webpackChunkName: "pages_v1_tutorial_or" */).then(m => m.default || m)
const _84e9242e = () => import('..\\code\\pages\\v1\\tutorial\\between.vue' /* webpackChunkName: "pages_v1_tutorial_between" */).then(m => m.default || m)
const _35e902ce = () => import('..\\code\\pages\\v1\\example\\in.vue' /* webpackChunkName: "pages_v1_example_in" */).then(m => m.default || m)
const _f2803198 = () => import('..\\code\\pages\\v1\\example\\clear.vue' /* webpackChunkName: "pages_v1_example_clear" */).then(m => m.default || m)
const _14400800 = () => import('..\\code\\pages\\v1\\example\\like.vue' /* webpackChunkName: "pages_v1_example_like" */).then(m => m.default || m)
const _4fdd3c34 = () => import('..\\code\\pages\\v1\\tutorial\\helpers.vue' /* webpackChunkName: "pages_v1_tutorial_helpers" */).then(m => m.default || m)
const _b1dd7d14 = () => import('..\\code\\pages\\v1\\tutorial\\update_with_operator.vue' /* webpackChunkName: "pages_v1_tutorial_update_with_operator" */).then(m => m.default || m)
const _2a842a51 = () => import('..\\code\\pages\\v1\\example\\order_by.vue' /* webpackChunkName: "pages_v1_example_order_by" */).then(m => m.default || m)
const _cd7def84 = () => import('..\\code\\pages\\v1\\example\\simple_join.vue' /* webpackChunkName: "pages_v1_example_simple_join" */).then(m => m.default || m)
const _7a02449a = () => import('..\\code\\pages\\v1\\example\\update_with_operators.vue' /* webpackChunkName: "pages_v1_example_update_with_operators" */).then(m => m.default || m)
const _3665c9f4 = () => import('..\\code\\pages\\v1\\tutorial\\group_by.vue' /* webpackChunkName: "pages_v1_tutorial_group_by" */).then(m => m.default || m)
const _d8c173f0 = () => import('..\\code\\pages\\v1\\example\\create_db.vue' /* webpackChunkName: "pages_v1_example_create_db" */).then(m => m.default || m)
const _58e284b1 = () => import('..\\code\\pages\\v1\\example\\multiple_table_join.vue' /* webpackChunkName: "pages_v1_example_multiple_table_join" */).then(m => m.default || m)
const _37efce64 = () => import('..\\code\\pages\\v1\\tutorial\\adv_sql_example.vue' /* webpackChunkName: "pages_v1_tutorial_adv_sql_example" */).then(m => m.default || m)
const _3bc12da5 = () => import('..\\code\\pages\\v1\\example\\change_table_design.vue' /* webpackChunkName: "pages_v1_example_change_table_design" */).then(m => m.default || m)
const _5a97493a = () => import('..\\code\\pages\\v1\\example\\export_json.vue' /* webpackChunkName: "pages_v1_example_export_json" */).then(m => m.default || m)
const _15962df9 = () => import('..\\code\\pages\\v1\\tutorial\\get_started.vue' /* webpackChunkName: "pages_v1_tutorial_get_started" */).then(m => m.default || m)
const _321efe6c = () => import('..\\code\\pages\\v1\\tutorial\\drop_database.vue' /* webpackChunkName: "pages_v1_tutorial_drop_database" */).then(m => m.default || m)
const _72b88b18 = () => import('..\\code\\pages\\v1\\tutorial\\export_json.vue' /* webpackChunkName: "pages_v1_tutorial_export_json" */).then(m => m.default || m)
const _0bf30b24 = () => import('..\\code\\pages\\v1\\example\\ignore_case.vue' /* webpackChunkName: "pages_v1_example_ignore_case" */).then(m => m.default || m)
const _2eadd357 = () => import('..\\code\\pages\\v1\\tutorial\\order_by.vue' /* webpackChunkName: "pages_v1_tutorial_order_by" */).then(m => m.default || m)
const _264d3ce7 = () => import('..\\code\\pages\\v1\\tutorial\\bulk_insert.vue' /* webpackChunkName: "pages_v1_tutorial_bulk_insert" */).then(m => m.default || m)
const _77ff7c5e = () => import('..\\code\\pages\\v1\\tutorial\\ignore_case.vue' /* webpackChunkName: "pages_v1_tutorial_ignore_case" */).then(m => m.default || m)
const _3eb91c00 = () => import('..\\code\\pages\\v1\\example\\group_by.vue' /* webpackChunkName: "pages_v1_example_group_by" */).then(m => m.default || m)
const _af647642 = () => import('..\\code\\pages\\v1\\tutorial\\change_table_design.vue' /* webpackChunkName: "pages_v1_tutorial_change_table_design" */).then(m => m.default || m)
const _73b3b875 = () => import('..\\code\\pages\\v1\\example\\drop_db.vue' /* webpackChunkName: "pages_v1_example_drop_db" */).then(m => m.default || m)
const _3b2cc9ba = () => import('..\\code\\pages\\tutorial\\change_table_design.vue' /* webpackChunkName: "pages_tutorial_change_table_design" */).then(m => m.default || m)
const _7012d7fb = () => import('..\\code\\pages\\tutorial\\update_with_operator.vue' /* webpackChunkName: "pages_tutorial_update_with_operator" */).then(m => m.default || m)
const _98b2288c = () => import('..\\code\\pages\\example\\drop_db.vue' /* webpackChunkName: "pages_example_drop_db" */).then(m => m.default || m)
const _52693dd4 = () => import('..\\code\\pages\\tutorial\\get_started.vue' /* webpackChunkName: "pages_tutorial_get_started" */).then(m => m.default || m)
const _72e72e5f = () => import('..\\code\\pages\\tutorial\\getstarted.vue' /* webpackChunkName: "pages_tutorial_getstarted" */).then(m => m.default || m)
const _3ea1495c = () => import('..\\code\\pages\\tutorial\\order_by.vue' /* webpackChunkName: "pages_tutorial_order_by" */).then(m => m.default || m)
const _263dd82e = () => import('..\\code\\pages\\example\\ignore_case.vue' /* webpackChunkName: "pages_example_ignore_case" */).then(m => m.default || m)
const _7c3ea8c6 = () => import('..\\code\\pages\\example\\ignorecase.vue' /* webpackChunkName: "pages_example_ignorecase" */).then(m => m.default || m)
const _167eddea = () => import('..\\code\\pages\\tutorial\\group_by.vue' /* webpackChunkName: "pages_tutorial_group_by" */).then(m => m.default || m)
const _58795f52 = () => import('..\\code\\pages\\tutorial\\groupby.vue' /* webpackChunkName: "pages_tutorial_groupby" */).then(m => m.default || m)
const _0376ca4f = () => import('..\\code\\pages\\tutorial\\export_json.vue' /* webpackChunkName: "pages_tutorial_export_json" */).then(m => m.default || m)
const _b28a5fe0 = () => import('..\\code\\pages\\tutorial\\exportjson.vue' /* webpackChunkName: "pages_tutorial_exportjson" */).then(m => m.default || m)
const _464ab59a = () => import('..\\code\\pages\\tutorial\\create_database.vue' /* webpackChunkName: "pages_tutorial_create_database" */).then(m => m.default || m)
const _b8da87e6 = () => import('..\\code\\pages\\example\\create_db.vue' /* webpackChunkName: "pages_example_create_db" */).then(m => m.default || m)
const _3f28a63e = () => import('..\\code\\pages\\example\\createdb.vue' /* webpackChunkName: "pages_example_createdb" */).then(m => m.default || m)
const _c1d2b14a = () => import('..\\code\\pages\\example\\group_by.vue' /* webpackChunkName: "pages_example_group_by" */).then(m => m.default || m)
const _0a4181fc = () => import('..\\code\\pages\\example\\groupby.vue' /* webpackChunkName: "pages_example_groupby" */).then(m => m.default || m)
const _7a2f1103 = () => import('..\\code\\pages\\example\\simple_join.vue' /* webpackChunkName: "pages_example_simple_join" */).then(m => m.default || m)
const _aad25cc0 = () => import('..\\code\\pages\\example\\simplejoin.vue' /* webpackChunkName: "pages_example_simplejoin" */).then(m => m.default || m)
const _e7ff1790 = () => import('..\\code\\pages\\example\\update_with_operators.vue' /* webpackChunkName: "pages_example_update_with_operators" */).then(m => m.default || m)
const _3b8551ff = () => import('..\\code\\pages\\example\\export_json.vue' /* webpackChunkName: "pages_example_export_json" */).then(m => m.default || m)
const _13e49260 = () => import('..\\code\\pages\\example\\exportjson.vue' /* webpackChunkName: "pages_example_exportjson" */).then(m => m.default || m)
const _b01c0f14 = () => import('..\\code\\pages\\example\\multiple_table_join.vue' /* webpackChunkName: "pages_example_multiple_table_join" */).then(m => m.default || m)
const _63204cc2 = () => import('..\\code\\pages\\tutorial\\bulk_insert.vue' /* webpackChunkName: "pages_tutorial_bulk_insert" */).then(m => m.default || m)
const _7ad5d83f = () => import('..\\code\\pages\\tutorial\\bulkinsert.vue' /* webpackChunkName: "pages_tutorial_bulkinsert" */).then(m => m.default || m)
const _f324f8f2 = () => import('..\\code\\pages\\tutorial\\drop_database.vue' /* webpackChunkName: "pages_tutorial_drop_database" */).then(m => m.default || m)
const _965ae78e = () => import('..\\code\\pages\\tutorial\\ignore_case.vue' /* webpackChunkName: "pages_tutorial_ignore_case" */).then(m => m.default || m)
const _0f14e676 = () => import('..\\code\\pages\\tutorial\\ignorecase.vue' /* webpackChunkName: "pages_tutorial_ignorecase" */).then(m => m.default || m)
const _ea5ebd2c = () => import('..\\code\\pages\\example\\change_table_design.vue' /* webpackChunkName: "pages_example_change_table_design" */).then(m => m.default || m)
const _1ff03482 = () => import('..\\code\\pages\\tutorial\\create_table.vue' /* webpackChunkName: "pages_tutorial_create_table" */).then(m => m.default || m)
const _2e1140a8 = () => import('..\\code\\pages\\example\\order_by.vue' /* webpackChunkName: "pages_example_order_by" */).then(m => m.default || m)
const _5ec9c329 = () => import('..\\code\\pages\\tutorial\\adv_sql_example.vue' /* webpackChunkName: "pages_tutorial_adv_sql_example" */).then(m => m.default || m)
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
			path: "/example/or",
			component: _4d4f8a27,
			name: "example-or"
		},
		{
			path: "/tutorial/installation",
			component: _17913ca4,
			name: "tutorial-installation"
		},
		{
			path: "/example/clear",
			component: _dbfdb08e,
			name: "example-clear"
		},
		{
			path: "/example/like",
			component: _ea3bd24a,
			name: "example-like"
		},
		{
			path: "/tutorial/or",
			component: _07531052,
			name: "tutorial-or"
		},
		{
			path: "/tutorial/enums",
			component: _047e46ce,
			name: "tutorial-enums"
		},
		{
			path: "/example/promise",
			component: _bd05e2f2,
			name: "example-promise"
		},
		{
			path: "/tutorial/like",
			component: _d8374eea,
			name: "tutorial-like"
		},
		{
			path: "/tutorial/column",
			component: _306b7dca,
			name: "tutorial-column"
		},
		{
			path: "/tutorial/changetabledesign",
			component: _abbfccd0,
			name: "tutorial-changetabledesign"
		},
		{
			path: "/tutorial/promise",
			component: _01d1a252,
			name: "tutorial-promise"
		},
		{
			path: "/example/update",
			component: _6a6347e6,
			name: "example-update"
		},
		{
			path: "/tutorial/where",
			component: _893374ba,
			name: "tutorial-where"
		},
		{
			path: "/example/limit",
			component: _45ba5627,
			name: "example-limit"
		},
		{
			path: "/example/aggregate",
			component: _79989c2b,
			name: "example-aggregate"
		},
		{
			path: "/tutorial/updatewithoperator",
			component: _793450a7,
			name: "tutorial-updatewithoperator"
		},
		{
			path: "/tutorial/dropdb",
			component: _00a1e2a1,
			name: "tutorial-dropdb"
		},
		{
			path: "/example/multipletablejoin",
			component: _d9210858,
			name: "example-multipletablejoin"
		},
		{
			path: "/tutorial/delete",
			component: _1717fd9f,
			name: "tutorial-delete"
		},
		{
			path: "/tutorial/clear",
			component: _ad71c7ee,
			name: "tutorial-clear"
		},
		{
			path: "/example/remove",
			component: _1decc648,
			name: "example-remove"
		},
		{
			path: "/tutorial/database",
			component: _01f6da6f,
			name: "tutorial-database"
		},
		{
			path: "/tutorial/insert",
			component: _30fdf8a6,
			name: "tutorial-insert"
		},
		{
			path: "/example/updatewithoperators",
			component: _00a53d0c,
			name: "example-updatewithoperators"
		},
		{
			path: "/tutorial/between",
			component: _7bfea344,
			name: "tutorial-between"
		},
		{
			path: "/tutorial/limit",
			component: _5d004a77,
			name: "tutorial-limit"
		},
		{
			path: "/tutorial/in",
			component: _1c3df3ce,
			name: "tutorial-in"
		},
		{
			path: "/example/count",
			component: _2e53917b,
			name: "example-count"
		},
		{
			path: "/tutorial/table",
			component: _7e80f90a,
			name: "tutorial-table"
		},
		{
			path: "/tutorial/skip",
			component: _5beb4b1a,
			name: "tutorial-skip"
		},
		{
			path: "/tutorial/helpers",
			component: _d2f6d17e,
			name: "tutorial-helpers"
		},
		{
			path: "/example/between",
			component: _1e6482f4,
			name: "example-between"
		},
		{
			path: "/example/changetabledesign",
			component: _3193c570,
			name: "example-changetabledesign"
		},
		{
			path: "/tutorial/operators",
			component: _51c7e1ea,
			name: "tutorial-operators"
		},
		{
			path: "/example/where",
			component: _b7bf5d5a,
			name: "example-where"
		},
		{
			path: "/example/distinct",
			component: _66c73480,
			name: "example-distinct"
		},
		{
			path: "/example/skip",
			component: _6defce7a,
			name: "example-skip"
		},
		{
			path: "/tutorial/count",
			component: _459985cb,
			name: "tutorial-count"
		},
		{
			path: "/example/select",
			component: _79be06c0,
			name: "example-select"
		},
		{
			path: "/tutorial/aggregate",
			component: _4da82f0a,
			name: "tutorial-aggregate"
		},
		{
			path: "/example/in",
			component: _42da1869,
			name: "example-in"
		},
		{
			path: "/example/operator",
			component: _7ca76930,
			name: "example-operator"
		},
		{
			path: "/example/insert",
			component: _16086dfd,
			name: "example-insert"
		},
		{
			path: "/tutorial/distinct",
			component: _22464f70,
			name: "tutorial-distinct"
		},
		{
			path: "/tutorial/select",
			component: _4b369c70,
			name: "tutorial-select"
		},
		{
			path: "/tutorial/remove",
			component: _21354810,
			name: "tutorial-remove"
		},
		{
			path: "/tutorial/join",
			component: _02c6f6c4,
			name: "tutorial-join"
		},
		{
			path: "/tutorial/update",
			component: _c7721c86,
			name: "tutorial-update"
		},
		{
			path: "/tutorial/advsqlexample",
			component: _04c3b58b,
			name: "tutorial-advsqlexample"
		},
		{
			path: "/v1/example/remove",
			component: _7df413a6,
			name: "v1-example-remove"
		},
		{
			path: "/v1/tutorial/where",
			component: _5e7f7588,
			name: "v1-tutorial-where"
		},
		{
			path: "/v1/tutorial/update",
			component: _5c53be78,
			name: "v1-tutorial-update"
		},
		{
			path: "/v1/example/promise",
			component: _6189db42,
			name: "v1-example-promise"
		},
		{
			path: "/v1/example/operator",
			component: _0339160d,
			name: "v1-example-operator"
		},
		{
			path: "/v1/example/limit",
			component: _3a7915a2,
			name: "v1-example-limit"
		},
		{
			path: "/v1/tutorial/in",
			component: _60af6854,
			name: "v1-tutorial-in"
		},
		{
			path: "/v1/tutorial/like",
			component: _eeb9cff4,
			name: "v1-tutorial-like"
		},
		{
			path: "/v1/tutorial/installation",
			component: _d2af13ae,
			name: "v1-tutorial-installation"
		},
		{
			path: "/v1/example/select",
			component: _1cd736a5,
			name: "v1-example-select"
		},
		{
			path: "/v1/tutorial/select",
			component: _0b43692b,
			name: "v1-tutorial-select"
		},
		{
			path: "/v1/tutorial/count",
			component: _2e9a94a0,
			name: "v1-tutorial-count"
		},
		{
			path: "/v1/tutorial/join",
			component: _194977ce,
			name: "v1-tutorial-join"
		},
		{
			path: "/v1/tutorial/distinct",
			component: _1252d96b,
			name: "v1-tutorial-distinct"
		},
		{
			path: "/v1/tutorial/database",
			component: _1bf9372c,
			name: "v1-tutorial-database"
		},
		{
			path: "/v1/example/skip",
			component: _3405fde8,
			name: "v1-example-skip"
		},
		{
			path: "/v1/tutorial/clear",
			component: _4c604bee,
			name: "v1-tutorial-clear"
		},
		{
			path: "/v1/tutorial/operators",
			component: _2ebe7720,
			name: "v1-tutorial-operators"
		},
		{
			path: "/v1/tutorial/insert",
			component: _b0e45f30,
			name: "v1-tutorial-insert"
		},
		{
			path: "/v1/tutorial/table",
			component: _219a28ef,
			name: "v1-tutorial-table"
		},
		{
			path: "/v1/tutorial/limit",
			component: _00197a5c,
			name: "v1-tutorial-limit"
		},
		{
			path: "/v1/example/distinct",
			component: _0e293065,
			name: "v1-example-distinct"
		},
		{
			path: "/v1/tutorial/aggregate",
			component: _2a9ec440,
			name: "v1-tutorial-aggregate"
		},
		{
			path: "/v1/example/insert",
			component: _8dbcc43c,
			name: "v1-example-insert"
		},
		{
			path: "/v1/tutorial/enums",
			component: _b0d1129a,
			name: "v1-tutorial-enums"
		},
		{
			path: "/v1/tutorial/promise",
			component: _40a3f97c,
			name: "v1-tutorial-promise"
		},
		{
			path: "/v1/example/between",
			component: _431d60a2,
			name: "v1-example-between"
		},
		{
			path: "/v1/example/update",
			component: _6de78bf2,
			name: "v1-example-update"
		},
		{
			path: "/v1/example/or",
			component: _405e748c,
			name: "v1-example-or"
		},
		{
			path: "/v1/example/count",
			component: _231250f6,
			name: "v1-example-count"
		},
		{
			path: "/v1/example/aggregate",
			component: _69a52626,
			name: "v1-example-aggregate"
		},
		{
			path: "/v1/example/where",
			component: _ce41de64,
			name: "v1-example-where"
		},
		{
			path: "/v1/tutorial/skip",
			component: _726dcc24,
			name: "v1-tutorial-skip"
		},
		{
			path: "/v1/tutorial/remove",
			component: _a11bae9a,
			name: "v1-tutorial-remove"
		},
		{
			path: "/v1/tutorial/or",
			component: _6b24da12,
			name: "v1-tutorial-or"
		},
		{
			path: "/v1/tutorial/between",
			component: _84e9242e,
			name: "v1-tutorial-between"
		},
		{
			path: "/v1/example/in",
			component: _35e902ce,
			name: "v1-example-in"
		},
		{
			path: "/v1/example/clear",
			component: _f2803198,
			name: "v1-example-clear"
		},
		{
			path: "/v1/example/like",
			component: _14400800,
			name: "v1-example-like"
		},
		{
			path: "/v1/tutorial/helpers",
			component: _4fdd3c34,
			name: "v1-tutorial-helpers"
		},
		{
			path: "/v1/tutorial/update:with_operator?",
			component: _b1dd7d14,
			name: "v1-tutorial-updatewith_operator"
		},
		{
			path: "/v1/example/order:by?",
			component: _2a842a51,
			name: "v1-example-orderby"
		},
		{
			path: "/v1/example/simple:join?",
			component: _cd7def84,
			name: "v1-example-simplejoin"
		},
		{
			path: "/v1/example/update:with_operators?",
			component: _7a02449a,
			name: "v1-example-updatewith_operators"
		},
		{
			path: "/v1/tutorial/group:by?",
			component: _3665c9f4,
			name: "v1-tutorial-groupby"
		},
		{
			path: "/v1/example/create:db?",
			component: _d8c173f0,
			name: "v1-example-createdb"
		},
		{
			path: "/v1/example/multiple:table_join?",
			component: _58e284b1,
			name: "v1-example-multipletable_join"
		},
		{
			path: "/v1/tutorial/adv:sql_example?",
			component: _37efce64,
			name: "v1-tutorial-advsql_example"
		},
		{
			path: "/v1/example/change:table_design?",
			component: _3bc12da5,
			name: "v1-example-changetable_design"
		},
		{
			path: "/v1/example/export:json?",
			component: _5a97493a,
			name: "v1-example-exportjson"
		},
		{
			path: "/v1/tutorial/get:started?",
			component: _15962df9,
			name: "v1-tutorial-getstarted"
		},
		{
			path: "/v1/tutorial/drop:database?",
			component: _321efe6c,
			name: "v1-tutorial-dropdatabase"
		},
		{
			path: "/v1/tutorial/export:json?",
			component: _72b88b18,
			name: "v1-tutorial-exportjson"
		},
		{
			path: "/v1/example/ignore:case?",
			component: _0bf30b24,
			name: "v1-example-ignorecase"
		},
		{
			path: "/v1/tutorial/order:by?",
			component: _2eadd357,
			name: "v1-tutorial-orderby"
		},
		{
			path: "/v1/tutorial/bulk:insert?",
			component: _264d3ce7,
			name: "v1-tutorial-bulkinsert"
		},
		{
			path: "/v1/tutorial/ignore:case?",
			component: _77ff7c5e,
			name: "v1-tutorial-ignorecase"
		},
		{
			path: "/v1/example/group:by?",
			component: _3eb91c00,
			name: "v1-example-groupby"
		},
		{
			path: "/v1/tutorial/change:table_design?",
			component: _af647642,
			name: "v1-tutorial-changetable_design"
		},
		{
			path: "/v1/example/drop:db?",
			component: _73b3b875,
			name: "v1-example-dropdb"
		},
		{
			path: "/tutorial/change:table_design?",
			component: _3b2cc9ba,
			name: "tutorial-changetable_design"
		},
		{
			path: "/tutorial/update:with_operator?",
			component: _7012d7fb,
			name: "tutorial-updatewith_operator"
		},
		{
			path: "/example/drop:db?",
			component: _98b2288c,
			name: "example-dropdb"
		},
		{
			path: "/tutorial/get:started?",
			component: _52693dd4,
			children: [
				{
					path: "",
					component: _72e72e5f,
					name: "tutorial-getstarted"
				}
			]
		},
		{
			path: "/tutorial/order:by?",
			component: _3ea1495c,
			name: "tutorial-orderby"
		},
		{
			path: "/example/ignore:case?",
			component: _263dd82e,
			children: [
				{
					path: "",
					component: _7c3ea8c6,
					name: "example-ignorecase"
				}
			]
		},
		{
			path: "/tutorial/group:by?",
			component: _167eddea,
			children: [
				{
					path: "",
					component: _58795f52,
					name: "tutorial-groupby"
				}
			]
		},
		{
			path: "/tutorial/export:json?",
			component: _0376ca4f,
			children: [
				{
					path: "",
					component: _b28a5fe0,
					name: "tutorial-exportjson"
				}
			]
		},
		{
			path: "/tutorial/create:database?",
			component: _464ab59a,
			name: "tutorial-createdatabase"
		},
		{
			path: "/example/create:db?",
			component: _b8da87e6,
			children: [
				{
					path: "",
					component: _3f28a63e,
					name: "example-createdb"
				}
			]
		},
		{
			path: "/example/group:by?",
			component: _c1d2b14a,
			children: [
				{
					path: "",
					component: _0a4181fc,
					name: "example-groupby"
				}
			]
		},
		{
			path: "/example/simple:join?",
			component: _7a2f1103,
			children: [
				{
					path: "",
					component: _aad25cc0,
					name: "example-simplejoin"
				}
			]
		},
		{
			path: "/example/update:with_operators?",
			component: _e7ff1790,
			name: "example-updatewith_operators"
		},
		{
			path: "/example/export:json?",
			component: _3b8551ff,
			children: [
				{
					path: "",
					component: _13e49260,
					name: "example-exportjson"
				}
			]
		},
		{
			path: "/example/multiple:table_join?",
			component: _b01c0f14,
			name: "example-multipletable_join"
		},
		{
			path: "/tutorial/bulk:insert?",
			component: _63204cc2,
			children: [
				{
					path: "",
					component: _7ad5d83f,
					name: "tutorial-bulkinsert"
				}
			]
		},
		{
			path: "/tutorial/drop:database?",
			component: _f324f8f2,
			name: "tutorial-dropdatabase"
		},
		{
			path: "/tutorial/ignore:case?",
			component: _965ae78e,
			children: [
				{
					path: "",
					component: _0f14e676,
					name: "tutorial-ignorecase"
				}
			]
		},
		{
			path: "/example/change:table_design?",
			component: _ea5ebd2c,
			name: "example-changetable_design"
		},
		{
			path: "/tutorial/create:table?",
			component: _1ff03482,
			name: "tutorial-createtable"
		},
		{
			path: "/example/order:by?",
			component: _2e1140a8,
			name: "example-orderby"
		},
		{
			path: "/tutorial/adv:sql_example?",
			component: _5ec9c329,
			name: "tutorial-advsql_example"
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
