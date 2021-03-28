import express from "express";
import moment from "moment";

const app = express();
//const port = 3000;

app.get("/datum", (req, res) => {
  let date = moment().format("l, h:mm");
  res.send(`${date}`);
});

app.get("/prognoza", (req, res) => {
  let prognoze = [
    "Danas će biti sunčano",
    "Danas će biti kišovito",
    "Danas će biti oblačno",
  ];
  let randomPrognoza = prognoze[Math.floor(Math.random() * prognoze.length)];
  res.send(randomPrognoza);
});

app.get("/", (req, res) => {
  res.send(
    "http://localhost:3000/datum - vraća trenutni datum i vrijeme, http://localhost:3000/prognoza - vraća nasumičnu rečenicu"
  );
});

app.listen(3000, () => console.log(`Slušam na portu 3000`));
