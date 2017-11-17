//Use this file to implement Part One of your project
var animal = {};
animal.username = "Puff";
//console.log(animal.username)

animal["tagline"] = "I'm fluffy";
//console.log(animal["tagline"])

var noises = [];
animal.noises = noises;
//console.log(animal)

var nrtimes = 0;
for (var key in animal) {
  nrtimes++;
  if(key === "username") {
    //console.log("Hi my name is " + animal[key]);
  }
  else {
    if(key === "tagline") {
      //console.log("I like to say " + animal[key]);
    }
  }
}
/*var nrtimes = 0;
for (var key in animal) {
  ++nrtimes;
  if(key === "username") {
    return "Hi my name is " + animal.username;
  }
  else {
    if(key === "tagline") {
    return "I like to say " + animal.tagline;
    }
  }
}*/

// arrays
var noiseArray = ["Hrr"];
noiseArray.unshift("Meaw");
noiseArray.push("Auu");
noiseArray[noiseArray.length] = "Kot";
//console.log(noiseArray)
//console.log(noiseArray.length)

animal.noises = noiseArray;
//console.log(animal)

var animals = [];
animals.push(animal);
var quackers = {username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl']};
animals[animals.length] = quackers;
//console.log(animals)
var cat = {};
var dog = {};
animals.push(cat);
animals.push(dog);
//console.log(animals)
cat.username = "Kitty";
cat.tagline = "I'm so white";
cat.noises = ["Meaw", "Mrr"];
dog.username = "Pitb";
dog.tagline = "I'm fearless";
dog.noises = ["Hrr","Hau hau"];
var cat2 = {
  username: "Pissi",
  tagline: "I'm quite",
  noises: ["Meaw"]
};
animals.push(cat2);
console.log(animals)
console.log(animals.length)

//functions
var AnimalTestUser = function(username) {
  if(arguments.length > 1) {
    var otherArgs = [];
    for(var i=1; i < arguments.length; i++) {
      //otherArgs[i-1] = arguments[i];
      otherArgs.push(arguments[i]);
    }
    return {
      username: username,
      otherArgs: otherArgs
    }
  } else {
    return {
      username: username
    }
  }
};
var testSheep = AnimalTestUser("CottonBall","Test1","Test2");
//console.log(testSheep);
var testSheep2 = AnimalTestUser("CottonBall",["Cat","Dog"],{name: "Marry", age: 32},"End");
console.log(testSheep2)
var testSp = AnimalTestUser("One");
console.log(testSp)

var AnimalCreator = function(username, species, tagline, noises) {
  return {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: []
  }
};
var sheep = AnimalCreator("Cloud", "sheep", "You can count on me", ["baaah", "arrrgg"]);
console.log(sheep)

var addFriend = function(obj1, obj2) {
  obj1.friends.push(obj2);
};
var cow = AnimalCreator("Kotti", "cow", "I have milk", ["muuuh", "muh"]);
addFriend(sheep, cow);
console.log(sheep)

var dog = AnimalCreator("Pitb", "dog", "I'm mean", ["hau hau", "mrr"]);
addFriend(sheep, dog);
console.log(sheep)

var addFriend = function(obj1, obj2) {
  obj1.friends.push(obj2.username);
};
addFriend(dog,cow);
console.log(dog)
addFriend(dog, sheep);
console.log(dog)

var myFarm = [];
myFarm.push(sheep, cow, dog);
console.log(myFarm)

var addMatchesArray = function(farmColl) {
  for(var i = 0; i < farmColl.length; i++) {
    farmColl[i].matches = [];
  }
};
addMatchesArray(myFarm);
console.log(myFarm[0]);

/*var giveMatches = function(farmColl) {
  for(var i = 0; i < farmColl.length; i++) {
    farmColl[i].matches[0] = farmColl[i].friends[0];
  }
}*/

var giveMatches = function(farmColl) {
  for(var animal in farmColl) {
    farmColl[animal].matches.push(farmColl[animal].friends[0]);
  }
}
giveMatches(myFarm);
console.log(myFarm[0]);

//nested
var friends = [];

friends.push(animals[0].username, animals[1].username);
console.log(friends)

var relationships = {};
relationships.friends = friends;
console.log(relationships)
console.log(Object.keys(relationships).length);

var matches = [];
relationships.matches = matches;
console.log(relationships)
relationships.matches[0] = relationships.friends[0];
relationships.matches.push("pig");
console.log(relationships)
/*for(var animal in animals) {
  animals[animal].relationships = relationships;
}*/
for(var i = 0; i < animals.length; i++) {
  animals[i].relationships = relationships;
}
console.log(animals)
