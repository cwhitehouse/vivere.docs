module.exports = ({ env }) => {
  const plugins = {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
  };

  if (env === 'production') {
    plugins.cssnano = {
      preset: 'default',
    };
  }

  return {
    plugins,
  };
};