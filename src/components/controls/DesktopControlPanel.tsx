import React from 'react';
import { Pause, Play, RotateCcw } from "lucide-react";

interface DesktopControlPanelProps {
    isPlaying: boolean;
    onTogglePlayPause: () => void;
    onReset: () => void;
}

const DesktopControlPanel: React.FC<DesktopControlPanelProps> = ({
    isPlaying,
    onTogglePlayPause,
    onReset
}) => {
    return (
        <div className="p-6 border-t border-white/10 hidden lg:block">
            <div className="flex gap-3">
                <button
                    onClick={onTogglePlayPause}
                    className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${isPlaying
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg'
                            : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg'
                        }`}
                >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button
                    onClick={onReset}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                </button>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
                Rules are generated randomly on reset
            </p>
        </div>
    );
};

export default DesktopControlPanel;