import numbersArray from "./numberArray";

let randomNumber = (max) => {
  return Math.round(Math.random() * max);
};

let add = (req, res) => {
  let broj = randomNumber(100);
  console.log(broj);
  numbersArray.push(broj);
  res.send("Broj " + parseInt(broj) + " spremljen u listu");
};

export default add;
