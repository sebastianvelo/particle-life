import ParticleGroupContainer, { ParticleGroupContainerViewProps } from "../particle-group/ParticleGroupContainer";

interface ParticleGroupsContainerProps {
    particleGroups: ParticleGroupContainerViewProps[];
    handleGroupChange: () => void
}

const ParticleGroupsContainer = (props: ParticleGroupsContainerProps) => {
    return (
        <ul className="text-white space-y-2">
            {props.particleGroups.map((group, idx) => (
                <ParticleGroupContainer
                    key={idx}
                    {...group}
                    onGroupChange={props.handleGroupChange}
                />
            ))}
        </ul>
    )
}

export default ParticleGroupsContainer;