// Author:Shirish Babbur 
var Students=[["David",80],["Vinoth",77],["Divya",88],["Ishitha",95],["Thomas",68]];
for(var i=0;i<Students.length;i++)
{
	var temp=Students[i][1];
	if(temp < 100)
	{
		if(temp<90)
		{
			if(temp<80)
			{
				if(temp < 70)
				{
					if(temp<60)
					{
						console.log("Student Name: "+Students[i][0]+" marks: "+temp+" Grade: F");
					}
					else
					{
						console.log("Student Name: "+Students[i][0]+" marks: "+temp+" Grade: D");
					}
				}
				else
				{	
					console.log("Student Name: "+Students[i][0]+" marks: "+temp+" Grade: C");
				}
			}
			else
			{
				console.log("Student Name: "+Students[i][0]+" marks: "+temp+" Grade: B");
			}
		}
		else
		{
			console.log("Student Name: "+Students[i][0]+" marks: "+temp+" Grade: A");
		}
		
	}
}