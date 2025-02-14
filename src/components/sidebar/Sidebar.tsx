import { useState } from "react";
import fillParticleGroups from "../../common/initialSettings";
import { IParticleGroup } from "../../common/particle-group/ParticleGroup";
import getParticleGroups from "../../common/particle-group/particleGroups";
import start from "../../common/ParticleSimulator";
import NewWorldButton from "./buttons/NewWorldButton";
import ToggleGameStatusButton from "./buttons/ToggleGameStatusButton";
import ToggleSidebarButton from "./buttons/ToggleSidebarButton";
import ParticleGroupsContainer from "./particle-groups/ParticleGroupsContainer";
import { InfoContainer, NoteContainer } from "./wordings/Wordings";

start();

const Sidebar = () => {
    const [particleGroups, setParticleGroups] = useState<IParticleGroup[]>(getParticleGroups());
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleReset = () => {
        fillParticleGroups();
        setParticleGroups([...getParticleGroups()]);
    };

    const handleGroupChange = () => {
        setParticleGroups([...getParticleGroups()]);
    };

    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <ToggleSidebarButton isOpen={isOpen} onClick={toggleSidebar} />
            <div className={`fixed left-0 top-0 h-full bg-zinc-900/50 px-4 py-4 shadow-lg overflow-y-auto transition-all duration-300 z-40 ${isOpen ? "w-80" : "w-2"} sm:w-96`}>
                <div className={`${isOpen ? "block" : "hidden"} sm:block space-y-4`}>
                    <h1 className="text-3xl font-bold text-white">Particle Life</h1>
                    <InfoContainer />
                    <ParticleGroupsContainer particleGroups={particleGroups} handleGroupChange={handleGroupChange} />
                    <NoteContainer />
                    <div className="flex">
                        <ToggleGameStatusButton />
                        <NewWorldButton handleReset={handleReset} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;