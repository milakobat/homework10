$(


  function(event) {
  	//Start to type below here. Make sure not to delete any "{}" braces. 

  	var fcolour = prompt("What is your favourite colour?");

  	if (fcolour === "red" || fcolour === "blue" || fcolour === "green" || fcolour === "yellow" || fcolour === "white" || fcolour === "grey")
  	{
  		$("body").css ("background" , fcolour);

  	}else if (fcolour === "black") {
  		$("body").css ({"background":fcolour , "color":'white'})

  	}else{
  		$("body").css ("background",'white');
  		$("h2").html("Sorry, we don't have that colour");
  	}


}
);