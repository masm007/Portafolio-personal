import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//Layout
import { MainLayout } from "./layout/mainLayout.jsx";

// Vistas
import { Projects } from "./pages/projects.jsx";
import { Information } from "./pages/information.jsx";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* rutas publicas */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Information />}/>
            <Route path="projects" element={<Projects />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;