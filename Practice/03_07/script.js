/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

import laptop from "./laptop.js";

const markup = (laptop) => {
  return `
    <div>
      <h3>${laptop.brand}
      </h3>
      <ul>
        <li>Processor: ${laptop.processor}</li>
        <li>Color: ${laptop.color}</li>
        <li>Memory Size:<ul> SSD: ${laptop.disk.SSD}</ul><ul> HDD: ${
    laptop.disk.HDD
  } </ul></li>
        <li>Battery: ${laptop.batteryOn ? "Dead" : "Running"}</li>
      </ul>
    </div>
  `;
};

const main = document.createElement("main");
main.innerHTML = markup(laptop);
document.body.appendChild(main);
