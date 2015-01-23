Package.describe({
  name: '3stack:colour',
  version: '0.1.0',
  summary: 'A basic library for HEX colours to -> rgb and rgba values',
  git: 'https://github.com/3stack-software/meteor-colour',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.export("Colour");
  api.addFiles('colour.js');
});
