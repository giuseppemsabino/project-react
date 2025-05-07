import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GalaxyContextProvider } from "./context/GalaxyContextProvider";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/Homepage";
import ShowPage from "./pages/ShowPage";
import ArchivePage from "./pages/ArchivePage";

function App() {

  return (
    <GalaxyContextProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/galaxies">
              <Route index Component={ArchivePage}/>
              <Route path=":id" Component={ShowPage} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GalaxyContextProvider>
  );
}

export default App;
