import { useState } from "react";
import init from "@game/initialSettings";
import start from "@game/ParticleSimulator";
import getParticleGroupsView from "../transformer/particleGroupsViewTransformer";
import NewWorldButton from "./buttons/NewWorldButton";
import ToggleGameStatusButton from "./buttons/ToggleGameStatusButton";
import ToggleSidebarButton from "./buttons/ToggleSidebarButton";
import { ParticleGroupContainerViewProps } from "./particle-group/ParticleGroupContainer";
import ParticleGroupsContainer from "./particle-groups/ParticleGroupsContainer";
import { InfoContainer, NoteContainer } from "./wordings/Wordings";

start();

const Sidebar = () => {
    const [particleGroups, setParticleGroups] = useState<ParticleGroupContainerViewProps[]>(getParticleGroupsView());
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleReset = () => {
        init();
        setParticleGroups([...getParticleGroupsView()]);
    };

    const handleGroupChange = () => {
        setParticleGroups([...getParticleGroupsView()]);
    };

    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <ToggleSidebarButton onClick={toggleSidebar} isOpen={isOpen} />
            <div className={`fixed left-0 top-0 h-full bg-zinc-900/80 px-4 py-8 shadow-lg overflow-y-auto transition-all duration-300 z-40 sm:w-96 ${isOpen ? "block" : "hidden sm:block"}`}>
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold text-white">Particle Life</h1>
                    <InfoContainer />
                    <ParticleGroupsContainer
                        particleGroups={particleGroups}
                        handleGroupChange={handleGroupChange}
                    />
                    <NoteContainer />
                    <div className="flex">
                        <ToggleGameStatusButton />
                        <NewWorldButton handleReset={handleReset} />
                    </div>
                </div>
            </div>
            <div className="fixed sm:hidden flex bottom-0 w-full h-20">
                <ToggleGameStatusButton />
                <NewWorldButton handleReset={handleReset} />
            </div>
        </>
    );
};

export default Sidebar;