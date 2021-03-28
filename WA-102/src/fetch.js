import numbersArray from "./numberArray";

let fetch = (req, res) => {
  res.send("Brojevi: " + numbersArray.join(" "));
};

export default fetch;
