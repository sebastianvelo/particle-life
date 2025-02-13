import { IParticleGroup } from "../../../common/particle-group/ParticleGroup"
import ParticleGroupContainer from "../particle-group/ParticleGroupContainer";

interface ParticleGroupsContainerProps {
    particleGroups: IParticleGroup[];
    handleGroupChange: () => void
}

const ParticleGroupsContainer = (props: ParticleGroupsContainerProps) => {
    return (
        <ul className="text-white space-y-2">
            {props.particleGroups.map((group, idx) => (
                <ParticleGroupContainer
                    key={idx}
                    group={group}
                    onGroupChange={props.handleGroupChange}
                />
            ))}
        </ul>
    )
}

export default ParticleGroupsContainer;