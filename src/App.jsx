import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav.jsx";
import MyFooter from "./components/MyFooter.jsx";
import Welcome from "./components/Welcome.jsx";
import AllTheBooks from "./components/AllTheBooks.jsx";
import SingleBook from "./components/SingleBook.jsx";
import "./App.css";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <SingleBook />
      <MyFooter />
    </>
  );
}

export default App;
