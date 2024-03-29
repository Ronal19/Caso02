import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MANUALES EN LINEA',
  tagline: 'Al alcance de tus manos',
  
  // Importante si nuestro sitio web se subirá en github.io
  url: 'https://Ronal19.github.io',
  baseUrl: '/Caso02',
  organizationName: 'Ronal19', // Usually your GitHub org/user name.
  projectName: 'Caso02', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Se crea (Documentación Docusaurus Guides/Deployment)
  trailingSlash: false, // Se crea (Documentación Docusaurus Guides/Deployment)

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      
      navbar: {
        title: 'BIENVENIDO',
        logo: {
          alt: 'Logo Bienvenido',
          src: 'img/manual.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'GUIAS',
          },
          {
            href: 'https://github.com/Ronal19/Caso02.git',
            label: 'GitHub',
            position: 'right',
          },
        ],
      }, 
      
      footer: {
        style: 'light',
        
        copyright: `Derechos Reservados © ${new Date().getFullYear()} Manuales en Línea.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
