
  // Below is the code for drop down menu from hamburger icon on small view. Adapted from source w3schools.com

function navclasstoggle() {

	var p = document.getElementById("navitopid");

  	if (p.className === "navitop") {
    	p.className = "navitopresponse";
  	} 
  	else {
    	p.className = "navitop";
 	}
}

