import { useEffect, useState } from "react";
import { updateParticleGroupRules } from "../../common/particle-group/particleGroups";

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
        updateParticleGroupRules(ownerColor, targetColor, newValue);
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