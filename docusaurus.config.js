// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JsStore - IndexedDB',
  tagline: 'Simplifying IndexedDB with SQL APIs and promise.',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://jsstore.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ujjwalguptaofficial', // Usually your GitHub org/user name.
  projectName: 'jsstore', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({

        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          // ignorePatterns: ['/tags/**'],
          ignorePatterns: [],
          filename: 'sitemap.xml',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'JsStore Logo',
          src: 'img/JsStore_145_64.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/ujjwalguptaofficial/jsstore',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/get-started',
              },
              {
                label: 'Medium',
                to: 'https://medium.com/jsstore',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/jsstore',
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/ujjwalguptaofficial/jsstore',
              },
              {
                label: 'Examples',
                href: 'https://github.com/ujjwalguptaofficial/jsstore-examples',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        { name: 'robots', content: 'index, follow' },
        { name: 'Revisit-After', content: '1 days' },
        { name: 'Rating', content: 'General' },
        { name: 'author', content: 'Ujjwal Gupta' },
        { name: 'og:site_name', content: 'JsStore' },
        { name: 'og:url', content: 'http://jsstore.net/' },
        { name: 'og:type', content: 'IndexedDB wrapper' },
        { name: 'og:image', content: '/img/JsStore_1200_630.png' },
        { name: 'og:image', content: '/img/jsStore_500_500.png' },
        { name: 'twitter:creator', content: '@ujjwal_kr_gupta' },
        { name: 'twitter:image', content: 'http://jsstore.net/img/JsStore_1200_630.png' },
      ],
    }),

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
        indexBlog: false
      },
    ],
  ],
  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
        src: 'https://www.googletagmanager.com/gtag/js?id=AW-940326991',
        async: "true",
      }
    },
    {
      tagName: 'script',
      innerHTML: `
      window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-940326991');
      <!-- Event snippet for Page view conversion page -->  
      gtag('event', 'conversion', {'send_to': 'AW-940326991/9xLtCMLc0MAZEM-AscAD'});
      `,
      attributes: {
        type: 'text/javascript'
      }
    }
  ]
};

module.exports = config;
