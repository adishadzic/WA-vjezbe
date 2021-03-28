import jsonData from "./studentsData.json";

let podaci = (student) => {
  return (
    student.ime +
    " " +
    student.prezime +
    ", JMBAG: " +
    student.JMBAG +
    ", " +
    student.godina_studija +
    ". godina.<br>"
  );
};

let studentLista = (req, res) => {
  let lista = "";
  jsonData.studenti.forEach((student) => {
    lista += podaci(student);
  });
  res.send(lista);
};

let first = (req, res) => {
  let prvi = podaci(jsonData.studenti[0]);
  res.send(prvi);
};

let last = (req, res) => {
  //let zadnji = podaci(jsonData.studentLista[4]);
  let zadnji = podaci(jsonData.studenti[jsonData.studenti.length - 1]);
  res.send(zadnji);
};

export default { studentLista, first, last };
