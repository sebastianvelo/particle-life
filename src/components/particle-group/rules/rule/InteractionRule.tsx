import { useState } from "react";
import InteractionRuleControl from "./InteractionRuleControl";
import InteractionRuleToggler from "./InteractionRuleToggler";

export interface RuleViewProps {
    color: string;
    g: number;
    interaction: "repels" | "attracts";
}

interface InteractionRuleProps {
    rule: RuleViewProps;
    groupName: string;
    updateGroupRule: (fromColor: string, toColor: string, newValue: number) => number;
}

const InteractionRule: React.FC<InteractionRuleProps> = ({ rule, groupName, updateGroupRule }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const onToggleExpansion = () => setIsExpanded(!isExpanded);

    return (
        <div className="bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200">
            <InteractionRuleToggler rule={rule} groupName={groupName} onToggleExpansion={onToggleExpansion} isExpanded={isExpanded} />
            {isExpanded && (<InteractionRuleControl updateGroupRule={updateGroupRule} rule={rule} groupName={groupName} />)}
        </div>
    );
};

export default InteractionRule;