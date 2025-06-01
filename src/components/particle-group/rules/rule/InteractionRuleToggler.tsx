import { ChevronDown, ChevronRight, Magnet, XCircle } from "lucide-react";
import { RuleViewProps } from "./InteractionRule";

interface InteractionRuleTogglerProps {
    rule: RuleViewProps;
    groupName: string;
    isExpanded: boolean;
    onToggleExpansion: () => void
}

const InteractionRuleToggler: React.FC<InteractionRuleTogglerProps> = ({ rule, groupName, onToggleExpansion, isExpanded }) => {
    const style = { backgroundColor: rule.color };
    const magnet = <Magnet className="h-4 w-4 transform rotate-90" />;
    const repel = <XCircle className="h-4 w-4" />;
    const chevronClassName = "w-5 h-5 text-gray-400 transition-transform duration-200";

    return (
        <div className={`p-3 cursor-pointer flex items-center gap-3`} onClick={onToggleExpansion}>
            <div className="w-5 h-5 rounded border border-white/30 flex items-center justify-center text-xs" style={style}></div>
            <div className="flex-1">
                <div className="text-sm text-white font-medium flex space-x-1 items-center">
                    {rule.g > 0 ? repel : magnet}
                    <span>{rule.interaction} {rule.color === groupName ? "itself" : rule.color}</span>
                </div>
                <div className="text-xs text-gray-400">
                    Force: {rule.g}
                </div>
            </div>
            {isExpanded ? <ChevronDown className={chevronClassName} /> : <ChevronRight className={chevronClassName} />}
        </div>
    );
};

export default InteractionRuleToggler;