import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./main.css"

function App() {

  const [page, setPage] = useState("main")

  return (
    <>
    <Header setPage={setPage}/>
    <Main page={page}/>
    <Footer/>
    </>
  );
}

export default App;
