(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{208:function(e,t,r){"use strict";r.r(t);var o={components:{Layout:r(172).a}},n=r(14),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",{attrs:{title:"Regex",description:"using regex to fliter data",keywords:"regex, api, query, indexeddb, jsstore",contentSrc:"/home/travis/build/ujjwalguptaofficial/jsstore.docs/out/content/tutorial/where/regex.md"}},[r("p",[e._v("Regex is used with Where to search for a specified pattern in a column value. For more information about regex, visit "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"}},[e._v("mozilla regular expression guide")])]),e._v(" "),r("h4",{attrs:{id:"jsstore"}},[e._v("JsStore")]),e._v(" "),r("pre",[r("code",[e._v("var results = await connection.select({\n    from: 'Customers',\n    where: {\n        Country: {\n            regex: /mexico|brazil/i\n        }\n    }\n});\n//results will be array of objects.\nconsole.log(results);\n")])]),e._v(" "),r("p",{staticClass:"margin-top-40px text-center"},[r("a",{staticClass:"btn info",attrs:{target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20'Customers'%2C%0A%20%20%20%20where%3A%20%7B%0A%20%20%20%20%20%20%20%20country%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20regex%3A%20%2Fmexico%7Cbrazil%2Fi%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D)"}},[e._v("Example")])])])}),[],!1,null,null,null);t.default=component.exports}}]);