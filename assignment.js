function myfunction ()
{
	var a=0;
	var b;
	var array =[];
	for (a=2;a<=200;a++)
	{
    	b=isPrime(a);
		if (b != 0)
		{
			array.push(b);
		}
	}
	console.log(array);
}
function isPrime(x){
		var array;
		if(x<2) 
			return 0; 
		for(var i=2;i<x;i++) 
			if(x%i==0)
				return 0;
		return x;
}
myfunction(); 