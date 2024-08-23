/**
 * Create a Backpack object.
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
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The color is:", backpack.color);
console.log("The strapLength left:", backpack.strapLength.left);
console.log("The strapLength right:", backpack.strapLength.right);

var backpackcolor = "color";

console.log("The colour of backpask is:", backpack[backpackcolor]);

console.log("The color is:", backpack["color"]);
