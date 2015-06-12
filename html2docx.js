// html to docx

html2docx = {};

html2docx.generate = function (selector, style, includeStylesheets) {
  var html = $(selector);
  var style = '<style>' + ((style) ? style : '') + ((includeStylesheets === false) ? '' : html2docx.generateStyle()) + '</style>';
  var head = '<head><xml><word:WordDocument><word:View>Print</word:View><word:Zoom>90</word:Zoom><word:DoNotOptimizeForBrowser/></word:WordDocument></xml>' + style + '</head>';
  var officeAttributes = 'xmlns:office="urn:schemas-microsoft-com:office:office" xmlns:word="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"';
  var htmlTag = '<html ' + officeAttributes + '>' + head;
  var bodyTag = '<body>' + ((selector === 'body') ? html[0].innerHTML : html[0].outerHTML) + '</body>';
  var htmlString = htmlTag + bodyTag + '</html>';
  var dataUri = 'data:text/html,' + encodeURIComponent(htmlString);
  return dataUri;
}

html2docx.generateStyle = function () {
  // Concatenate all CSS rules into a big string
  var style = '';
  _.each(document.styleSheets, function (sheet) {
	try {
	  _.each(sheet.cssRules, function (rule) {
	    style += rule.cssText;
	  });
	}
	catch (err) {
	  console.log('Some CSS not included due to cross domain security issues.');	
	}
  });
  return style;
}

Template.html2docx.helpers({
  dataUri : function () {
	return Template.instance().dataUri.get();  
  },
  filename : function () {
	return this.filename || document.title || '';  
  }
});

Template.html2docx.events({
  'mousedown a' : function (evt, tmpl) {
	tmpl.dataUri.set(html2docx.generate(this.selector, this.css, this.includeStylesheets)); 
  }
});

Template.html2docx.onCreated(function () {
  this.dataUri = new ReactiveVar('');
});