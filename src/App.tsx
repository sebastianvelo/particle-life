import engine from "@game/Game";
import Sidebar from "./components/sidebar/Sidebar";
import "./output.css";

engine.start();

export default function App() {

  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}
