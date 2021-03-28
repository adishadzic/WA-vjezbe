import express from "express";
import add from "./add";
import fetch from "./fetch";

const app = express(); // instanciranje aplikacije
const port = 3000; // port na kojem će web server slušati

app.get("/dodaj", add);
app.get("/dohvati", fetch);

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
