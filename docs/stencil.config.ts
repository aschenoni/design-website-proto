import { Config } from '@stencil/core';
import tailwind, { PluginOpts } from 'stencil-tailwind-plugin';
import tailwindConf from './tailwind.config';
import md from 'rollup-plugin-md';
// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  plugins: [tailwind({ ...PluginOpts.DEFAULT, tailwindConf: { ...PluginOpts.DEFAULT.tailwindConf, ...tailwindConf } })],
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://aschenoni.github.io/design-website-proto/',
    },
  ],
  rollupPlugins: {
    before: [
      md({
        // to disable marked set to false
        marked: false,
      }),
    ],
  },
};
