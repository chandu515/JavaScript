in an array find the max and min value

function maxValue(number)
{
  currentValue = number[0];
  for(int i = 0; i <= number.length; i++)
  {
    if(currentValue >= number[i])
    {
      currentValue = number[i];
    }
  }
  return currentValue;
};

function minValue(number)
{
  currentValue = number[0];
  for(int i = 0; i <= number.length; i++)
  {
    if(currentValue <= number[i])
    {
      currentValue = number[i];
    }
  }
  return currentValue;
};
