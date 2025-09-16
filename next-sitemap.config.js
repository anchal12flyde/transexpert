/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://transexpert.ca", // apna live domain
  generateRobotsTxt: false, // robots.txt bhi generate karega
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/api/*"], // API routes exclude kar do
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
