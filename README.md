

<html>

  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script> 
  <script type="text/javascript" src="tree.js"></script>
  <script type="text/javascript" src="findPath.js"></script>
  
<script>
  function validateForm() {
    var csv = document.forms["myForm"]["csv"].value;
    // read CSV file content and save it to Tree
    var graph = readCSV(); 
  
  var x = document.forms["myForm"]["from"].value;
  var y = document.forms["myForm"]["to"].value;
  var t = document.forms["myForm"]["time"].value;
  
  findPath(graph,x,y,t);
  
     
  } 
  </script>
  
<body  ng-app="">  
 

<h3>Enter the following information please:</h3>

<form name="myForm">
  <table align="left">
  <tr>
    
    <td align="left">CSV File:</td>
    <td align="left"><input type="file" id="csv" onchange="" ng-model="csv" required/>
    <div id="csvError" ng-show="myForm.csv.$invalid">required</div>
    </td>
    
  </tr>
  <tr>
    <td align="left">Device from: </td>
    <td align="left"><input type="text" name="from" ng-model="from" required>
      <div id="fromError" ng-show="myForm.from.$invalid">required</div></td>
  </tr>
    <tr><td align="left">Device to: </td><td align="left"><input type="text" name="to"></td></tr>
    <tr><td align="left">Time: </td><td align="left"><input type="text" name="time"></td></tr>
  
  <tr><td align="left" colspan="2"><input type="button" onclick="validateForm()" value="ok" /></td></tr>
  
  </table>
  
</form>
</body>
</html>
