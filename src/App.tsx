import { Outlet } from "react-router";
import Navbar from "./components/molecule/Navbar";
import Base from "./components/atom/Base";


function App() {
  return (
    <Base $background="#f0eeee" $height="100vh">
        <Navbar />
      <Base $background="#f0eeee" $padding="10rem 2rem 2rem" $width="full">
        <Outlet />
      </Base>
    </Base>
  );
}

export default App;
