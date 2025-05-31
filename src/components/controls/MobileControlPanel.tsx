import ResetButton, { ResetButtonProps } from "components/buttons/ResetButton";
import TogglePlayPauseButton, { TogglePlayPauseButtonProps } from "components/buttons/TogglePlayPauseButton";

interface MobileControlPanelProps extends TogglePlayPauseButtonProps, ResetButtonProps { }

const MobileControlPanel: React.FC<MobileControlPanelProps> = ({ isPlaying, onTogglePlayPause, onReset }) => {
    return (
        <div className="fixed bottom-4 justify-center flex gap-3 lg:hidden z-40 w-full">
            <TogglePlayPauseButton isPlaying={isPlaying} onTogglePlayPause={onTogglePlayPause} />
            <ResetButton onReset={onReset} />
        </div>
    );
};

export default MobileControlPanel;