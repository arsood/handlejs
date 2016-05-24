//Check if Handlebars and jQuery are linked
if (typeof Handlebars === "undefined") {
	throw "Handle JS relies on Handlebars. Please make sure to link to that.";
} else if (typeof jQuery === "undefined") {
	throw "Handle JS relies on jQuery. Please make sure to link to that.";
}

var HANDLE = {};

HANDLE.renderTemplate = function(settings) {
	//Make sure required settings are present
	if (!settings.templateSource) {
		throw "Please provide a source for your template";
	} else if (!settings.data) {
		throw "No data passed to the function";
	} else if (!settings.where) {
		throw "Please provide a destination for the resulting HTML";
	}

	var $where = $(settings.where);

	var source = $(settings.templateSource).html();

	var template = Handlebars.compile(source);

	if (settings.clearOriginal) {
		$where.html("");
	}

	if (typeof data === "string") {
		var jsonData = JSON.parse(settings.data);
	} else {
		var jsonData = settings.data;
	}

	var html;

	if (jsonData instanceof Array) {
		for (var i = 0; i < jsonData.length; i++) {
			html = template(jsonData[i]);
			$where.append(html);
		}
	} else if (jsonData instanceof Object) {
		html = template(jsonData);
		$where.append(html);
	}
}