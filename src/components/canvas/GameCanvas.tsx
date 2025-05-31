import { useEffect, useRef } from "react";

interface GameCanvasProps {
    sidebarIsOpen: boolean;
    canvasReady: (canvasRef: React.RefObject<HTMLCanvasElement>) => () => void;
}

const GameCanvas: React.FC<GameCanvasProps> = ({ sidebarIsOpen, canvasReady }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        canvasReady(canvasRef)
    }, []);

    return (
        <div className={`shadow-xl flex justify-center items-start lg:items-center min-h-screen transition-all duration-500 ease-out ${sidebarIsOpen ? "ml-96" : "ml-0"}`}>
            <canvas ref={canvasRef} id="life" className="shadow-2xl lg:rounded-lg backdrop-blur-sm" />
        </div>
    );
};

export default GameCanvas;