import { ParticleGroupContainerViewProps } from "@game/transformer/particleGroupsViewTransformer";
import ToggleSidebarButton from "components/buttons/ToggleSidebarButton";
import DesktopControlPanel from "components/controls/DesktopControlPanel";
import MobileControlPanel, { MobileControlPanelProps } from "components/controls/MobileControlPanel";
import ParticleGroup from "components/particle-group/ParticleGroup";
import SidebarHeader from "./SidebarHeader";

interface SidebarProps extends MobileControlPanelProps {
    particleGroups: ParticleGroupContainerViewProps[];
    isOpen: boolean;
    updateGroupRule: (fromColor: string, toColor: string, newValue: number) => number;
}

const Sidebar: React.FC<SidebarProps> = ({ particleGroups, isOpen, isPlaying, onReset, onTogglePlayPause, onToggle, updateGroupRule }) => {
    return (
        <>
            <ToggleSidebarButton isOpen={isOpen} onToggle={onToggle} className="fixed top-4 left-6 hidden lg:block" />
            <aside className={`fixed left-0 top-0 h-full w-96 bg-slate-950/80 backdrop-blur-xl transform transition-all duration-500 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"} z-30 shadow-2xl`}>
                <SidebarHeader />
                <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar">
                    {particleGroups.map((group) => (
                        <ParticleGroup key={group.name} updateGroupRule={updateGroupRule} group={group} />
                    ))}
                </div>
                <DesktopControlPanel isPlaying={isPlaying} onTogglePlayPause={onTogglePlayPause} onReset={onReset} />
            </aside>
            <MobileControlPanel isPlaying={isPlaying} onTogglePlayPause={onTogglePlayPause} onReset={onReset} isOpen={isOpen} onToggle={onToggle} />
        </>
    );
};

export default Sidebar;