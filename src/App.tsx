import { Outlet } from "react-router";
import Navbar from "./components/molecule/Navbar";
import Base from "./components/atom/Base";

function App() {
  return (
    <Base $background="#f0eeee" $width="vw" $height="100vh">
      <Navbar />
      <Outlet />
    </Base>
  );
}

export default App;
