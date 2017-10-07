
//<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>

function readCSV(fileName)
{
	if (window.FileReader) {
		alert("yes");
	/*var reader = new FileReader();
	reader.onload = function (e) {
	
		var text = e.target.result; alert(text);
		var rows = text.split("\n");
		

		for (var i = 0; i < rows.length; i++) {
			alert( rows[i].split(","));
		}
	}
	reader.readAsText(fileName);*/
	}
	else
	{
		alert("noo");
	}

	
}
