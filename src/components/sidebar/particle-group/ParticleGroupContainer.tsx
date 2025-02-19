import ParticleGroupInfo, { ParticleGroupInfoProps } from "./ParticleGroupInfo";
import ParticleGroupInteractivity from "./ParticleGroupInteractivity";
import { RuleViewProps } from "./rule/RuleContainer";

export interface ParticleGroupContainerViewProps {
    name: string;
    info: ParticleGroupInfoProps;
    rules: RuleViewProps[];
}

export interface ParticleGroupContainerProps extends ParticleGroupContainerViewProps {
    onGroupChange: () => void;
}

const ParticleGroupContainer = (props: ParticleGroupContainerProps) => {
    return (
        <details>
            <summary className="rounded-tr-md rounded-tl-md font-bold text-xl cursor-pointer list-none flex justify-end" style={{ backgroundColor: props.name }}>
                <p className="bg-zinc-900/50 hover:bg-zinc-900/95 h-auto w-3/4 p-2 text-right">
                    {props.name}
                </p>
            </summary>
            <div className="bg-black">
                <ParticleGroupInfo {...props.info} />
                <ParticleGroupInteractivity ownerColor={props.name} rules={props.rules} onGroupChange={props.onGroupChange} />
            </div>
        </details>
    );
};

export default ParticleGroupContainer;