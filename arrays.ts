const carMakers: string[] = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// Typed arrays will help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push();

// Help with built in methods
carMakers.map((car: string) => {
  return car.toUpperCase();
});

// Flexible element types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2030-11-10");
importantDates.push(new Date());
// importantDates.push(100);
