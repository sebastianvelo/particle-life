import { useState } from "react";
import { IParticleGroup } from "../../common/particle-group/ParticleGroup";
import getParticleGroups from "../../common/particle-group/particleGroups";
import start, { fillParticleGroups } from "../../common/ParticleSimulator";
import ParticleGroupsContainer from "./particle-groups/ParticleGroupsContainer";
import { InfoContainer, NoteContainer } from "./wordings/Wordings";
import { ResetWorldButton, ToggleSidebarButton } from "./buttons/Buttons";

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
                    <ResetWorldButton handleReset={handleReset} />
                </div>
            </div>
        </>
    );
};

export default Sidebar;