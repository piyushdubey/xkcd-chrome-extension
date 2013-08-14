var comicBookNumber = "1250",

var getComic = {
	
	comicURL : "http://xkcd.com/"+
	encodeURIComponent(comicBookNumber)+ 
	"/info.0.json",

	// @public
	requestComic : function () {
		var req = new XMLHTTPRequest();
		req.onload = renderResult;
		req.open("GET", comicURL, true)
	}

	renderResult : function (responseData) {
		var img = responseData.
	}
}