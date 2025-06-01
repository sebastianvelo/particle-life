import ResetButton, { ResetButtonProps } from "components/buttons/ResetButton";
import TogglePlayPauseButton, { TogglePlayPauseButtonProps } from "components/buttons/TogglePlayPauseButton";

export interface MobileControlPanelProps extends TogglePlayPauseButtonProps, ResetButtonProps {
    isOpen: boolean;
}

const MobileControlPanel: React.FC<MobileControlPanelProps> = ({ isPlaying, onTogglePlayPause, onReset, isOpen }) => {
    return (
        <div className={`fixed px-6 py-2 transition-all duration-200 justify-center flex gap-3 z-40 w-full lg:hidden ${isOpen ? "bottom-16" : "bottom-0 bg-black/90 w-full"}`}>
            <TogglePlayPauseButton isPlaying={isPlaying} onTogglePlayPause={onTogglePlayPause} />
            <ResetButton onReset={onReset} />
        </div>
    );
};

export default MobileControlPanel;