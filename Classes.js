// Classes are a tool that developers use to quickly produce similar objects.

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console -- Halley
console.log(halley.behavior); // Print behavior value to console -- 0
halley.incrementBehavior(); // Add one to behavior -- nothing printed to console
console.log(halley.name); // Print name value to console -- Halley
console.log(halley.behavior); // Print behavior value to console -- 1

// Although the similarity between class and object syntax, there is one important method that sets them apart. It’s called the constructor method. 
// JavaScript calls the constructor() method every time it creates a new instance of a class.
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
const halley = new Dog('Halley');

// *****INHERITANCE***** //
// When you have classes that share properties or methods, you can make child classes from parent classes using inheritance.
// If you were wanting to have a dog & cat class, one could make an animal parent class and then make dog & cat classes that inherit from animal.
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
    
  get name() {
    return this._name;
  }
  
  get behavior() {
    return this._behavior;
  }   
    
  incrementBehavior() {
    this._behavior++;
  }
} 

// The below code makes a class Cat that inherits from Animal
// super(name) means it uses the same property from Animal
//  ****super properties must always come first in the contructor****
// usesLitter is a new property unique to the Cat class
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }

  get usesLitter() {
    return this._usesLitter;
  }
}

// We can also now make a dog class that inherits from Animal
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

// *****STATIC METHODS***** //
// These are methods that aren’t available in individual instances,
// but that you can call directly from the class.
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
    
  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
} 
console.log(Animal.generateName()); // returns a name

const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError due to being called on a specific class instance

