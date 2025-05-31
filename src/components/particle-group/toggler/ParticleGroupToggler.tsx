import { ParticleGroupContainerViewProps } from "@game/transformer/particleGroupsViewTransformer";
import { ChevronDown, ChevronRight } from "lucide-react";
import ParticleGroupInfo from "./ParticleGroupInfo";

interface ParticleGroupTogglerProps {
    group: ParticleGroupContainerViewProps;
    isExpanded: boolean;
    onToggleExpansion: () => void;
}

const ParticleGroupToggler: React.FC<ParticleGroupTogglerProps> = ({ group, isExpanded, onToggleExpansion }) => {
    const chevronClassName = "w-5 h-5 text-gray-400 transition-transform duration-200";

    return (
        <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300">
            <button onClick={onToggleExpansion} className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                <ParticleGroupInfo group={group} />
                {isExpanded ? <ChevronDown className={chevronClassName} /> : <ChevronRight className={chevronClassName} />}
            </button>
        </div>
    );
};

export default ParticleGroupToggler;