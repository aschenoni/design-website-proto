let twConfig = require('@addepar/design-tokens/lib/tokens.tailwind.config.js');

module.exports = {
  ...twConfig,
  theme: {
    extend: {
      ...twConfig.theme.extend,
      colors: {
        'dark-green': '#0B2422',
        'green': '#074A4D',
        'seafoam': '#87CA9A',
        'yellow': '#F2B930',
        'orange': '#EB5629',
        'mauve': '#CFB4BD',
      },
    },
  },
};
