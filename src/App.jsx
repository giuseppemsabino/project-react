import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { GalaxyContextProvider } from "./context/GalaxyContextProvider";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <GalaxyContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index Component={Homepage} />
        </Routes>
      </BrowserRouter>
    </GalaxyContextProvider>
  );
}

export default App;
