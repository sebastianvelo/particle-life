import { useState } from "react";
import { IParticleGroup } from "../../common/particle-group/ParticleGroup";
import particleGroups from "../../common/particle-group/particleGroups";
import start, { fillParticleGroups } from "../../common/ParticleSimulator";
import ParticleGroupContainer from "./ParticleGroupContainer";

start();

const Sidebar = () => {
    const [pg, setPg] = useState<IParticleGroup[]>(particleGroups);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleReset = () => {
        fillParticleGroups();
        setPg([...particleGroups]);
    };

    const handleGroupChange = () => {
        setPg([...particleGroups]);
    };

    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <button className="sm:hidden fixed top-0 left-0 z-50 bg-blue-500 p-2 rounded" onClick={toggleSidebar}>
                {isOpen ? "X" : "O"}
            </button>
            <div className={`fixed left-0 top-0 h-full bg-zinc-900/50 px-4 py-4 shadow-lg overflow-y-auto transition-all duration-300 z-40 ${isOpen ? "w-80" : "w-2"} sm:w-96`}>
                <div className={`${isOpen ? "block" : "hidden"} sm:block space-y-4`}>
                    <h1 className="text-3xl font-bold text-white">Particle Life</h1>
                    <div className="text-justify space-y-4 px-4">
                        <p className="text-white text-lg font-medium">
                            Below you can configure the interactions between the particles: whether they attract <span role="img" aria-label="magnet">🧲</span> or repel <span role="img" aria-label="repel">❌</span>.
                        </p>
                        <p className="text-white text-lg font-medium">Enjoy the beautiful patterns that the particles form! 🚀</p>
                    </div>
                    <ul className="text-white space-y-4">
                        {pg.map((group) => (
                            <ParticleGroupContainer
                                key={group.color}
                                group={group}
                                onGroupChange={handleGroupChange}
                            />
                        ))}
                    </ul>
                    <p className="text-white text-sm font-medium">Note: The rules are generated randomly. However, by default, particles of the same color attract each other.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 font-bold text-xl p-2 w-full rounded cursor-pointer absolute bottom-0 left-0" onClick={handleReset}>
                        Reset world
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;