import Footer from "layout/footer/Footer";
import Main from "layout/main/Main";
import { createGradientFromColors } from "utils/ColorUtils";
import Sidebar from "./components/sidebar/Sidebar";
import useParticleSimulation from "./hooks/useParticleSimulation";
import useSidebar from "./hooks/useSidebar";
import "./output.css";


const App: React.FC = () => {
  const { isOpen, toggle } = useSidebar();
  const { particleGroups, getColors, isPlaying, handleReset, togglePlayPause, canvasReady, updateGroupRule } = useParticleSimulation();

  const colors: string[] = getColors();

  const gradientStyle: React.CSSProperties = {
    background: createGradientFromColors(colors, 45),
    height: '100vh',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    transition: ""
  };

  return (
    <div style={gradientStyle}>
      <Main sidebarIsOpen={isOpen} canvasReady={canvasReady} />
      <Sidebar
        particleGroups={particleGroups}
        isOpen={isOpen}
        isPlaying={isPlaying}
        onTogglePlayPause={togglePlayPause}
        onToggleSidebar={toggle}
        onReset={handleReset}
        updateGroupRule={updateGroupRule}
      />
      <Footer />
    </div>
  );
};

export default App;