//Author:Shirish Babbur 
for(var i=0;i<100;i++)
{
	if(i%3==0)
	{
		if(i%5==0)
		{
			console.log("foobar");
		}
		else
		{
			console.log("foo");
		}
	}
	else if(i%5==0)
	{
		console.log("bar");
	}
	else
	{
		console.log(i);
	}
}