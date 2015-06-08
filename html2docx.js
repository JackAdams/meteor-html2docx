// html to docx

html2docx = {};

html2docx.generate = function (selector, style) {
  var html = $(selector);
  var style = (style) ? '<style>' + style + '</style>' : '';
  var head = '<head><xml><word:WordDocument><word:View>Print</word:View><word:Zoom>90</word:Zoom><word:DoNotOptimizeForBrowser/></word:WordDocument></xml>' + style + '</head>';
  var officeAttributes = 'xmlns:office="urn:schemas-microsoft-com:office:office" xmlns:word="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"';
  var htmlTag = '<html ' + officeAttributes + '>' + head;
  var bodyTag = '<body>' + ((selector === 'body') ? html[0].innerHTML : html[0].outerHTML) + '</body>';
  var htmlString = htmlTag + bodyTag + '</html>'; console.log(htmlString);
  var dataUri = 'data:text/html,' + encodeURIComponent(htmlString);
  return dataUri;
}

Template.html2docx.helpers({
  dataUri : function () {
	return Template.instance().dataUri.get();  
  }
});

Template.html2docx.events({
  'mousedown a' : function (evt, tmpl) {
	tmpl.dataUri.set(html2docx.generate(this.selector,this.css)); 
  }
});

Template.html2docx.onCreated(function () {
  this.dataUri = new ReactiveVar('');
});