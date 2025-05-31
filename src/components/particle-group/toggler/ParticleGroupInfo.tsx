import { ParticleGroupContainerViewProps } from "@game/transformer/particleGroupsViewTransformer";
import { Target, Waves } from "lucide-react";

interface ParticleGroupProps {
    group: ParticleGroupContainerViewProps;
}

const ParticleGroupInfo: React.FC<ParticleGroupProps> = ({ group }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-lg border-2 border-white/30" style={{ backgroundColor: group.name }} />
            <div className="text-left">
                <h3 className="font-medium text-white capitalize">{group.name}</h3>
                <div className="flex gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                        <Target className="w-3 h-3" />
                        Mass: {group.info.mass}
                    </span>
                    <span className="flex items-center gap-1">
                        <Waves className="w-3 h-3" />
                        Vel: {group.info.velocity}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ParticleGroupInfo;