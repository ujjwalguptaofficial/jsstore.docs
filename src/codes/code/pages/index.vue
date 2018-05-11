<template>
<v-layout row wrap id="divContent">
     <v-flex sm12>
                <div id='divLogoContainer'>
                    <div class="margin-left-20px">
                        <img class="responsive-img" src="/img/JsStore_350_155.png" alt="JsStore logo" />
                    </div>
                </div>
                <div id="divStyle"></div>
     </v-flex>
                <v-flex sm12 offset-md1 md10 offset-xl-2 xl8 class="margin-top-40px">
                 <div id="divOverview">
                        <span style="font-size: 20px;font-weight: 500;">
                            Store, Search, Delete and Update data in browsers with JsStore.</span>
                        <br>
                        <br>JsStore is an IndexedDB Wrapper. It makes IndexedDB super easy with its SQL like apis.
                    </div>
                    <div id="divLinkGroup">
                        <v-btn href="tutorial/getstarted">Get Started</v-btn>
                        <v-btn href="https://github.com/ujjwalguptaofficial/JsStore" target="_blank">Download v2.0.2</v-btn>
                    </div>
                    <div class="margin-top-50px top-border">
                        <h4></h4>
                        <ul id="ulFeatureList">
                            <li>
                                <div class="li-header">Web worker support</div>
                                <span class="li-body">JsStore automatically executes code in Webworker, if browser support.</span>
                            </li>
                            <li>
                                <div class="li-header">Join Support</div>
                                <span class="li-body">Execute inner, left and right join.</span>
                            </li>
                            <li>
                                <div class="li-header">Complex queries Support</div>
                                <span class="li-body"> Execute complex queries and much more.</span>
                            </li>

                            <li>
                                <div class="li-header">DataType Support</div>
                                <span class="li-body">Define your column with data type and JsStore will validate when you insert or update.</span>
                            </li>
                            <li>
                                <div class="li-header">TypeScript Support</div>
                                <span class="li-body">Dont worry if you are working in Typescript technologies.</span>
                            </li>
                            <li>
                                <div class="li-header">Online code editor</div>
                                <span class="li-body">Execute your code and get the output with execution time.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="text-center">
                        <a target="_blank" title="github" href="https://github.com/ujjwalguptaofficial/JsStore">
                            <img class="responsive-img" src="/img/github.svg" alt="github logo" />
                        </a>
                        <a target="_blank" class="margin-left-20px" title="twitter handle" href="https://twitter.com/idbwrapper">
                            <img class="responsive-img" src="/img/twitter.svg" alt="twitter logo" />
                        </a>
                        <a target="_blank" class="margin-left-20px" title="gitter" href="https://gitter.im/JsStore">
                            <img style="height:50px;width:50px;padding-top: 8px;" class="responsive-img" src="/img/gitter.svg" alt="github logo" />
                        </a>
                        <a target="_blank" class="margin-left-20px" title="npm" href="https://www.npmjs.com/package/jsstore">
                            <img style="height:50px;width:50px;padding-top: 8px;" class="responsive-img" src="/img/Npm-logo.svg" alt="npm logo" />
                        </a>
                        <a target="_blank" class="margin-left-20px" title="travis" href="https://travis-ci.org/ujjwalguptaofficial/JsStore">
                            <img style="height:50px;width:50px;padding-top: 8px;" class="responsive-img" src="/img/travis.png" alt="travis logo" />
                        </a>
                    </div>
                </v-flex>
</v-layout>
</template>

<style scoped>
@import url("~/styles/index.css");
</style>
<style>
.toolbar {
  z-index: 0;
}
.toolbar .logo {
  display: none;
}
.btn {
  background-color: #42abf5 !important;
}
.container {
  padding: 0px;
}
</style>

