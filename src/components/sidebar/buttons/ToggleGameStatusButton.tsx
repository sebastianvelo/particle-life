import engine from "@game/Game";
import { useState } from "react";

const ToggleGameStatusButton = () => {
    const [isActive, setIsActive] = useState<boolean>(engine.getStatus());

    const handleGameStatus = () => {
        engine.toggleStatus();
        setIsActive(!isActive);
    }

    return (
        <button className="bg-blue-500 hover:bg-blue-700 font-bold text-xl p-2 w-full rounded cursor-pointer bottom-0 left-0" onClick={handleGameStatus}>
            {isActive ? "Pause" : "Resume"}
        </button>
    );
};

export default ToggleGameStatusButton;