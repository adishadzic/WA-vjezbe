import express from "express";
import routes from "./routes";

const app = express();
const port = 3000;

app.get("/studenti", routes.studentLista);

app.get("/studenti/first", routes.first);

app.get("/studenti/last", routes.last);

app.listen(port, () => console.log(`App listening on port ${port}!`));
