import Footer from "layout/footer/Footer";
import Main from "layout/main/Main";
import { gradientStyle } from "utils/ColorUtils";
import useParticleSimulation from "./hooks/useParticleSimulation";
import useSidebar from "./hooks/useSidebar";
import Sidebar from "./layout/sidebar/Sidebar";
import "./output.css";

const App: React.FC = () => {
  const { isOpen, toggle } = useSidebar();
  const { particleGroups, getColors, isPlaying, handleReset, togglePlayPause, canvasReady, updateGroupRule } = useParticleSimulation();

  return (
    <div className="animate-gradient-x" style={gradientStyle(getColors())}>
      <Main sidebarIsOpen={isOpen} canvasReady={canvasReady} />
      <Sidebar
        particleGroups={particleGroups}
        isOpen={isOpen}
        isPlaying={isPlaying}
        onTogglePlayPause={togglePlayPause}
        onToggle={toggle}
        onReset={handleReset}
        updateGroupRule={updateGroupRule}
      />
      <Footer />
    </div>
  );
};

export default App;