const createPerson = (name, age) => {
  const createPerson = {
    name: name,
    age: age
  };

  return createPerson;

};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  } else {
    return false;
  }
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === "Honda");
};

const averageAge = people => {
  return people.reduce(function(a,person) {
    return a + person.age;
  },0)/people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce(friendName) {
      return `Hi ${friendName}, my name is ${this.name} and I am ${this.age}!`
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty, 
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
