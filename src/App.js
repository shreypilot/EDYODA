import "./styles.css";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";
import ModuleSidebar from "./components/ModuleSidebar";
import PythonLoops from "./components/PythonLoops";
import Quiz from "./components/Quiz";
import Assignment from "./components/Assignment";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; 
       
const AppLayout = () => {    
  return (
    <>
      <div className="AppLayout">
          <Navbar/>
          <div className="container">
          <Sidebar/>
          <Outlet />
          </div>
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Home />
      },
      {
        path: "pythonloops",
        element: <PythonLoops />
      },
      {
        path: "assignment",
        element: <Assignment />
      },
      {
        path: "quiz",
        element: <Quiz />
      }
       
      
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;

