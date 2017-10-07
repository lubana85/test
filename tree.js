


function readCSV()
{
	
	var fileUpload = document.getElementById("csv");
	var reader = new FileReader();
	reader.readAsText(fileUpload.files[0]);
	
	reader.onload = function (e) {
		var text = e.target.result; alert(text);
		var rows = text.split("\n");
		

		for (var i = 0; i < rows.length; i++) {
			alert( rows[i].split(","));
		}
	}
	
	reader.onerror = function (e){
		if(e.target.error.name == "NotReadableError") {
			alert("Canno't read file !");
		}
		
	}
	/*
	if (window.FileReader) {
		
		
		
	
	
	}
	else
	{
		alert("The browser doesn't support file reader");
	}
	*/
	
	
}
