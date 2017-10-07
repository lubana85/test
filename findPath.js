
// ----------------------------------
// class Node
// ----------------------------------
class Node
{
	var from = "";
	var to = "";
	var latency = 0;
}
// ----------------------------------
// class Graph
// ----------------------------------
class Graph
{
	var connections = [];
	const var count = 0;

	function Graph(){
	}
	
	function addConnection(node){
		this.connection[node.from].push(node);
		this.count++;
	}
	
}
// ----------------------------------

function findPath(graph,X,Y,T)
{

	if (X==Y)
	{
		console.log(X);
		return;
	}
	else
	{
		var connections = graph.connections[X];
		for (var i=0;i<connections.length;i++){
			var next = connections[X][i].to;
			if (next == Y)

				console.log(X+"-->");
			}
			else
			{
				findPath(graph,next,Y,T);
				//alert("");
			}
		}

	}

}
