# Handle JS

Handle JS is a small, lightweight library that makes working with Handlebars JS a little easier. Relies on jQuery.

## How to Use

- Handle.js is very simple to use, as it only contains one function - renderTemplate.
- In order to render a template using handle.js you have to pass it the following information as an object:
	- `templateSource` - ID of the template HTML
	- `data` - Data in any format (JSON, Array, etc.)
	- `where` - ID of the element you want to place the template inside
	- `clearOriginal` - True or false if you want to clear what was originally in the container before the template is added

## Example Use

```javascript
HANDLE.renderTemplate({
	templateSource: "#user-template", 
	data: users, 
	where: "#container", 
	clearOriginal: true
});
```