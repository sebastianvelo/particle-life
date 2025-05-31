import ResetButton, { ResetButtonProps } from "components/buttons/ResetButton";
import TogglePlayPauseButton, { TogglePlayPauseButtonProps } from "components/buttons/TogglePlayPauseButton";
import React from "react";

interface DesktopControlPanelProps extends TogglePlayPauseButtonProps, ResetButtonProps { }

const DesktopControlPanel: React.FC<DesktopControlPanelProps> = ({ isPlaying, onTogglePlayPause, onReset }) => {
    return (
        <div className="p-6 border-t border-white/10 hidden lg:block">
            <div className="flex gap-3">
                <TogglePlayPauseButton isPlaying={isPlaying} onTogglePlayPause={onTogglePlayPause} />
                <ResetButton onReset={onReset} />
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
                Rules are generated randomly on reset
            </p>
        </div>
    );
};

export default DesktopControlPanel;