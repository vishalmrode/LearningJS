const updateLaptop = (update) => {
  let main = document.querySelector("main");
  main.innerHTML = markup(laptop);
  console.info(update);
};
const laptop = {
  brand: "Lenovo",
  processor: "Intel",
  color: "Silver",
  screen: 15,
  disk: {
    SSD: 256,
    HDD: 1000,
  },
  batteryOn: false,
  toggleBattery: function (batteryStatus) {
    this.batteryOn = batteryStatus;
  },
  newDisk: function (SSD, HDD) {
    this.newSSD = SSD;
    this.newHDD = HDD;
    updateLaptop(`Disk updated.`);
  },
};
export default laptop;

console.log("The laptop specifications are:", laptop);

console.log("The SSD is", laptop.disk.SSD);
