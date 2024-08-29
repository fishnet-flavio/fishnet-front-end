import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />    
      <Outlet />
    <ToastContainer />
    </div>
  );
}

export default App;
