import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import FormulaireInscription from "./FormulaireInscription";
import List from "./List";
import Recette from "./Recette";
import Nav from "./Nav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<List />}></Route>
          <Route path="formulaire" element={<FormulaireInscription />}></Route>
          <Route path="/recette/:id" element={<Recette />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
