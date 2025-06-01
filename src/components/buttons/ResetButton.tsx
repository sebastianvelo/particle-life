import { RotateCcw } from "lucide-react";

export interface ResetButtonProps {
    onReset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
    return (
        <button onClick={onReset} className="flex-1 bg-gradient-to-br from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
            <RotateCcw className="w-4 h-4" />
            Reset
        </button>
    );
};

export default ResetButton;