abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Woof!');
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow!');
  }
}

function makeAnimalSound(animal: Animal): void {
  animal.makeSound();
}

const dog = new Dog();
const cat = new Cat();

makeAnimalSound(dog);
makeAnimalSound(cat);
