import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//Layout
import { MainLayout } from "./layout/MainLayout.jsx";

// Vistas
import { Information } from "./pages/Information.jsx";
import { FeaturedProjects } from "./pages/FeaturedProjects.jsx";
import { Project } from "./features/projects/Project.jsx";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* rutas publicas */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Information />}/>
            <Route path="projects" element={<FeaturedProjects />}/>
            <Route path={`/projects/:projectSlug`} element={<Project/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;