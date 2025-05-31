import { ParticleGroupContainerViewProps } from "@game/transformer/particleGroupsViewTransformer";
import { useState } from "react";
import InteractionRulesContainer from "./rules/InteractionRulesContainer";
import ParticleGroupToggler from "./toggler/ParticleGroupToggler";

interface ParticleGroupProps {
    group: ParticleGroupContainerViewProps;
    updateGroupRule: (fromColor: string, toColor: string, newValue: number) => number;
}

const ParticleGroup: React.FC<ParticleGroupProps> = ({ group, updateGroupRule }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const onToggleExpansion = () => setIsExpanded(!isExpanded);

    return (
        <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300">
            <ParticleGroupToggler group={group} onToggleExpansion={onToggleExpansion} isExpanded={isExpanded} />
            {isExpanded && <InteractionRulesContainer group={group} updateGroupRule={updateGroupRule} />}
        </div>
    );
};

export default ParticleGroup;