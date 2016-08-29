var EasyCornersLinks = (function() {
    "use strict";

    var library = {};


	function RotateElement (element,degree)
	{
	    element.style.webkitTransform = 'rotate('+degree+'deg)'; 
	    element.style.mozTransform    = 'rotate('+degree+'deg)'; 
	    element.style.msTransform     = 'rotate('+degree+'deg)'; 
	    element.style.oTransform      = 'rotate('+degree+'deg)'; 
	    element.style.transform       = 'rotate('+degree+'deg)'; 
	}

	library.SetCornersLinks = function(content,targetElement,location)
	{
		var wapper = document.createElement("div");
		wapper.style.display = "inline-flex";
		wapper.appendChild(content);
		document.body.appendChild(wapper);

		var contentWidth = wapper.clientWidth;
		var contentHeight = wapper.clientHeight;

		var newWidth = Math.floor(Math.sqrt(Math.pow(contentWidth, 2) + Math.pow(contentHeight, 2)));

		var div = document.createElement("div");
		div.style.width = newWidth + "px";
		div.style.height = newWidth + "px";
		div.style.overflow = "hidden";
		div.style.position = 'absolute';
		

		var OuterMostDiv = document.createElement("div");
		OuterMostDiv.style.width = contentWidth + "px";
		OuterMostDiv.style.height = contentHeight + "px";
		OuterMostDiv.style.position = 'absolute';
		OuterMostDiv.style.overflow = "hidden";
		var wrapperwapper = document.createElement("div");
		wrapperwapper.style.position = 'absolute';

		wrapperwapper.appendChild(wapper);
		div.appendChild(wrapperwapper);
		OuterMostDiv.appendChild(div);
		targetElement.appendChild(OuterMostDiv);

		var mm = (newWidth / 2)
		wrapperwapper.style.left = Math.floor((mm - (contentWidth /2))) + "px";


		switch(location)
		{
			case "TopLeft":
				RotateElement(wapper,45);
				RotateElement(div,-45);
				div.style.top = (-(newWidth/2)) + "px";
				div.style.left = (-(newWidth/2)) + "px";

				OuterMostDiv.style.top = "0px";
				OuterMostDiv.style.left = "0px";

				wrapperwapper.style.top = Math.floor(((mm - Math.floor((contentHeight /2)))  + Math.floor((newWidth/2))))+ "px";
				break;

			case "TopRight":
				RotateElement(wapper,-45)
				RotateElement(div,45);
				div.style.top = (-(newWidth/2)) + "px";
				div.style.right = (-(newWidth/2)) + "px";

				OuterMostDiv.style.top = "0px";
				OuterMostDiv.style.right = "0px";

				wrapperwapper.style.top = Math.floor(((mm - Math.floor((contentHeight /2)))  + Math.floor((newWidth/2))))+ "px";
				break;

			case "BottomLeft":
				RotateElement(wapper,-45);
				RotateElement(div,45);
				div.style.bottom = (-(newWidth/2)) + "px";
				div.style.left = (-(newWidth/2)) + "px";

				OuterMostDiv.style.bottom = "0px";
				OuterMostDiv.style.left = "0px";

				wrapperwapper.style.top = (Math.floor((contentHeight /2)) *-1)+ "px";
				break;

			case "BottomRight":
				RotateElement(wapper,45);
				RotateElement(div,-45);
				div.style.bottom = (-(newWidth/2)) + "px";
				div.style.right = (-(newWidth/2)) + "px";

				OuterMostDiv.style.bottom = "0px";
				OuterMostDiv.style.right = "0px";

				wrapperwapper.style.top = (Math.floor((contentHeight /2)) *-1)+ "px";
				break;
		}

	}


    return library;
})();

if (module) {
    module.exports = library;
}