import express from "express";
import moment from "moment";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.get("/datum", (req, res) => {
  let date = moment().format("DD.MM.YYYY. HH:mm");
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
    "http://localhost:3000/datum - vraća trenutni datum i vrijeme <br> http://localhost:3000/prognoza - vraća random prognozu"
  );
});

app.listen(port, () => console.log(`Slušam na portu ${port}`));
