// Default weight

import "./styles/App.scss";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import { navbarData } from "./constant/data.ts";

const App = () => {
  return (
    <>
      <Navbar links={navbarData} />
      <Home />
    </>
  );
};

export default App;
