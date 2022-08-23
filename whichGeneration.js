//Create a function that takes a number x and a character y and returns name of an ancestor or descendant
// if the number is negative, return the related ancestor
//if positive, return the descendant
// in case a generation 0, return "me"

const generation = (x, y) => {
  if (x === 0) return "me";
  const great = Math.abs(x) === 3 ? "great" : "";
  const grand = Math.abs(x) >= 2 ? "grand" : "";
  let name = "";
  if (y === "m") {
    name = x < 0 ? "father" : "son";
  } else {
    name = x < 0 ? "mother" : "daughter";
  }
  return `${great} ${grand}${name}`;
};

const person = generation(3, "m");
console.log(person);
