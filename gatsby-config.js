require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `The Warrior Code Blog | The simplest way to learn how to code and build amazing things.`,
    name: `WarriorCode`,
    siteUrl: `https://warriorcode.net`,
    description: `The simplest way to learn how to code and build amazin things`,
    hero: {
      heading: `The Warrior Code`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/ulisescastro_`,
      },
      {
        name: `github`,
        url: `https://github.com/ulises-castro`,
      },
      //   {
      //     name: `instagram`,
      //     url: `https://instagram.com/narative.co`,
      //   },
      //   {
      //     name: `linkedin`,
      //     url: `https://www.linkedin.com/company/narative/`,
      //   },
      //   {
      //     name: `dribbble`,
      //     url: `https://dribbble.com/narativestudio`,
      //   },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        mailchimp: true,
        sources: {
          local: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Warrior Code`,
        short_name: `Warrior Code`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT, // add your MC list endpoint here; see plugin repo for instructions
      },
    },
  ],
};
