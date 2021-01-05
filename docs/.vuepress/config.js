/**
 * Site data
 */
const siteData = require("./config-site/info");

module.exports = {
  base: '/k8dash-website/',
  themeConfig: {
    domain: siteData.hostname,
    twitter: siteData.twitter,
    websiteRepo: siteData.websiteRepo,
    repo: siteData.repo,
    repoButtonLabel: siteData.repoButtonLabel,
    logo: siteData.logo,
    slackInvite: siteData.slackInviteURL,
    slackChannel: siteData.slackChannelURL,
    docsDir: "docs",
    search: false,
    searchPlaceholder: 'Search...',
    displayAllHeaders: true,
    // top bar
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Overview', link: '/overview/'},
      {text: 'Documentation', link: '/documentation/'},
      {text: 'Contribute', link: '/contribute/'},
      {text: 'Brand', link: '/brand/'},
      {text: 'Community', link: '/community/'}
      ],
      sidebar: {
        '/overview/': 
        [{
          sidebarDepth: 3,
          collapsable: false,
          children: [
          '',
          'install']
        }]


      }
  },
  //title: siteData.title,
  description: siteData.description,
  repo: siteData.repo,
  repoButtonLabel: siteData.repoButtonLabel
}
