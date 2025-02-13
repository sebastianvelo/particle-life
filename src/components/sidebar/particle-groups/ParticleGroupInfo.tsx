import { IParticleGroup } from "../../../common/particle-group/ParticleGroup";

interface ParticleGroupInfoProps {
    group: IParticleGroup;
};

const ParticleGroupInfo = (props: ParticleGroupInfoProps) => {
    return (
        <div className="flex p-2 justify-between">
            <p><span className="font-bold">⚖️ Mass</span> {props.group.mass}</p>
            <p><span className="font-bold">💨 Velocity</span> {props.group.velocityDecay}</p>
        </div>
    );
};

export default ParticleGroupInfo;