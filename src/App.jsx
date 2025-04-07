import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import fantasy from "./data/fantasy.json";
import MyNav from "./components/MyNav.jsx";
import MyFooter from "./components/MyFooter.jsx";
import Welcome from "./components/Welcome.jsx";
import AllTheBooks from "./components/AllTheBooks.jsx";
import SingleBook from "./components/SingleBook.jsx";
import BookList from "./components/BookList.jsx";
import "./App.css";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList books={fantasy} />
      <MyFooter />
    </>
  );
}

export default App;
