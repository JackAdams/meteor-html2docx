Package.describe({
  name: 'babrahams:html2docx',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use(['templating','jquery','reactive-var'],'client');
  api.versionsFrom('1.1.0.2');
  api.addFiles(['html2docx.html','html2docx.js'],'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('babrahams:html2docx');
  api.addFiles('html2docx-tests.js');
});
