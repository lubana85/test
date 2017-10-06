

<html>

  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script> 
<script>
  function validateForm() {
    var csv = document.forms["myForm"]["csv"].value;
     
     
} 
  </script>
  
<body  ng-app="">  
 

<h3>Enter the following information please:</h3>

<form name="myForm">
  
  <p>
    CSV File:<input type="file" id="csv" onchange="" ng-model="csv" required/>
    <div id="csvError" ng-show="myForm.csv.$invalid"></div>
  </p>
  <p>Device from: <input type="text" name="from" ng-model="from" required></p>
  <p>Device to: <input type="text" name="to"></p>
  <p>Time: <input type="text" name="time"></p>
  
  <p><input type="button" onclick="validateForm()" value="ok" /></p>
  
</form>
</body>
</html>
