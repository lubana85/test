


function readCSV(fileName)
{
	var reader = new FileReader();
	reader.onload = function (e) {
	
		var rows = e.target.result.split("\n");

		for (var i = 0; i < rows.length; i++) {
			alert( rows[i].split(","));
		}
	}
	reader.readAsText(fileName);
	
}
