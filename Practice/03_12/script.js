/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import { Society, PrimeSociety } from "./Society.js";

const pancham = new Society(
  "Pancham Housing Society",
  "Nanded city, opposite pawar public school",
  "blue",
  16,
  2000,
  5000,
  true,
  "december 18 2017 15:00:00 PST"
);

const lalit = new PrimeSociety(
  "Lalit Housing Society",
  "Nanded city, opposite Pancham ",
  "Red",
  17,
  100000,
  5000,
  true,
  true,
  "december 18 2019 12:00:00 PST"
);

console.log("The pancham is:", pancham);
console.log("The society address is:", pancham.address);

console.log("The Lalit is extended by:", lalit);
console.log("Is community hall available?", lalit.communityHall);
console.log("Date aquired:", pancham.dateAcquired);
console.log("Age of property pancham in months", pancham.societyAge());
console.log("Age of property pancham in months", lalit.societyAge());
