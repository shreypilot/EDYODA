import "./styles.css";
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";
export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
    </div>
  );
}
