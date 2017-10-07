

function findPath(X,Y,T)
{

	if (X==Y)
		console.log(X);
	else
	{
		if (tree[X][Y]>0)
			console.log(X+"-->");
		else
			findPath(X,Y,T);

	}

}