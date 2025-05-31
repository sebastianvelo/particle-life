import engine from "@game/Game";
import { useEffect, useState } from "react";
interface InputChangeProps {
    value: number;
    ownerColor: string;
    targetColor: string;
    onValueChange: (newValue: number) => void;
}

const InputChange = ({ value, ownerColor, targetColor, onValueChange }: InputChangeProps) => {
    const [internalValue, setInternalValue] = useState(value);

    useEffect(() => {
        setInternalValue(value);
    }, [value]);

    const handleChange = (e: any) => {
        const newValue = +e.target.value;
        engine.updateGroupRule(ownerColor, targetColor, newValue);
        setInternalValue(newValue);
        onValueChange(newValue);
    };

    return (
        <div className="flex gap-x-2 justify-center">
            <p>🧲</p>
            <input
                className="w-full"
                type="range"
                min="-0.99"
                max="0.99"
                step="0.05"
                onChange={handleChange}
                value={internalValue}
            />
            <p>❌</p>
        </div>
    );
};



export default InputChange;