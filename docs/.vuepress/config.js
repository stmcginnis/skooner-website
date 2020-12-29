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
    search: true,
    displayAllHeaders: true,
    // top bar
    nav: [
      {text: 'Contribute', link: '/contribute/'},
      {text: 'Community', link: '/community'},
      {text: 'Brand Guidelines', link: '/brand/'}
      ]
  },
  //title: siteData.title,
  description: siteData.description,
  repo: siteData.repo,
  repoButtonLabel: siteData.repoButtonLabel
}
