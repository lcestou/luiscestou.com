module.exports = {
  siteMetadata: {
    title: `Luis Cestou – Graphic + Interactive Designer`,
    description: `Graphic + Interactive Designer from Pittsburgh, PA.`,
    siteUrl: `https://luiscestou.com/`,
    author: `Luis Cestou`,
    socialLinks: {
      github: { url: 'https://github.com/lcestou/', name: 'GitHub' },
      linkedin: {
          url: 'https://www.linkedin.com/in/luis-cestou/',
          name: 'LinkedIn',
      },
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luis Cestou`,
        short_name: `Luis Cestou`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#f1f2ff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        include: /svg-icons/
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-62005347-1",
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify`,
  ],
}
