var car = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

for(var property in car)
{
  console.log(property);
}

for(var val in car)
{
  if(typeof car[val] === "string")
  {
    console.log(car[val]);
    console.log("Type of " + typeof car[val] + " " + car[val]);
  }
}

var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

console.log( typeof notALanguage );
// print hello in the 3 different languages
for(var x in languages){
    if(typeof languages[x]==="string"){
        console.log(languages[x]);
    };
}
