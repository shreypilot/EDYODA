import "./styles.css";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";
export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
      <Sidebar/>
      <Home/>
      </div>
    </div>
  );
}
