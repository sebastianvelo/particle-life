import React from 'react';
import { Pause, Play, RotateCcw } from "lucide-react";

interface MobileControlPanelProps {
    isPlaying: boolean;
    onTogglePlayPause: () => void;
    onReset: () => void;
}

const MobileControlPanel: React.FC<MobileControlPanelProps> = ({
    isPlaying,
    onTogglePlayPause,
    onReset
}) => {
    return (
        <div className="fixed bottom-4 justify-center flex gap-3 lg:hidden z-40 w-full">
            <button
                onClick={onTogglePlayPause}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3 text-white font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
                onClick={onReset}
                className="bg-gradient-to-r from-red-500/80 to-pink-500/80 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3 text-white font-medium hover:from-red-500 hover:to-pink-500 transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
                <RotateCcw className="w-4 h-4" />
                Reset
            </button>
        </div>
    );
};

export default MobileControlPanel;