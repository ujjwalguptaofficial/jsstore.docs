<template>
<div>
<v-layout row wrap>
 <v-flex id="divDbInfo" xs12 sm8 md2 offset-sm-2 class="hidden-xs-and-down margin-top-50px">
            <table>
                <caption>Current Database</caption>
                <thead>
                    <tr>
                        <th>Table</th>
                        <th>Records</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="info in dbInfo" :key="info.name">
                        <td>{{info.name}}</td>
                        <td>{{info.count}}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr @click="restoreDb">
                        <td colspan="2">
                            <a class="margin-top-20px btn primary" href="#">Restore Db</a>
                        </td>
                    </tr>
                </tfoot>
            </table>
    </v-flex>
    <v-flex id="divExampleCode" xs12 sm12 md7 l8 xl6 class="margin-left-15px">
     <div>
        <div class="content-heading">JsStore Code</div>
        <div id="divCode" contenteditable>
            <div v-html="exampleHtml" class="margin-top-20px"></div>
        </div>
    </div>
    <p>
        <span>
            You can also edit code and run it.
        </span>
        <button @click="execute" disabled id="btnExecute" class="btn waves-effect right-align">Run
            <i class="material-icons">&#xE037;</i>
        </button>
    </p>
    <div>
        <div class="margin-top-30px">
            <span class="content-heading">Result :</span>
            <span id="recordCount" style="padding-top:10px;" class="hidden right">No of Records : </span>
        </div>
        <p id="timeTakenContainer" class="right-align hidden">
            Time Taken :
            <span id='timeCount'></span> sec.
        </p>
        <div id="divResult"></div>
    </div>
    </v-flex>
</v-layout>
<v-layout row justify-center>
    <v-dialog v-model="isEditorLoading" persistent max-width="400">
      <v-card>
        <v-card-title class="headline">Loading Editor</v-card-title>
        <v-card-text>
            Please wait - Example page is being configured.
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
 </div>

</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import * as axios from "axios";
import { DemoDbService } from "../service/demo_db_service";
import { IDbInfo } from "../interfaces";
import DomHelper from "../helpers/dom_helper";
import { vueEvent } from "../common_var";

var codeInitTime;
var isJoin = false;

@Component({
  props: {
    innerHtml: String,
    pageTitle: String
  }
})
export default class Example extends Vue {
  // props
  innerHtml;
  pageTitle;

  //member
  isEditorLoading = true;
  dbInfo: IDbInfo[] = [];
  version = 2;

  constructor() {
    super();
    this.catchEvents();
  }

  mounted() {
    this.version = this.getVersion();
    JsStore.enableLog();
    var demoServiceInstance = new DemoDbService();
    demoServiceInstance
      .createDemoDataBase()
      .then(dbInfo => {
        this.isEditorLoading = false;
        this.dbInfo = dbInfo as any;
        (document.getElementById("btnExecute") as HTMLElement).removeAttribute(
          "disabled"
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  catchEvents() {
    vueEvent.$on("version_change", this.onVersionChange);
  }

  getVersion() {
    const currentUrl = (this.$route as any).path;
    if (currentUrl.indexOf("v1") >= 0) {
      return 1;
    } else {
      return 2;
    }
  }

  onVersionChange(value: number) {
    this.version = value;
    const currentUrl: string = (this.$route as any).path;
    const nextUrl = this.getRelativeUrl_() + currentUrl.split("/").reverse()[0];
    this.$router.push(nextUrl);
  }

  private getRelativeUrl_() {
    switch (this.version) {
      case 1:
        return "/v1/example/";
      case 2:
        return "/example/";
    }
  }

  head() {
    return {
      title: `Example - ${this.pageTitle}`,
      script: [{ src: "/scripts/jsstore.js" }]
    };
  }

  restoreDb() {
    this.isEditorLoading = true;
    new DemoDbService().restoreDb(function() {
      setTimeout(function() {
        (window as any).location.reload();
      }, 200);
    });
  }

  execute() {
    var code = (document.querySelector("#divCode pre") as HTMLElement)
      .innerText;
    if (code.indexOf("Join") >= 0) {
      isJoin = true;
    }
    eval(code);
    codeInitTime = performance.now();
  }

  get exampleHtml() {
    return decodeURI(this.innerHtml);
  }
}

function $(selector) {
  return document.querySelector(selector) as HTMLElement;
}

export function log(results) {
  var codeEndTime = performance.now(),
    timeTaken = (codeEndTime - codeInitTime) / 1000;
  $("#timeTakenContainer").classList.remove("hidden");
  $("#timeCount").innerText = timeTaken.toString();
  var result_type = JsStore.getType(results);
  switch (result_type) {
    case JsStore.Data_Type.Array:
      var Table = document.createElement("Table"),
        RowsLength = results.length,
        HtmlString = "<tr>",
        Props: string[] = [];
      for (var prop in results[0]) {
        Props.push(prop);
        HtmlString += "<th>" + prop + "</th>";
      }
      HtmlString += "</tr>";
      var Width = 100 / Props.length;
      for (var i = 0; i < RowsLength; i++) {
        var Temp = "<tr>";
        for (var j = 0; j < Props.length; j++) {
          if (!isJoin) {
            Temp += "<td>" + results[i][Props[j]] + "</td>";
          } else {
            Temp +=
              "<td style=width:" +
              Width +
              "%>" +
              JSON.stringify(results[i][Props[j]]) +
              "</td>";
          }
        }
        Temp += "</tr>";
        HtmlString += Temp;
      }
      Table.innerHTML = HtmlString;
      Table.className = "bordered responsive-table centered";
      var DivResult = $("#divResult");
      DivResult.innerHTML = "";
      DivResult.appendChild(Table);
      var recordCount = $("#recordCount");
      recordCount.classList.remove("hidden");
      recordCount.innerText = "No of Record : " + results.length;
      break;
    case JsStore.Data_Type.Object:
      results = JSON.stringify(results);
    case JsStore.Data_Type.String:
    case JsStore.Data_Type.Number:
      var recordCount = $("#recordCount");
      recordCount.classList.add("hidden");
      var DivResult = $("#divResult");
      DivResult.innerHTML = results; //+ " rows affected";
      break;
    default:
      alert("invalid result");
  }
}
try {
  new DomHelper().window.log = log;
} catch (ex) {
  console.log(ex);
}
</script>
<style>
@import url("~/styles/example.css");
</style>
