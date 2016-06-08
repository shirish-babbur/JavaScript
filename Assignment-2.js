//Author:Shirish Babbur 
var inputarray=[1,3,1,4,2,5,7,9,0,2,4,7,6];
inputarray.sort();
var temp=[];
for(var i =0;i<inputarray.length;i++)
{
	if(inputarray[i]==inputarray[i+1])
	{
		continue;
	}
	temp.push(inputarray[i]);
}
console.log(temp);