'use strict';

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach((dog) => (dog.portion = dog.weight ** 0.75 * 28));
console.log(dogs);

// const sarahDog = dogs[dogs.findIndex((dog) => dog.owners.includes('Sarah'))];

const sarahDog = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log(sarahDog);

if (sarahDog.curFood > sarahDog.portion) {
  console.log('Eating too much');
} else {
  console.log('Eating too little');
}

/* const ownersEatTooMuch = dogs
  .flatMap((dog) => (dog.curFood > dog.portion ? dog.owners : 'nope'))
  .filter((dog) => dog != 'nope');

const ownersEatTooLittle = dogs
  .flatMap((dog) => (dog.curFood < dog.portion ? dog.owners : 'nope'))
  .filter((dog) => dog != 'nope');
 */

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.portion)
  .flatMap((dog) => dog.owners);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.portion)
  .flatMap((dog) => dog.owners);

console.log(ownersEatTooMuch, ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(' and ')}'s eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s eat too little!`);

console.log(dogs.some((dog) => dog.curFood === dog.portion));

console.log(
  dogs.some(
    (dog) => dog.curFood > dog.portion * 0.9 && dog.curFood < dog.portion * 1.1
  )
);

const dogsEatingOkay = dogs.filter(
  (dog) => dog.curFood > dog.portion * 0.9 && dog.curFood < dog.portion * 1.1
);

console.log(dogsEatingOkay);

const shallowDogsCopy = dogs.slice().sort((a, b) => a.portion - b.portion);
console.log(shallowDogsCopy);
