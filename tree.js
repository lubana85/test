


function readCSV(fileName)
{
	if (window.FileReader) {
		
	var reader = new FileReader();
	reader.readAsText(fileName);
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
