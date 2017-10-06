

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
  <table>
  <tr>
    CSV File:<input type="file" id="csv" onchange="" ng-model="csv" required/>
    <div id="csvError" ng-show="myForm.csv.$invalid">required</div>
  </tr>
  <tr>
    Device from: <input type="text" name="from" ng-model="from" required>
    <div id="fromError" ng-show="myForm.from.$invalid">required</div>
  </tr>
    <tr><td>Device to: </td><td><input type="text" name="to"></td></tr>
    <tr><td>Time: </td><td><input type="text" name="time"></td></tr>
  
  <tr><td colspan="2"><input type="button" onclick="validateForm()" value="ok" /></td></tr>
  
  </table>
  
</form>
</body>
</html>
