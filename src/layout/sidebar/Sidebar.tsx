import { ParticleGroupContainerViewProps } from "@game/transformer/particleGroupsViewTransformer";
import ToggleSidebarButton, { ToggleSidebarButtonProps } from "components/buttons/ToggleSidebarButton";
import DesktopControlPanel from "components/controls/DesktopControlPanel";
import MobileControlPanel, { MobileControlPanelProps } from "components/controls/MobileControlPanel";
import ParticleGroup from "components/particle-group/ParticleGroup";
import Footer from "layout/footer/Footer";
import React from "react";
import Header from "../header/Header";
import SidebarInfo from "./SidebarInfo";

interface SidebarProps extends MobileControlPanelProps, ToggleSidebarButtonProps {
    particleGroups: ParticleGroupContainerViewProps[];
    isOpen: boolean;
    updateGroupRule: (fromColor: string, toColor: string, newValue: number) => number;
}

const Sidebar: React.FC<SidebarProps> = ({ particleGroups, isOpen, isPlaying, onReset, onTogglePlayPause, onToggle, updateGroupRule }) => {
    return (
        <>
            <ToggleSidebarButton isOpen={isOpen} onToggle={onToggle} className="fixed top-2 left-3 lg:top-4 lg:left-6" />
            <aside className={`z-40 fixed left-0 top-0 h-full w-screen lg:w-96 bg-slate-950/80 backdrop-blur-xl transform transition-all duration-500 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"} z-30 shadow-2xl`}>
                <div className="p-4 border-b border-white/10 space-y-4">
                    <Header className="flex justify-start px-2 opacity-0 lg:opacity-100" />
                    <SidebarInfo />
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar max-h-96">
                    {particleGroups.map((group) => (
                        <ParticleGroup key={group.name} updateGroupRule={updateGroupRule} group={group} />
                    ))}
                </div>
                <DesktopControlPanel isPlaying={isPlaying} onTogglePlayPause={onTogglePlayPause} onReset={onReset} />
                <Footer />
            </aside>
            <MobileControlPanel isPlaying={isPlaying} onTogglePlayPause={onTogglePlayPause} onReset={onReset} isOpen={isOpen} />
        </>
    );
};

export default Sidebar;