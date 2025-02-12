import { IParticleGroup } from "../../common/particle-group/ParticleGroup";
import { IParticleRule } from "../../common/rule/ParticleRule";
import RuleContainer from "./RuleContainer";

interface ParticleGroupContainerProps {
    group: IParticleGroup;
    onGroupChange: () => void;
}

const ParticleGroupContainer = ({ group, onGroupChange }: ParticleGroupContainerProps) => {
    return (
        <details>
            <summary className="rounded font-bold text-xl cursor-pointer list-none" style={{ backgroundColor: group.color }}>
                <p className="bg-zinc-900/50 hover:bg-zinc-900/70 h-full w-full p-1">
                    {group.color.charAt(0).toUpperCase() + group.color.slice(1)}
                </p>
            </summary>
            <div className="bg-black rounded-md">
                <ul>
                    {Object.values(group.rules).map((rule: IParticleRule) => (
                        <RuleContainer
                            key={rule.color}
                            rule={rule}
                            ownerColor={group.color}
                            onRuleChange={onGroupChange}
                        />
                    ))}
                </ul>
            </div>
        </details>
    );
};

export default ParticleGroupContainer;