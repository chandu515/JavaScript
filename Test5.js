/*Task:
Check if the first letter of any string = C .. then alert/ console message
and else if  if the first letter of string = A ... then alert/console message
else alert that "invalid string"


-----------

var myVar = condition1? 'something other than default' : null
*/

function stringTest(str)
{
	var x = 'C';

	var y = 'A';

	for(var i = 0; i < str.length; i++)
	{
		if(str[0] == x)
		{
			console.log("The first letter of the string starts with 'C' ");
			alert("The first letter of the string starts with 'C' ");
			break;
		}
		else if(str[0] == y)
		{
			console.log("The first letter of the string starts with 'A' ");
			alert("The first letter of the string starts with 'A' ");
			break;
		}
		else
		{
			alert("Invalid string ... better luck next time!");
			break;
		}
	}
}
