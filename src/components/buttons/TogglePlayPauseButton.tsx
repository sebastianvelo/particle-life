import { Pause, Play } from "lucide-react";
import React from "react";

export interface TogglePlayPauseButtonProps {
  isPlaying: boolean;
  onTogglePlayPause: () => void;
}

const TogglePlayPauseButton: React.FC<TogglePlayPauseButtonProps> = ({ isPlaying, onTogglePlayPause }) => (
  <button
    onClick={onTogglePlayPause}
    className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
      isPlaying
        ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg"
        : "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg"
    }`}
  >
    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
    {isPlaying ? "Pause" : "Play"}
  </button>
);

export default TogglePlayPauseButton;
