


function readCSV(fileName)
{
	if (window.FileReader) {
		
	var reader = new FileReader();alert("ok");
	reader.onload = function (e) {
	
		alert("ok");
		var text = e.target.result; alert(text);
		var rows = text.split("\n");
		

		for (var i = 0; i < rows.length; i++) {
			alert( rows[i].split(","));
		}
	}
	reader.readAsText(fileName);
	}
	else
	{
		alert("Explorere doesn't support file reader");
	}

	
}
