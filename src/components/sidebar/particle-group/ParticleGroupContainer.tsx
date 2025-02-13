import { IParticleGroup } from "../../../common/particle-group/ParticleGroup";
import ParticleGroupInfo from "./ParticleGroupInfo";
import ParticleGroupInteractivity from "./ParticleGroupInteractivity";

interface ParticleGroupContainerProps {
    group: IParticleGroup;
    onGroupChange: () => void;
}

const ParticleGroupContainer = (props: ParticleGroupContainerProps) => {
    return (
        <details>
            <summary className="rounded-tr-md rounded-tl-md font-bold text-xl cursor-pointer list-none flex justify-end" style={{ backgroundColor: props.group.color }}>
                <p className="bg-zinc-900/50 hover:bg-zinc-900/95 h-auto w-3/4 p-2 text-right">
                    {props.group.color.charAt(0).toUpperCase() + props.group.color.slice(1)}
                </p>
            </summary>
            <div className="bg-black">
                <ParticleGroupInfo group={props.group} />
                <ParticleGroupInteractivity group={props.group} onGroupChange={props.onGroupChange} />
            </div>
        </details>
    );
};

export default ParticleGroupContainer;