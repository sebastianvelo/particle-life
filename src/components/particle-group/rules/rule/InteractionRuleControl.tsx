import { Magnet, XCircle } from "lucide-react";
import { RuleViewProps } from "./InteractionRule";

interface InteractionRuleControlProps {
    rule: RuleViewProps;
    groupName: string;
    updateGroupRule: (fromColor: string, toColor: string, newValue: number) => number;
}

const InteractionRuleControl: React.FC<InteractionRuleControlProps> = ({ rule, groupName, updateGroupRule }) => {
    const magnet = <Magnet className="h-4 w-4 transform rotate-90" />;
    const repel = <XCircle className="h-4 w-4" />;

    return (
        <div className="p-3 space-y-2 bg-black/20">
            <div className="flex justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1">{magnet} Attract</span>
                <span className="flex items-center gap-1">Repel {repel}</span>
            </div>
            <div className="relative">
                <input
                    type="range"
                    min="-0.99"
                    max="0.99"
                    step="0.05"
                    value={rule.g}
                    onChange={(e) => updateGroupRule(groupName, rule.color, parseFloat(e.target.value))}
                    className="w-full h-2 bg-gradient-to-r from-blue-500 via-gray-400 to-red-500 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                        background: `linear-gradient(to right,  #3b82f6 0%,  #6b7280 ${((rule.g + 1) / 2) * 100}%,  #ef4444 100%)`
                    }}
                />
            </div>
        </div>
    );
};

export default InteractionRuleControl;