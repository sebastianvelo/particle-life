import start from "@game/ParticleSimulator";
import Sidebar from "./components/sidebar/Sidebar";
import "./output.css";

start();

export default function App() {

  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}
