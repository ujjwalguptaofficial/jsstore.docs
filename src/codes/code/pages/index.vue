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
                    Execute Database operation in browsers with JsStore.</span>
                <br>
                <br>JsStore is an IndexedDB Wrapper. It makes IndexedDB super easy with its SQL like apis.
            </div>
            <div id="divLinkGroup">
                <v-btn href="tutorial/get-started">Get Started</v-btn>
                <v-btn href="https://github.com/ujjwalguptaofficial/JsStore" target="_blank">Download</v-btn>
            </div>
            <div class="center-align margin-top-20px">
                <i class="material-icons" style="vertical-align:bottom;">insert_emoticon</i> Proudly Launching
                <a target="_blank" href="https://github.com/ujjwalguptaofficial/idbstudio">IDBStudio</a> - A cli management tool for jsstore.
            </div>
            <div class="margin-top-50px top-border">
                <h4></h4>
                <ul id="ulFeatureList">
                    <li>
                        <div class="li-header">Web worker support</div>
                        <span class="li-body">JsStore can be executed in Web Worker or without Worker.</span>
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
                <a target="_blank" class="margin-left-20px" title="meidum" href="https://medium.com/jsstore">
                    <svg class="svgIcon-use" width="45" height="45" viewBox="0 0 45 45">
                        <path d="M5 40V5h35v35H5zm8.56-12.627c0 .555-.027.687-.318 1.03l-2.457 2.985v.396h6.974v-.396l-2.456-2.985c-.291-.343-.344-.502-.344-1.03V18.42l6.127 13.364h.714l5.256-13.364v10.644c0 .29 0 .342-.185.528l-1.848 1.796v.396h9.19v-.396l-1.822-1.796c-.184-.186-.21-.238-.21-.528V15.937c0-.291.026-.344.21-.528l1.823-1.797v-.396h-6.471l-4.622 11.542-5.203-11.542h-6.79v.396l2.14 2.64c.239.292.291.37.291.768v10.353z"></path>
                    </svg>
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

