import { IParticleGroup } from "../../../common/particle-group/ParticleGroup";
import { IParticleRule } from "../../../common/rule/ParticleRule";
import RuleContainer from "./rule/RuleContainer";

interface ParticleGroupInteractivityProps {
    group: IParticleGroup;
    onGroupChange: () => void;
};

const ParticleGroupInteractivity = (props: ParticleGroupInteractivityProps) => {
    return (
        <div>
            <h2 className="text-sm font-bold py-2">Interactivity</h2>
            <ul>
                {Object.values(props.group.rules).map((rule: IParticleRule) => (
                    <RuleContainer
                        key={rule.color}
                        rule={rule}
                        ownerColor={props.group.color}
                        onRuleChange={props.onGroupChange}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ParticleGroupInteractivity;