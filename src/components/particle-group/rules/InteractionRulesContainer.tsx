import { ParticleGroupContainerViewProps } from "@game/transformer/particleGroupsViewTransformer";
import { Settings } from "lucide-react";
import InteractionRule from "./rule/InteractionRule";

interface InteractionRulesContainerProps {
    group: ParticleGroupContainerViewProps;
    updateGroupRule: (fromColor: string, toColor: string, newValue: number) => number;
}

const InteractionRulesContainer: React.FC<InteractionRulesContainerProps> = ({ group, updateGroupRule }) => {
    return (
        <div className="pb-4 space-y-3 animate-in slide-in-from-top-2 duration-300 p-3">
            <div className="flex items-center justify-center gap-2 mb-3">
                <Settings className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white">Interaction rules</span>
            </div>
            {group.rules.map((rule, ruleIndex) => (
                <InteractionRule
                    key={`${rule.color}-${ruleIndex}`}
                    rule={rule}
                    groupName={group.name}
                    updateGroupRule={updateGroupRule}
                />
            ))}
        </div>
    );
};

export default InteractionRulesContainer;