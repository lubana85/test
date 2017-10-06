

<html>
<body>
  
 <script>
  function validateForm() {
    var csv = document.forms["myForm"]["csv"].value;
    alert(csv);
    if (csv == "") {
        alert("Name must be filled out");
        return false;
    }
} 
  </script>

<h1>Enter the following information please:</h1>

<form name="myForm">
  
  CSV File:<input type="file" id="csv" onchange="" />
  Device from: <input type="text" name="from">
  Device to: <input type="text" name="to">
  Time: <input type="text" name="time">
  
  <input type="button" onclick="validateForm()" value="ok" />
  
</form>
</body>
</html>
