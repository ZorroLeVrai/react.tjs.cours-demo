import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import RouterLayout from './RouterLayout';
import Home from "./Home";
import ListGroupEtape1 from "./Components/etape1/ListGroup";
import ListGroupEtape2 from "./Components/etape2/ListGroup";
import ListGroupExercice1 from "./Components/exercice1/ListGroup";
import ListGroupExercice2 from "./Components/exercice2/ListGroup";
import ListGroupExercice3 from "./Components/exercice3/ListGroup";
import ListGroupExercice3Etape2 from "./Components/exercice3_etape2/ListGroup";
import ListGroupExercice4 from "./Components/exercice4/ListGroup";
import ListGroupExampleExercice5 from "./Components/exercice5/ListGroupExample";
import ListGroupExampleExercice6 from "./Components/exercice6/ListGroupExample";
import Main from "./Components/Alert/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RouterLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/etape1" element={<ListGroupEtape1/>} />
            <Route path="/etape2" element={<ListGroupEtape2/>} />
            <Route path="/exercice1" element={<ListGroupExercice1/>} />
            <Route path="/exercice2" element={<ListGroupExercice2/>} />
            <Route path="/exercice3" element={<ListGroupExercice3/>} />
            <Route path="/exercice3_et2" element={<ListGroupExercice3Etape2/>} />
            <Route path="/exercice4" element={<ListGroupExercice4/>} />
            <Route path="/exercice5" element={<ListGroupExampleExercice5/>} />
            <Route path="/exercice6" element={<ListGroupExampleExercice6/>} />
            <Route path="/Alert" element={<Main/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
