import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { GalaxyContextProvider } from "./context/GalaxyContextProvider";
import Showpage from "./pages/Showpage";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <GalaxyContextProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/galaxies">
              <Route index Component={Homepage} />
              <Route path=":id" Component={Showpage} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GalaxyContextProvider>
  );
}

export default App;
