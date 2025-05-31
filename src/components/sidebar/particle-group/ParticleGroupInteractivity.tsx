import RuleContainer, { RuleViewProps } from "./rule/RuleContainer";

interface ParticleGroupInteractivityProps {
    ownerColor: string;
    rules: RuleViewProps[];
    onGroupChange: () => void;
};

const ParticleGroupInteractivity = (props: ParticleGroupInteractivityProps) => {
    return (
        <div>
            <h2 className="text-sm font-bold py-2">Interactivity</h2>
            <ul>
                {props.rules.map((rule: RuleViewProps) => (
                    <RuleContainer
                        key={rule.color}
                        {...rule}
                        ownerColor={props.ownerColor}
                        onRuleChange={props.onGroupChange}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ParticleGroupInteractivity;