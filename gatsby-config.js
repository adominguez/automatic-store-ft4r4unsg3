module.exports = {
  siteMetadata: {"bodyBackgroundColor":"#fafafa","primaryColor":"#0097a7","secondaryColor":"#424242","sidebarColor":"#eeeeee","textColor":"#616161","amazonWidthValue":"100","h1SizeValue":1,"h2SizeValue":1,"h3SizeValue":1,"headerSizeValue":1,"logoPositionValue":"50","sidebarWidthValue":"20","templateWidthValue":"80","textSizeValue":1,"useAmazonSearch":true,"useFooterWidth":false,"useHeaderWhite":false,"useLogo":true,"useMenu":true,"useMenuWidth":false,"useSidebar":false,"useTransparentContentBackground":false,"genrePrincipalKeyword":"m","singularPrincipalKeyword":"casco de moto","pluralPrincipalKeyword":"cascos de motos","siteDescription":"cascos de moto","siteUrl":"https://cascosdemotos.com","siteFavicon":"https://firebasestorage.googleapis.com/v0/b/automatic-web-dashboard-back.appspot.com/o/images%2Fdefault-icon.png?alt=media&token=b8ef0c2f-53c6-4aa1-8aad-5bd754639a18","siteLanguage":"es","siteName":"cascos de moto","siteLogo":"jkjk"},
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "name":"cascos de moto","short_name":"cascos de moto","start_url":"/","background_color":"#0097a7","theme_color":"#0097a7","display":"minimal-ui","icon":"src/images/gatsby-icon.png"
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-1239876464', // leave empty if you want to disable the tracker
          cookieName: 'google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        // googleTagManager: {
        //   trackingId: 'YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-google-tagmanager', // default
        //   dataLayerName: 'dataLayer', // default
        // },
        // facebookPixel: {
        //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-facebook-pixel', // default
        // },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`/cookies`, `goto`]
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-offline'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
