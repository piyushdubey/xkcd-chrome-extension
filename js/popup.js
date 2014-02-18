var comicNumber = '';

//create comic object
var xkcd = {

	xkcdUrl : "http://xkcd.com/info.0.json",

	getComic : function() {
				var xhr = createCORSRequest('GET', this.xkcdUrl);
					if (!xhr) {
  						throw new Error('CORS not supported');
					}	
				xhr.onload = function() {
 					var responseText = xhr.responseText;
 					console.log(responseText);
 					// process the response.
 					renderComic(responseText);	
				};

				xhr.onerror = function() {
  					console.log('There was an error!');				
				};

				xhr.send(null);
				//console.log("response: "+xhr.responseText);
					
					console.log("response: " + xhr.responseText + "typeof: "+typeof xhr.responseText);
	}
};

//TODO: parse response and put parsed json on a page

var renderComic = function(res) {
    //res = parsed response object
    console.log(res);
    var imageObject = JSON.parse(res);
	var image = new Image(),
	canvas = document.createElement('canvas'),
	ctx = canvas.getContext('2d'),
	src = imageObject["img"],
	altText = imageObject["alt"],
	title = imageObject["title"];
	
	textDiv = document.createElement('div');
	textDiv.class = "textClass";
	textDiv.innerHTML = altText;

	header = document.createElement("h1");
	header.innerHTML = title;

	image.crossOrigin = "Anonymous";

	image.onload = function() {
		canvas.width = image.width;
		canvas.height = image.height;
		ctx.drawImage(image, 0, 0);
		//loading cached images
		localStorage.setItem('savedImageData', canvas.toDataURL('image/png'));
		console.log(localStorage);
	};
	console.log("src: "+src+" alt: "+altText);
	if ( image.complete || image.complete === undefined ) {
    	image.src = src;
    	image.alt = ('"'+ String(altText) + '"');
    	
}
	document.body.appendChild(canvas);
	document.body.appendChild(header);
	document.body.appendChild(textDiv);
};

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

//TODO: load document
document.addEventListener('DOMContentLoaded', function() {
	xkcd.getComic();
});