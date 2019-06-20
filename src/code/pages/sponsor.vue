<template>
    <div>
        <p>
            JsStore is an open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. You can support JsStore development via the following methods:
        </p>
        <div class="margin-top-40px">
            <h5>Recurring Pledges - Monthly donation</h5>
            <v-divider></v-divider>
            <p class="margin-top-20px">
                Recurring pledges has so many advantages like - <br><br>
                <ul>
                    <li class="margin-bottom-10px">Having your company name listed in the JsStore GitHub repository & on this website at various place.</li>
                    <li class="margin-bottom-10px">A private seminar to your company for jsstore by Ujjwal Gupta. <a href="#" @click="showTC('jsstore_seminar')">T&C</a>.</li>
                    <li class="margin-bottom-10px">A private seminar for every runing & upcoming projects like - fortjs etc. <a href="#" @click="showTC('private_seminar')">T&C</a>.</li>
                    <li class="margin-bottom-10px">Occassionaly visit to your company. </li>
                </ul> 
            </p>
            <p>
                There are different types of recurrent sponsorship - <br><br>
                <ul>
                    <li class="margin-bottom-10px">Platinum Sponsors (<b>$2000</b> per month) - Sponsor will get their logo on Github, frontpage of jsstore, right side of jsstore doc page and sponsors page.</li>
                    <li class="margin-bottom-10px">Diamond Sponsors (<b>$1000</b> per month) - Sponsor will get their logo on Github, frontpage of jsstore, bottom of jsstore doc page and sponsors page.</li>
                    <li class="margin-bottom-10px">Gold Sponsors (<b>$500</b> per month) - Sponsor will get their logo on Github, frontpage of jsstore, bottom of jsstore doc page below diamond sponsors and sponsors page.</li>
                    <li class="margin-bottom-10px">Silver Sponsors (<b>$300</b> per month) - Sponsor will get their logo on Github, frontpage of jsstore, bottom of jsstore doc page below gold sponsors and sponsors page.</li>
                    <li class="margin-bottom-10px">Bronze Sponsors (<b>$150</b> per month) - Sponsor will get their logo on Github, frontpage of jsstore, and sponsors page.</li>
                    <li class="margin-bottom-10px">Backers (<b>$5 - $100</b> per month) - Backers will get their logo on Github, frontpage of jsstore, and sponsors page. Note:- Backers should be a single individual.</li>
                </ul>
            </p>
            <p class="margin-top-20px">
                You can donate through various channels - <br><br>
                <ul>
                    <li class="margin-bottom-10px">
                        <a href="https://www.patreon.com/ujjwalgupta" target="_blank">Become a backer or sponsor via Patreon</a> (goes directly to support Ujjwal gupta's full-time work on jsstore)
                    </li>
                    <li class="margin-bottom-10px">
                        <a href="https://opencollective.com/jsstore">Become a backer or sponsor via OpenCollective</a> (goes into a fund with transparent expense models supporting community efforts and events)
                    </li>
                </ul>
            </p>
        </div>
        <div class="margin-top-20px">
            <h5>One time donations</h5>
            <v-divider></v-divider>
            <p class="margin-top-20px">
                We accept donations through these channels:
            </p>
            <p class="margin-top-20px center-align">
                <a href="https://paypal.me/ujjwalkrgupta" target="_blank">
                    <img src="/img/paypal.png" style="width:100px">
                </a>
            </p>
        </div>
        <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Terms & condition
        </v-card-title>

        <v-card-text>
         {{dialogText}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
         <p style="width: 100%;text-align: center;}"> 
             <b style="color:red;">Note:-</b> You need to provide the travel & stay expenses.
         </p>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
    </div>
    
</template>
<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
@Component({
    
})
export default class Sponsor extends Vue{
    dialog = false;
    dialogText = "";
    showTC(value){
        switch(value){
               case 'jsstore_seminar':
                    this.dialogText = "A seminar for jsstore will be instantly provided by ujjwal gupta in your company."; break;
            case 'private_seminar':
                    this.dialogText = "A seminar will be provided by ujjwal gupta in your company for runing project & upcoming projects in future."; break;
            case 'occasionally_visit':
                this.dialogText = "Ujjwal will contact your company for visit . You can also contact ujjwal if you want to invite him for attending some function going in your company. But if not available/ interested, he can deny the invitation."

        }
        this.dialog = true;
    }

    head() {
        return {
            meta: [
                {
                hid: "keywords",
                name: "keywords",
                content: "sponsor, jsstore, sql, indexeddb, storage"
                }, {
          hid: "description",
          name: "description",
          content: "Become a partner by sponsoring jsstore."
        }
            ]
        };
  }
}
</script>
