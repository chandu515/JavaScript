//get every 2nd element of the array
var a = [[1,2,3,4, ['x','y','z']], ['a','b','c','d'], [1,2, 'a','b']];
var filtered;
for(var i = 0; i < a.length; i++)
{
  filtered = a[i][1];
  console.log(filtered);
}
