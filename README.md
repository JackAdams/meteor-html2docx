HTML to docx
------------

Meteor package for creating docx files on the client from html.

#### Quick start

`meteor add babrahams:html2docx`

To create a link that triggers the download of a specified element as a `.docx` file:

`{{> html2docx selector="#target-element"}}`

with

`<div id="target-element"><strong>HTML</strong> to be turned into a docx file</div>`

(the `selector` parameter is required)

#### Options

When initiating the widget, use these parameters to configure it:

`linkText="Download"` changes the text of the link (default is "Download as Word document")

`linkClass="my-class-for-links"` puts a custom class attribute on the link (users of Bootstrap might use `btn` here)

`linkStyle="text-decoration: none;"` puts a custom style attribute on the link

`css="h1 { color: red; }" adds a custom set of css styles to the `.docx` file that is generated

`filename="my_word_doc"` changes the name of the downloaded file (default is "export")

#### Warning

This is not going to work in all browsers.  Application styles will not appear in `.docx` file unless they're inline styles or explicitly defined in the `css` parameter.