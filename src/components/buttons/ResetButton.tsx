import React from 'react';
import { RotateCcw } from 'lucide-react';

export interface ResetButtonProps {
    onReset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
    return (
        <button onClick={onReset} className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
            <RotateCcw className="w-4 h-4" />
            Reset
        </button>
    );
};

export default ResetButton;