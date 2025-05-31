import React, { useEffect, useRef } from 'react';

interface GameCanvasProps {
    isOpen: boolean;
    canvasReady: (canvasRef: React.RefObject<HTMLCanvasElement>) => () => void;
}

const GameCanvas: React.FC<GameCanvasProps> = ({ isOpen, canvasReady }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        canvasReady(canvasRef)
    }, []);

    return (
        <div className={`flex justify-center items-start lg:items-center min-h-screen transition-all duration-500 ease-out ${isOpen ? 'ml-96' : 'ml-0'}`}>
            <canvas ref={canvasRef} id="life" className="border-2 border-white/20 shadow-2xl rounded-lg backdrop-blur-sm" />
        </div>
    );
};

export default GameCanvas;