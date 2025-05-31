import Footer from 'components/footer/Footer';
import React from 'react';
import AnimatedBackground from './components/background/AnimatedBackground';
import GameCanvas from './components/canvas/GameCanvas';
import MobileControlPanel from './components/controls/MobileControlPanel';
import ToggleSidebarButton from './components/buttons/ToggleSidebarButton';
import Sidebar from './components/sidebar/Sidebar';
import { useParticleSimulation } from './hooks/useParticleSimulation';
import { useUIState } from './hooks/useUIState';
import "./output.css";

const App: React.FC = () => {
  const { particleGroups, isPlaying, handleReset, togglePlayPause, canvasReady, updateGroupRule } = useParticleSimulation();
  const { isOpen, expandedGroups, hoveredRule, toggleSidebar, toggleGroupExpansion, setRuleHover } = useUIState();

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      <AnimatedBackground />
      <GameCanvas isOpen={isOpen} canvasReady={canvasReady} />
      <ToggleSidebarButton isOpen={isOpen} onToggle={toggleSidebar} />
      <MobileControlPanel isPlaying={isPlaying} onTogglePlayPause={togglePlayPause} onReset={handleReset} />
      <Sidebar
        isOpen={isOpen}
        particleGroups={particleGroups}
        expandedGroups={expandedGroups}
        hoveredRule={hoveredRule}
        isPlaying={isPlaying}
        onToggleGroupExpansion={toggleGroupExpansion}
        onRuleHover={setRuleHover}
        onTogglePlayPause={togglePlayPause}
        onReset={handleReset}
        updateGroupRule={updateGroupRule}
      />
      <Footer />
    </div>
  );
};

export default App;