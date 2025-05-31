import { ParticleGroupContainerViewProps } from "@game/transformer/particleGroupsViewTransformer";
import DesktopControlPanel from "components/controls/DesktopControlPanel";
import ParticleGroup from "components/particle-group/ParticleGroup";
import SidebarHeader from "./SidebarHeader";

interface SidebarProps {
    isOpen: boolean;
    particleGroups: ParticleGroupContainerViewProps[];
    isPlaying: boolean;
    onTogglePlayPause: () => void;
    onReset: () => void;
    updateGroupRule: (fromColor: string, toColor: string, newValue: number) => number;
}

const Sidebar: React.FC<SidebarProps> = ({
    isOpen,
    particleGroups,
    isPlaying,
    onTogglePlayPause,
    onReset,
    updateGroupRule
}) => {
    return (
        <aside className={`fixed left-0 top-0 h-full w-96 bg-black/80 backdrop-blur-xl transform transition-all duration-500 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"} z-30 shadow-2xl`}>
            <SidebarHeader />
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar">
                {particleGroups.map((group) => (
                    <ParticleGroup key={group.name} updateGroupRule={updateGroupRule} group={group} />
                ))}
            </div>
            <DesktopControlPanel isPlaying={isPlaying} onTogglePlayPause={onTogglePlayPause} onReset={onReset} />
        </aside>
    );
};

export default Sidebar;