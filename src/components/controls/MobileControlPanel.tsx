import ResetButton, { ResetButtonProps } from "components/buttons/ResetButton";
import TogglePlayPauseButton, { TogglePlayPauseButtonProps } from "components/buttons/TogglePlayPauseButton";
import ToggleSidebarButton, { ToggleSidebarButtonProps } from "components/buttons/ToggleSidebarButton";

export interface MobileControlPanelProps extends TogglePlayPauseButtonProps, ResetButtonProps, ToggleSidebarButtonProps { }

const MobileControlPanel: React.FC<MobileControlPanelProps> = ({ isPlaying, onTogglePlayPause, onReset, isOpen, onToggle }) => {
    return (
        <div className="fixed px-6 py-4 bottom-0 justify-center flex gap-3 z-40 w-full lg:hidden bg-slate-950/80 backdrop-blur-xl ">
            <ToggleSidebarButton isOpen={isOpen} onToggle={onToggle} className=" " />
            <TogglePlayPauseButton isPlaying={isPlaying} onTogglePlayPause={onTogglePlayPause} />
            <ResetButton onReset={onReset} />
        </div>
    );
};

export default MobileControlPanel;