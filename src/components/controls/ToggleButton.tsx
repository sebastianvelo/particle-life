import { ChevronDown, ChevronRight } from "lucide-react";

interface ToggleButtonProps {
    onToggle: () => void;
    isOpen: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onToggle, isOpen }) => {
    return (
        <button className="fixed top-4 left-6 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 hover:bg-white/20 transition-all duration-300 shadow-lg group" onClick={onToggle}>
            {isOpen ? (
                <ChevronDown className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            ) : (
                <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            )}
        </button>
    )
};

export default ToggleButton;