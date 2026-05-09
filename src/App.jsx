import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//Layout
import { MainLayout } from "./layout/mainLayout.jsx";

// Vistas
import { Information } from "./pages/information.jsx";
import { FeaturedProjects } from "./pages/featuredProjects.jsx";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* rutas publicas */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Information />}/>
            <Route path="projects" element={<FeaturedProjects />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;