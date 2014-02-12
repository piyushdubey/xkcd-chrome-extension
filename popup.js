var comicNumber = '';

var reqListener = function() {
	console.log(this.responseText);
};
//create comic object
var xkcd = {

	xkcdUrl : "http://xkcd.com/info.0.json",

	getComic : function() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		  if (xhr.readyState !== 4) {
        return false;
    }
    if (xhr.status !== 200) {
        alert("Error, status code: " + xhr.status);
        return false;
    }
    document.body.innerHTML += "<pre>" + xhr.responseText + "<\/pre>";
};
	}
	xhr.onload = reqListener;
	xhr.open('GET', this.xkcdUrl, true);
	xhr.send(null);
	console.log("response: "+xhr.responseText)
	var jsonResponse = {};

	jsonResponse = JSON.parse(xhr.responseText);
	console.log(jsonResponse);
	renderComic(jsonResponse);
	}
};

//TODO: parse response and put parsed json on a page

var renderComic = function(res) {
    //res = parsed response object
    console.log(src);
	var image = document.createElement("img");
	image.src = res.src;
	image.alt = res.alt;
	image.crossOrigin = "Anonymous";
	document.body.appendChild(image);
};

//TODO: load document
document.addEventListener('DOMContentLoaded', function() {
	xkcd.getComic();
});