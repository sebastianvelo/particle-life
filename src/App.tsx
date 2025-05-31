import Footer from "components/footer/Footer";
import { createGradientFromColors } from "utils/ColorUtils";
import AnimatedBackground from "./components/background/AnimatedBackground";
import ToggleSidebarButton from "./components/buttons/ToggleSidebarButton";
import GameCanvas from "./components/canvas/GameCanvas";
import MobileControlPanel from "./components/controls/MobileControlPanel";
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
      <AnimatedBackground />
      <GameCanvas sidebarIsOpen={isOpen} canvasReady={canvasReady} />
      <ToggleSidebarButton isOpen={isOpen} onToggle={toggle} />
      <MobileControlPanel isPlaying={isPlaying} onTogglePlayPause={togglePlayPause} onReset={handleReset} />
      <Sidebar
        isOpen={isOpen}
        particleGroups={particleGroups}
        isPlaying={isPlaying}
        onTogglePlayPause={togglePlayPause}
        onReset={handleReset}
        updateGroupRule={updateGroupRule}
      />
      <Footer />
    </div>
  );
};

export default App;