const collage = {
  name: "BUET Collage",
  class: ["11", "12", "honors"],
  events: ["science fair", "bijoy dibos", "21 Feb"],
  unique: {
    color: "blue",
    result: {
      GPA: 5,
      merit: "top most",
    },
  },
};
console.log(collage.unique.result);
collage.events[2] = "26 March";

console.log(collage.events[2]);
