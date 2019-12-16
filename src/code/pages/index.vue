<template>
  <v-layout row wrap id="divContent">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
      integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
      crossorigin="anonymous"
    />
    <v-flex sm12>
      <div id="divLogoContainer">
        <div class="margin-left-20px">
          <img class="responsive-img" src="/img/JsStore_350_155.png" alt="JsStore logo" />
        </div>
      </div>
      <div id="divStyle"></div>
    </v-flex>
    <v-flex sm12 offset-md1 md10 offset-xl-2 xl8 class="margin-top-40px">
      <div id="divOverview">
        <span
          style="font-size: 20px;font-weight: 500;"
        >Execute Database operation in browsers with JsStore.</span>
        <br />
        <br />JsStore is an IndexedDB Wrapper. It makes IndexedDB super easy
        with its SQL like apis.
      </div>
      <div id="divLinkGroup">
        <v-btn href="tutorial/get-started">Get Started</v-btn>
        <v-btn
          style="background:#617b92 !important;"
          href="https://github.com/ujjwalguptaofficial/JsStore"
          target="_blank"
        >
          Github
          <i class="margin-left-10px fab fa-github"></i>
        </v-btn>
        <v-btn
          style="background:#617b92 !important;"
          target="_blank"
          href="https://gitter.im/JsStore/Lobby"
        >
          Get Help
          <i class="margin-left-10px fab fa-gitter"></i>
        </v-btn>
      </div>
      <div>
        <p class="used-by">Used By</p>
        <p class="company-using">
          <a target="_blank" href="https://www.ringcentral.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              alt="RingCentral Virtual PBX, Phone and Internet Fax Service and Software"
              class="ringcentral"
              id="svg-1330251413"
              viewBox="0 0 162 23"
            >
              <path
                d="M7.33 12.2L6.2 18.73H0L3.28.06h8.93a21.24 21.24 0 0 1 3.5.24 7.4 7.4 0 0 1 2.35.75 3.18 3.18 0 0 1 1.3 1.26 3.66 3.66 0 0 1 .42 1.8 7.14 7.14 0 0 1-.14 1.27 6.38 6.38 0 0 1-1.27 2.86 4.83 4.83 0 0 1-2.7 1.7c.37.14.72.28 1.02.43a2.77 2.77 0 0 1 .8.56 2.36 2.36 0 0 1 .5.83 3.68 3.68 0 0 1 .2 1.26 11.03 11.03 0 0 1-.2 1.88l-.3 1.63a6.63 6.63 0 0 0-.1 1.03c0 .4.17.62.5.62l-.1.57h-6.27a2.94 2.94 0 0 1-.04-.6c0-.3.02-.67.07-1.13s.1-.98.22-1.55A8.27 8.27 0 0 0 12.1 14a1.54 1.54 0 0 0-.62-1.4 4.5 4.5 0 0 0-2.27-.4H7.33zm.73-4.08h2.44a5.33 5.33 0 0 0 2.26-.4 1.72 1.72 0 0 0 .97-1.36 2.2 2.2 0 0 0 .02-.4 1.3 1.3 0 0 0-.6-1.17 2.96 2.96 0 0 0-1.57-.4h-2.9zm20.4-2.98h5l-.37 2.12a9.25 9.25 0 0 1 2.32-1.88 5.75 5.75 0 0 1 2.76-.63 4.67 4.67 0 0 1 3.4 1.06 4.14 4.14 0 0 1 1.06 3.1 9.65 9.65 0 0 1-.15 1.68l-1.43 8.14H35.6l1.27-7.18a5.6 5.6 0 0 0 .08-.9 1.97 1.97 0 0 0-.33-1.18A1.4 1.4 0 0 0 35.4 9a2.2 2.2 0 0 0-1.84.74 4.42 4.42 0 0 0-.8 2.06l-1.2 6.92H26.1zm19.3 13.95v.06a.72.72 0 0 0 .23.52 1.46 1.46 0 0 0 1.12.34 2.44 2.44 0 0 0 1.78-.6 3.82 3.82 0 0 0 .87-2.05l.2-1.1a6.53 6.53 0 0 1-1.68 1.02 6.3 6.3 0 0 1-2.52.43 5.64 5.64 0 0 1-2.17-.4 4.45 4.45 0 0 1-1.55-1.05 4.38 4.38 0 0 1-.94-1.6 6.22 6.22 0 0 1-.3-2 5.87 5.87 0 0 1 .03-.68l.1-.7a10.71 10.71 0 0 1 .74-2.5 7.7 7.7 0 0 1 1.44-2.2 7.18 7.18 0 0 1 2.2-1.58 6.85 6.85 0 0 1 2.97-.6 4.26 4.26 0 0 1 2.25.58 4.45 4.45 0 0 1 1.56 1.57l.3-1.77h4.8l-1.93 10.94a23.8 23.8 0 0 1-.66 2.85 6.05 6.05 0 0 1-1.32 2.3 5.92 5.92 0 0 1-2.44 1.54 15.13 15.13 0 0 1-7.1.24 6.3 6.3 0 0 1-2-.83 3.33 3.33 0 0 1-1.13-1.2 2.96 2.96 0 0 1-.34-1.4v-.17h5.5zM51 8.24a2.22 2.22 0 0 0-1.04.24 2.27 2.27 0 0 0-.76.64 3.5 3.5 0 0 0-.52 1 7.3 7.3 0 0 0-.3 1.2c0 .13-.03.25-.03.35l-.02.3a2.4 2.4 0 0 0 .4 1.4 1.55 1.55 0 0 0 1.34.6h.13a2.26 2.26 0 0 0 1.03-.23 2.48 2.48 0 0 0 .8-.62 3.5 3.5 0 0 0 .53-.9 5.5 5.5 0 0 0 .32-1.05 4.86 4.86 0 0 0 .07-.87 2.53 2.53 0 0 0-.42-1.47 1.65 1.65 0 0 0-1.47-.6H51zM19 18.72L22.1 7.7h3.96l-1.6 11.02H19z"
                fill="#0073ae"
              />
              <path
                d="M71.97 7.35a1.1 1.1 0 0 1 .02-.18.9.9 0 0 0 0-.17 2.45 2.45 0 0 0-.7-1.9 2.82 2.82 0 0 0-2-.65 3.36 3.36 0 0 0-2.66 1.3A8.07 8.07 0 0 0 65.1 9.6c-.07.32-.12.64-.15.94a7.34 7.34 0 0 0-.05.87 4.77 4.77 0 0 0 .13 1.2 2.38 2.38 0 0 0 .48.93 2.28 2.28 0 0 0 .9.64 3.54 3.54 0 0 0 1.38.23 3.07 3.07 0 0 0 2.27-.86 5.1 5.1 0 0 0 1.25-2.13h5.64a10.5 10.5 0 0 1-1.43 3.08 9.57 9.57 0 0 1-2.2 2.3 9.75 9.75 0 0 1-2.85 1.43 11.8 11.8 0 0 1-6.77.02 6.95 6.95 0 0 1-2.52-1.42 6.03 6.03 0 0 1-1.56-2.27 8.1 8.1 0 0 1-.54-3.02c0-.32.02-.66.05-1s.1-.72.16-1.1a11.62 11.62 0 0 1 1.37-3.85 11.04 11.04 0 0 1 2.4-2.9A10.5 10.5 0 0 1 66.2.78a10.32 10.32 0 0 1 3.6-.66q3.9 0 5.84 1.7a6.03 6.03 0 0 1 1.92 4.77v.37a3.23 3.23 0 0 1-.03.37h-5.56zm11.28 5.4l-.04.26a2.26 2.26 0 0 0 0 .28 2 2 0 0 0 .65 1.56 2.36 2.36 0 0 0 1.63.58 2.85 2.85 0 0 0 1.26-.3 2.5 2.5 0 0 0 1-.9h5.23a6.52 6.52 0 0 1-1.5 2.13 8.4 8.4 0 0 1-2.07 1.4 9.5 9.5 0 0 1-2.38.74 14.18 14.18 0 0 1-2.45.2 9.5 9.5 0 0 1-2.7-.36 5.97 5.97 0 0 1-2.13-1.08 5 5 0 0 1-1.4-1.78 5.58 5.58 0 0 1-.5-2.42 6.46 6.46 0 0 1 .05-.7c0-.22.04-.46.08-.7a8.44 8.44 0 0 1 1.13-3.02 8.6 8.6 0 0 1 2.07-2.3 9.43 9.43 0 0 1 2.73-1.47 9.68 9.68 0 0 1 3.16-.52 8.5 8.5 0 0 1 2.93.47 6.06 6.06 0 0 1 2.13 1.3 5.34 5.34 0 0 1 1.3 2.02 7.36 7.36 0 0 1 .46 2.6 11 11 0 0 1-.22 2H83.25zm5.43-2.74a2.3 2.3 0 0 0 .03-.38 1.9 1.9 0 0 0-.57-1.4 1.97 1.97 0 0 0-1.44-.57 3 3 0 0 0-2 .63A2.87 2.87 0 0 0 83.7 10h4.97zm6.97-4.86h5l-.38 2.12a9.26 9.26 0 0 1 2.34-1.88 5.74 5.74 0 0 1 2.77-.63 4.67 4.67 0 0 1 3.38 1.06 4.14 4.14 0 0 1 1.08 3.1 9.67 9.67 0 0 1-.16 1.68l-1.4 8.14h-5.48l1.25-7.18a5.28 5.28 0 0 0 .08-.9 1.97 1.97 0 0 0-.33-1.18 1.4 1.4 0 0 0-1.22-.46 2.2 2.2 0 0 0-1.84.74 4.48 4.48 0 0 0-.78 2.06l-1.2 6.92h-5.47zm22.7 13.47c-.6.05-1.17.08-1.7.1s-1 .02-1.43.02a15.57 15.57 0 0 1-2.07-.12 3.57 3.57 0 0 1-1.34-.4 1.7 1.7 0 0 1-.7-.8 3.2 3.2 0 0 1-.2-1.25 9.74 9.74 0 0 1 .06-1.05c.04-.4.1-.82.2-1.28l1-5.67h-1.95l.54-3.12h2.02l.76-4.22h5.38l-.76 4.23h2.63l-.53 3.12h-2.62l-.87 4.94-.08.4a2.47 2.47 0 0 0-.02.37.78.78 0 0 0 .3.7 2.35 2.35 0 0 0 1.2.2h.86zm3.54-13.46h4.96l-.48 2.74h.06a5.18 5.18 0 0 1 4.78-3.13 2.57 2.57 0 0 1 .35.02l.35.06-.97 5.4c-.17-.05-.35-.08-.53-.1a3.43 3.43 0 0 0-.57-.06 3.85 3.85 0 0 0-2.67.88 5.32 5.32 0 0 0-1.37 3.08l-.8 4.7h-5.47zm17.33 13.6l-.03-1.86a7.54 7.54 0 0 1-2.64 1.46 10.2 10.2 0 0 1-2.85.38 6.94 6.94 0 0 1-1.64-.2 3.88 3.88 0 0 1-1.37-.6 3.06 3.06 0 0 1-.93-1.03 2.95 2.95 0 0 1-.34-1.47 4.37 4.37 0 0 1 .08-.8 4.28 4.28 0 0 1 1.15-2.4 5.8 5.8 0 0 1 2.05-1.3 10.9 10.9 0 0 1 2.47-.62l2.42-.3a10.77 10.77 0 0 0 1.87-.4 1.13 1.13 0 0 0 .9-.9.34.34 0 0 1 0-.08.3.3 0 0 0 0-.1.66.66 0 0 0-.17-.48 1.22 1.22 0 0 0-.44-.27 2.6 2.6 0 0 0-.53-.13 3.7 3.7 0 0 0-.47-.04 5.23 5.23 0 0 0-.62.04 1.92 1.92 0 0 0-.62.18 1.94 1.94 0 0 0-.54.4 1.5 1.5 0 0 0-.35.7h-5.25A4.98 4.98 0 0 1 132.1 7a4.53 4.53 0 0 1 1.57-1.44 8.45 8.45 0 0 1 2.5-.9 17.13 17.13 0 0 1 3.5-.3 15.57 15.57 0 0 1 3.06.24 5.18 5.18 0 0 1 1.88.72 2.48 2.48 0 0 1 .95 1.1 3.84 3.84 0 0 1 .27 1.46 7.95 7.95 0 0 1-.07 1c-.04.36-.1.72-.17 1.1l-1.1 6.35a4.63 4.63 0 0 0-.08.73 1.15 1.15 0 0 0 .1.5 2 2 0 0 0 .4.5l-.02.7h-5.65zm-2.52-3.08a2.9 2.9 0 0 0 1.26-.26 2.6 2.6 0 0 0 .9-.7 3.45 3.45 0 0 0 .57-1.08 6.1 6.1 0 0 0 .3-1.3 7.42 7.42 0 0 1-1.5.45l-1.38.3a3.56 3.56 0 0 0-1.1.5 1.35 1.35 0 0 0-.57.95v.15a.83.83 0 0 0 .38.72 1.96 1.96 0 0 0 1.15.26zm9.12 3.06L149.1.06h5.46l-3.28 18.66h-5.46zM28.02 2.77a1.38 1.38 0 0 0-.08-.13 2.9 2.9 0 0 0-.4-.42 4.1 4.1 0 0 0-2-.9 4.67 4.67 0 0 0-1.3-.05 3.2 3.2 0 0 0-1.6.58.54.54 0 0 0-.08.06.65.65 0 0 1-.9 0 .63.63 0 0 1 0-.9 4.23 4.23 0 0 1 2.45-1 5.96 5.96 0 0 1 1.66.07 4.65 4.65 0 0 1 3.4 2.13.63.63 0 0 1-.27.85.7.7 0 0 1-.23.07.65.65 0 0 1-.64-.35zm-1.6 1.46a.37.37 0 0 1-.03-.06 1.5 1.5 0 0 0-.23-.23 2.27 2.27 0 0 0-1.12-.5 2.56 2.56 0 0 0-.72-.03 1.76 1.76 0 0 0-.88.33.1.1 0 0 0-.02.02.54.54 0 0 1-.76 0 .53.53 0 0 1 0-.75 2.65 2.65 0 0 1 1.55-.64 3.75 3.75 0 0 1 1.02.04 2.93 2.93 0 0 1 2.15 1.35.53.53 0 0 1-.25.7.5.5 0 0 1-.2.06.54.54 0 0 1-.53-.27zm-.45 1.3a1.42 1.42 0 1 1-1.4-1.2 1.3 1.3 0 0 1 1.4 1.2m130.13-3.4a3 3 0 0 1 .67-.96 3.17 3.17 0 0 1 3.35-.64 3.08 3.08 0 0 1 .98.64 3.04 3.04 0 0 1 .66.95 2.87 2.87 0 0 1 .25 1.2 2.93 2.93 0 0 1-.24 1.2 3.08 3.08 0 0 1-.66.95 3 3 0 0 1-.97.64 3.12 3.12 0 0 1-1.2.23 3.15 3.15 0 0 1-1.18-.22 3.02 3.02 0 0 1-1.65-1.6 2.95 2.95 0 0 1-.24-1.2 2.88 2.88 0 0 1 .24-1.18zm.5 2.2a2.48 2.48 0 0 0 .53.82 2.45 2.45 0 0 0 .8.55 2.52 2.52 0 0 0 1 .2 2.47 2.47 0 0 0 2.32-1.56 2.66 2.66 0 0 0 .2-1.03 2.6 2.6 0 0 0-.2-1 2.45 2.45 0 0 0-.53-.8 2.5 2.5 0 0 0-1.8-.75 2.52 2.52 0 0 0-1 .2 2.45 2.45 0 0 0-1.32 1.35 2.62 2.62 0 0 0-.2 1 2.68 2.68 0 0 0 .2 1.03zm2.52-2.78a1.48 1.48 0 0 1 .95.25.92.92 0 0 1 .3.76.86.86 0 0 1-.27.7 1.22 1.22 0 0 1-.67.26l1.03 1.56h-.6l-.98-1.52h-.58v1.52h-.56V1.55h1.4zm-.24 1.57h.35a.9.9 0 0 0 .3-.08.45.45 0 0 0 .2-.18.57.57 0 0 0 .1-.32.5.5 0 0 0-.08-.28.47.47 0 0 0-.18-.17.8.8 0 0 0-.25-.08 1.95 1.95 0 0 0-.3-.02h-.72v1.12h.58z"
                fill="#f80"
              />
            </svg>
          </a>
          <a target="_blank" href="http://www.postybirb.com/">
            <img class="postybirb" src="/img/postybirb.png" alt="JsStore logo" />
          </a>
        </p>
      </div>
      <div class="center-align margin-top-20px">
        <h2>Supported with all frameworks</h2>
        <div class="frameworks">
          <a
            class="vue"
            target="_blank"
            href="https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/vue"
          >
            <img src="/img/vue-logo.png" />
          </a>
          <a
            class="vue"
            target="_blank"
            href="https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/react"
          >
            <img src="/img/React.js_logo-512.png" />
          </a>
          <a
            class="vue"
            target="_blank"
            href="https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/svelte"
          >
            <img src="/img/svelte.png" />
          </a>
          <a
            class="vue"
            target="_blank"
            href="https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/angular"
          >
            <img src="/img/angular.png" />
          </a>
          <a
            class="vue"
            target="_blank"
            href="https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/electron"
          >
            <img src="/img/electronjs.png" />
          </a>
        </div>
      </div>

      <div class="divOpenSource top-border">
        <h3 class="text-center">A Big thanks to these open source tools</h3>
        <a target="_blank" title="github" href="https://github.com/ujjwalguptaofficial/JsStore">
          <img class="responsive-img" src="/img/github.svg" alt="github logo" />
        </a>
        <a
          target="_blank"
          class="margin-left-20px"
          title="twitter handle"
          href="https://twitter.com/ujjwal_kr_gupta"
        >
          <img class="responsive-img" src="/img/twitter.svg" alt="twitter logo" />
        </a>
        <a target="_blank" class="margin-left-20px" title="gitter" href="https://gitter.im/JsStore">
          <img
            style="height:50px;width:50px;padding-top: 8px;"
            class="responsive-img"
            src="/img/gitter.svg"
            alt="github logo"
          />
        </a>
        <a
          target="_blank"
          class="margin-left-20px"
          title="npm"
          href="https://www.npmjs.com/package/jsstore"
        >
          <img
            style="height:50px;width:50px;padding-top: 8px;"
            class="responsive-img"
            src="/img/Npm-logo.svg"
            alt="npm logo"
          />
        </a>
        <a
          target="_blank"
          class="margin-left-20px"
          title="travis"
          href="https://travis-ci.org/ujjwalguptaofficial/JsStore"
        >
          <img
            style="height:50px;width:50px;padding-top: 8px;"
            class="responsive-img"
            src="/img/travis.png"
            alt="travis logo"
          />
        </a>
        <a
          target="_blank"
          class="margin-left-20px"
          title="meidum"
          href="https://medium.com/jsstore"
        >
          <svg class="svgIcon-use" width="45" height="45" viewBox="0 0 45 45">
            <path
              d="M5 40V5h35v35H5zm8.56-12.627c0 .555-.027.687-.318 1.03l-2.457 2.985v.396h6.974v-.396l-2.456-2.985c-.291-.343-.344-.502-.344-1.03V18.42l6.127 13.364h.714l5.256-13.364v10.644c0 .29 0 .342-.185.528l-1.848 1.796v.396h9.19v-.396l-1.822-1.796c-.184-.186-.21-.238-.21-.528V15.937c0-.291.026-.344.21-.528l1.823-1.797v-.396h-6.471l-4.622 11.542-5.203-11.542h-6.79v.396l2.14 2.64c.239.292.291.37.291.768v10.353z"
            />
          </svg>
        </a>
        <a
          target="_blank"
          class="margin-left-20px"
          title="saucelab"
          href="https://saucelabs.com/u/ujjwalgupta"
        >
          <img
            style="height:55px;width:50px;padding-top: 8px;"
            class="responsive-img"
            src="/img/saucelab.png"
            alt="travis logo"
          />
        </a>
      </div>
      <div class="margin-top-20px top-border">
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
            <div class="li-header">Cross Browsers Support</div>
            <span class="li-body">
              Develop your application without worrying about cross browser
              compatibility.
            </span>
          </li>

          <li>
            <div class="li-header">Sql Support</div>
            <span class="li-body">
              Using an extension
              <a href="https://github.com/ujjwalguptaofficial/sqlweb">SqlWeb</a>.
            </span>
          </li>
          <li>
            <div class="li-header">TypeScript Support</div>
            <span class="li-body">Dont worry if you are working in Typescript technologies.</span>
          </li>
          <li>
            <div class="li-header">Debugging tool</div>
            <span class="li-body">
              JsStore provides
              <a href="https://github.com/ujjwalguptaofficial/idbstudio">IDBStudio</a>
              to help you debug, manage db.
            </span>
          </li>
        </ul>
      </div>
      <div class="text-center margin-top-20px">
        Created with
        <i class="fas fa-heart" style="color:red;"></i> by
        <a href="https://ujjwalguptaofficial.github.io/">Ujjwal Gupta</a>
      </div>
    </v-flex>
  </v-layout>
</template>

<style scoped lang="scss">
@import "~/styles/index.scss";
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

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: "jsstore, sql, indexeddb, storage, library"
        },
        {
          hid: "description",
          name: "description",
          content:
            "JsStore is a client side javascript library for performing database operation inside indexeddb."
        }
      ]
    };
  }
};
</script>


