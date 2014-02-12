var comicNumber = '';

//create comic object
var xkcd = {

	xkcdUrl : "http://xkcd.com/info.0.json",

	getComic : function() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', this.xkcdUrl, true);
	xhr.send(null);
	var jsonResponse = JSON.parse(xhr.responseText);
	renderComic(jsonResponse);
	}
};

//TODO: parse response and put parsed json on a page

var renderComic = function(res) {
    //res = parsed response object
	var image = document.createElement("img");
	image.src = res.src;
	image.alt = res.alt;
	image.crossOrigin = "Anonymous";
	document.body.appendChild(image);
}

//TODO: load document
document.addEventListener('DOMContentLoaded', function() {
	xkcd.getComic();
});