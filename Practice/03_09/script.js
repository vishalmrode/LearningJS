/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },

  newName: function (enterValue) {
    this.name = enterValue;
  },
  newColor: function (enterColor) {
    this.color = enterColor;
  },

  newPocketNum: function (enterPocketNum) {
    this.pocketNum = enterPocketNum;
  },
};
console.log("Name Before:", backpack.name);
backpack.newName("VishalTest");
console.log("Name after:", backpack.name.enterValue);

console.log("color Before:", backpack.color);
backpack.newColor("Orange");
console.log("Color after:", backpack.color.enterColor);

console.log("Pocket Size Before:", backpack.pocketNum);
backpack.newPocketNum(7);
console.log("Pocket Size after:", backpack.pocketNum.enterPocketNum);
