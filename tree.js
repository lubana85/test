


function readCSV(fileName)
{alert("in");
	if (window.FileReader) {
		
	var reader = new FileReader();
	reader.readAsText(fileName);
		
		alert(e.target.error.name );
		
	if(e.target.error.name == "NotReadableError") {
		alert("Canno't read file !");
	}
		
	reader.onload = function (e) {	
		
		var text = e.target.result; alert(text);
		var rows = text.split("\n");
		

		for (var i = 0; i < rows.length; i++) {
			alert( rows[i].split(","));
		}
	}
	
	}
	else
	{
		alert("The browser doesn't support file reader");
	}

	
}
