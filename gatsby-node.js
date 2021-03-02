exports.onCreateWebpackConfig = ({ getConfig }) => {
  console.log('BROWSERSLIST:', process.env.BROWSERSLIST);
  console.log('BROWSERSLIST_CONFIG:', process.env.BROWSERSLIST_CONFIG);
  console.log('BROWSERSLIST_ENV:', process.env.BROWSERSLIST_ENV);
  console.log('NODE_ENV:', process.env.NODE_ENV);
  console.log('Webpack target:', getConfig().target);
};
