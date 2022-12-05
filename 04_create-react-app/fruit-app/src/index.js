import foods from "./fruits";
import { choice, remove } from "./helper";

// Randomly draw a fruit from the array
let fruit = choice(foods);
// Log the message 'Id like one RANDOMFRUIT, please'
console.log(`I'd like one ${fruit}, please`);
// Log the message 'Here you go: RANDOMFRUIT
console.log(`Here you go: ${fruit}`);
// Log the message 'Delicious! May i have another?'
console.log("Delicious! May i have another?");
// Remove the fruit from the array
let remaining = remove(foods, fruit);
// Log the message 'Im sorry, we are all out. We have FRUITSLEFT left.
console.log(`Im sorry, we are all out. We have  ${remaining.length} left.`);
