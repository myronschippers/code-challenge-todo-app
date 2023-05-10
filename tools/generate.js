const { generateTemplateFiles } = require('generate-template-files');

// https://medium.com/@robertsavian/generate-template-files-with-ease-19b320615359

generateTemplateFiles([
  {
    option: 'Component as Template',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/component-template/',
    },
    stringReplacers: ['__name__'],
    output: {
      path: './src/app/templates/__name__(kebabCase)',
      // pathAndFileNameDefaultCase: '(pascalCase)',
    },
  },
  {
    option: 'Component as Feature',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/component-feature/',
    },
    stringReplacers: ['__name__'],
    output: {
      path: './src/components/features/__name__(kebabCase)',
      // pathAndFileNameDefaultCase: '(pascalCase)',
    },
  },
  {
    option: 'Component as UI',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/component-ui/',
    },
    stringReplacers: ['__name__'],
    output: {
      path: './src/components/ui/__name__(pascalCase)',
      // pathAndFileNameDefaultCase: '(pascalCase)',
    },
  },
  {
    option: 'Util',
    defaultCase: '(camelCase)',
    entry: {
      folderPath: './tools/templates/util/',
    },
    stringReplacers: ['__name__', '__method_name__'],
    output: {
      path: './src/utils/__name__(kebabCase)',
    },
  },
  {
    option: 'Interface',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/I__interface__.ts',
    },
    stringReplacers: ['__interface__'],
    output: {
      path: './src/models/I__interface__.ts',
    },
  },
  {
    option: 'Enum',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/__enum__.enum.ts',
    },
    stringReplacers: ['__enum__'],
    output: {
      path: './src/constants/__enum__(pascalCase).enum.ts',
    },
  },
]);
