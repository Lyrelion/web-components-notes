import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-first',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  // 全局 ts（可以引入一些第三方库）
  globalScript: 'src/global/app.ts',
};
