/**
 * @type {import('next-sitemap').IConfig}
 */
module.exports = {
  
  //fixme
  siteUrl: 'https://younes-megaache.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
