import { RotateCcw } from "lucide-react";

export interface ResetButtonProps {
    onReset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
    return (
        <button onClick={onReset} className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200 py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg">
            <RotateCcw className="w-4 h-4" />
            Reset
        </button>
    );
};

export default ResetButton;