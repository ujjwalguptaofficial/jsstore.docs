import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <div className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src="/img/JsStore_350_155.png" alt="JsStore logo" class="responsive-img" />
          {/* <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p> */}

        </div>
      </div>
      <header>
        <h1>Execute Database operation in browsers with JsStore.</h1>
        <p>JsStore is an IndexedDB Wrapper. It makes IndexedDB super easy with its SQL like apis.</p>

      </header >
      <div className={styles.buttons}>
        <Link
          className="button button--primary button--lg home-link-button"
          to="/docs/get-started">
          Get Started - 5min ⏱️
        </Link>
        <a href='https://github.com/ujjwalguptaofficial/JsStore/discussions/categories/q-a' target='_blank' className='button button--secondary button--lg'>
          Get Help
        </a>
      </div>
      <div class="home_open_source">
        <h3>Open-source MIT Licensed | Supported with all frameworks</h3>
      </div>

      <div class="frameworks">
        <a target="_blank" href="https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/vue" class="vue" data-v-38b33cb0="" >
          <img src="/img/vue-logo.png" data-v-38b33cb0="" />
        </a>
        <a target="_blank" href="https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/react" class="vue" data-v-38b33cb0="">
          <img src="/img/React.js_logo-512.png" data-v-38b33cb0="" />
        </a>
        <a target="_blank" href="https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/mahal" class="vue" style={{ marginBottom: "-10px" }} data-v-38b33cb0="">
          <img src="/img/mahal.png" data-v-38b33cb0="" />
        </a>
        <a target="_blank" href="https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/svelte" class="vue" data-v-38b33cb0="">
          <img src="/img/svelte.png" data-v-38b33cb0="" />
        </a>
        <a target="_blank" href="https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/angular" class="vue" data-v-38b33cb0="">
          <img src="/img/angular.png" data-v-38b33cb0="" /></a>
        <a target="_blank" href="https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/electron" class="vue" data-v-38b33cb0="">
          <img src="/img/electronjs.png" data-v-38b33cb0="" />
        </a>
      </div>
    </div >
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Think in SQL and do in JS`}
      // title={`Hello from ${siteConfig.title}`}
      description="JsStore is an IndexedDB Wrapper. It makes IndexedDB super easy with its SQL like apis."
      keywords="indexeddb, sql, storage, wrapper, javascript"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
