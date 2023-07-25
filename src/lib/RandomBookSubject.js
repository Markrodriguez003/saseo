import book_subjects from "../data/book_subjects.json";

function RandomBookSubject() {
  let subject;
  let random = Math.floor(Math.random() * book_subjects.b_subjects.length);
  subject = Object.values(book_subjects.b_subjects[random]);
  // console.log("INSIDE SUBJECT LIB FUNC" + JSON.stringify(Object.values(subject)));

  return subject;
}

export default RandomBookSubject;
