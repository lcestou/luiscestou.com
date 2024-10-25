module.exports = {
  siteMetadata: {
    title: `Luis Cestou – Visual + Interaction Designer`,
    description: `Visual + Interaction Designer from Pittsburgh, PA.`,
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
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        sassOptions: {
          outputStyle: "compressed",
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luis Cestou`,
        short_name: `Luis Cestou`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#f1f2ff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // Ensure this file exists
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-62005347-1"],
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-transition-link`,
  ],
};
