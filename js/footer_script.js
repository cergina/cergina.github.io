jQuery(document).ready(function() {
    "use strict";
    
	console.log("haha");
    // Create a new Date object
    var currentDate = new Date();
    
    // Get the current year (four digits)
    var currentYear = currentDate.getFullYear();

    // Update the content of the div element with id "currentYear"
	document.getElementById("currentYear").textContent = "@ " + currentYear;
});