Package.describe({
  name: 'babrahams:html2docx',
  version: '0.1.1',
  summary: 'Turns HTML into a docx file in the client',
  git: 'https://github.com/JackAdams/meteor-html2docx',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['templating','jquery','reactive-var','underscore'],'client');
  api.addFiles(['html2docx.html','html2docx.js'],'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('babrahams:html2docx');
  api.addFiles('html2docx-tests.js');
});
