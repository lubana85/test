


function readCSV()
{
	
	var tree ;
	
	var fileUpload = document.getElementById("csv");
	var reader = new FileReader();
	reader.readAsText(fileUpload.files[0]);
	
	reader.onload = function (e) {
		var text = e.target.result; 
		var rows = text.split("\n");
		

		for (var i = 0; i < rows.length; i++) {
			
			// For each line in the CSV File:
			// insert data into Tree
			// -------------------------------
			
			
			var devices = rows[i].split(",");
			var x = devices[0];
			var y = devices[1];
			tree[x][y] = devices[2];
			
			alert(tree[x][y]);
			
			// -------------------------------
			
			
		}
	}
	
	reader.onerror = function (e){
		if(e.target.error.name == "NotReadableError") {
			alert("Canno't read file !");
		}
		
	}
	
	
}
