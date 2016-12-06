var person = new Object();

person.name = 'Test';
person.age = 30;
person.setAge = function(age)
{
  person.age = age;

};

person.yearOfBirth = function(year)
{
  return 2016 - year;
};
