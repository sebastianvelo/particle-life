import { Magnet, XCircle } from "lucide-react";

export interface RuleViewProps {
    color: string;
    g: number;
    interaction: "repels" | "attracts";
}

export interface RuleContainerProps extends RuleViewProps {
    ownerColor: string;
    onRuleChange: () => void;
}

interface InteractionRuleProps {
    rule: RuleViewProps;
    groupName: string;
    updateGroupRule: (fromColor: string, toColor: string, newValue: number) => number;
}

const InteractionRule: React.FC<InteractionRuleProps> = ({ rule, groupName, updateGroupRule }) => {
    const style = { backgroundColor: rule.color };
    const magnet = <Magnet className="h-4 w-4 transform rotate-90" />;
    const repel = <XCircle className="h-4 w-4" />;

    return (
        <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-all duration-200">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-5 rounded border border-white/30 flex items-center justify-center text-xs" style={style}></div>
                <div className="flex-1">
                    <div className="text-sm text-white font-medium flex space-x-1 items-center">
                        <span>{rule.interaction} {rule.color}</span> {rule.g > 0 ? repel : magnet}
                    </div>
                    <div className="text-xs text-gray-400">
                        Force: {rule.g}
                    </div>
                </div>
            </div>

            <div className="space-y-2">
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
        </div>
    );
};

export default InteractionRule;