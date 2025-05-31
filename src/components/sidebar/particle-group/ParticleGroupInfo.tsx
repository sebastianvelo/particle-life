export interface ParticleGroupInfoProps {
    mass: string;
    velocity: string;
};

const ParticleGroupInfo = (props: ParticleGroupInfoProps) => {
    return (
        <div className="flex p-2 justify-between">
            <p><span className="font-bold">⚖️ Mass</span> {props.mass}</p>
            <p><span className="font-bold">💨 Velocity</span> {props.velocity}</p>
        </div>
    );
};

export default ParticleGroupInfo;