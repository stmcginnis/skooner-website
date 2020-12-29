/**
 * Site data
 */
const siteData = require("./config-site/info");

module.exports = {
  base: '/k8dash-pages/',
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
      {text: 'Overview', link: '/overview.html'},
      {text: 'Documentation', link: '/documentation.html'},
      {text: 'Community', link: '/community.html'}
      ]
  },
  //title: siteData.title,
  description: siteData.description,
  repo: siteData.repo,
  repoButtonLabel: siteData.repoButtonLabel
}
