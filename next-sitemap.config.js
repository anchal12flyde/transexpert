/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://transexpert.ca", 
  generateRobotsTxt: false,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/api/*"], 
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
