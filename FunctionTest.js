<html>
	<script>
		function myFunction(a, b)
		{
			var sum = a + b;
			myFunction2(sum);
			printTriangle(sum);
		};
	
		function myFunction2(sum)
		{
			var mul = sum * 2;
			console.log(mul);
		};
		
		function printTriangle(sum)
		{
			for(var i = 1; i <= sum; i++)
			{
				var a = '';
				for(var j = sum; j <=i; j++)
				{
				  a = a + ' ' + i;
					
				}
				console.log(a);
			}
		}
//hi
	</script>
</html?
