import "./App.css";
import {
  BrowserRouter as Router,
  Routes as RoutesDom,
  Route,
} from "react-router-dom";
import Formulario from "./pages/Formulario/formulario";
import Home from "./pages/Home/home";
// import Navbar from "./components/Navbar/navbar";
import GetApi from "./RESTApi/GetApi";
import PostApi from "./RESTApi/PostApi";
import DeleteApi from "./RESTApi/DeleteApi";
import PutApi from "./RESTApi/PutApi";
import Start from "./pages/Start/start";
import EditarFormulario from "./pages/EditarFormulario/editarFormulario";

function App() {
  return (
    <Router>
      <RoutesDom>
        <Route path="/start" element={<Start />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Start />} />
        <Route path="/getapi" element={<GetApi />} />
        <Route path="/postapi" element={<PostApi />} />
        <Route path="/deleteapi" element={<DeleteApi />} />
        <Route path="/putapi" element={<PutApi />} />
        <Route
          path="/editar/:id"
          Component={EditarFormulario}
          element={<EditarFormulario />}
        />
        {/* <Route path="/editar" element={<Formulario />} /> */}
        {/* <Route path="/navegacao" element={<Navbar/>} /> */}
      </RoutesDom>
    </Router>
  );
}

export default App;
