import Engine from "@game/core/Engine";
import SidebarHeader from "components/sidebar/SidebarHeader";
import React from 'react';
import DesktopControlPanel from '../controls/DesktopControlPanel';
import ParticleGroup, { ParticleGroupContainerViewProps } from '../particle-group/ParticleGroup';

interface SidebarProps {
    engine: Engine;
    isOpen: boolean;
    particleGroups: ParticleGroupContainerViewProps[];
    expandedGroups: Set<number>;
    hoveredRule: string | null;
    isPlaying: boolean;
    onToggleGroupExpansion: (index: number) => void;
    onRuleHover: (ruleId: string | null) => void;
    onTogglePlayPause: () => void;
    onReset: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    isOpen,
    particleGroups,
    expandedGroups,
    hoveredRule,
    isPlaying,
    onToggleGroupExpansion,
    onRuleHover,
    onTogglePlayPause,
    onReset,
    engine
}) => {
    return (
        <div className={`fixed left-0 top-0 h-full w-96 bg-black/80 backdrop-blur-xl border-r border-white/10 transform transition-all duration-500 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-30 shadow-2xl`}>
            <SidebarHeader />
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar">
                {particleGroups.map((group, groupIndex) => (
                    <ParticleGroup
                        updateGroupRule={engine.updateGroupRule.bind(engine)}
                        key={group.name}
                        group={group}
                        groupIndex={groupIndex}
                        isExpanded={expandedGroups.has(groupIndex)}
                        hoveredRule={hoveredRule}
                        onToggleExpansion={() => onToggleGroupExpansion(groupIndex)}
                        onRuleHover={onRuleHover}
                    />
                ))}
            </div>
            <DesktopControlPanel
                isPlaying={isPlaying}
                onTogglePlayPause={onTogglePlayPause}
                onReset={onReset}
            />
        </div>
    );
};

export default Sidebar;