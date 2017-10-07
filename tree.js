


function readCSV(fileName)
{
	
	alert("innnnn");
	var reader = new FileReader();
	reader.readAsText(fileName);
	
	reader.onload = function (e) {
		alert("load");
	}
	
	reader.onerror = function (e){
		alert("error");
		
	}
	/*
	if (window.FileReader) {
		
	
		
		
		
		alert(e.target.error.name );
		
	if(e.target.error.name == "NotReadableError") {
		alert("Canno't read file !");
	}
		
		var text = e.target.result; alert(text);
		var rows = text.split("\n");
		

		for (var i = 0; i < rows.length; i++) {
			alert( rows[i].split(","));
		}
	
	
	}
	else
	{
		alert("The browser doesn't support file reader");
	}
	*/
	
	
}
