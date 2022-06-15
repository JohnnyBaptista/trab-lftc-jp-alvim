import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Gramatica from "./components/pages/Gramatica";
import Regex from "./components/pages/Regex";
import AutoFin from "./components/pages/AutoFin";
import Navbar from "./components/Navbar/Navbar";
import { Container } from "@material-ui/core";

function App() {
  const pages = [
    { name: "Regex", route: "regex" },
    { name: "Automatos Finitos", route: "autofin" },
    { name: "Gramática", route: "gramatica" },
  ];
  return (
    <>
      <Container maxWidth={false} style={{padding: 0}}>
        <BrowserRouter>
          <Navbar pages={pages} color={"secondary"} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/gramatica" element={<Gramatica />} />
            <Route path="/regex" element={<Regex />} />
            <Route path="/autofin" element={<AutoFin />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}
export default App;
