function double(num)
{
 return 2 * num;
}

var myNumbers = [1, 2, 3, 4];
var doubleNumbers = myNumbers.map(double);
console.log(doubleNumbers);

var directionsLibrary = [
  ['wash', 'rinse', 'repeat'],
  ['be born', 'live', 'die'],
            ['wake', 'work', 'sleep']
];

function saveDirectionInDatabase(direction) {
  // save the direction in the database
  console.log('`saveDirectionInDatabase` called');
}

directionsLibrary.forEach(saveDirectionInDatabase);
