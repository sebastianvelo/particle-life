import Engine from "@game/core/Engine";
import { ParticleGroup } from "@game/particle/ParticleGroupManager";
import { RuleViewProps } from "components/particle-group/rule/InteractionRule";

interface ParticleGroupInfoProps {
    mass: string;
    velocity: string;
};

export interface ParticleGroupContainerViewProps {
    name: string;
    info: ParticleGroupInfoProps;
    rules: RuleViewProps[];
}

const transformParticleGroup = (group: ParticleGroup): ParticleGroupContainerViewProps => {
    const name = group.color;//.charAt(0).toUpperCase() + group.color.slice(1);
    const mass = group.mass.toFixed(2);
    const velocity = group.velocityDecay.toFixed(2);

    const rules: RuleViewProps[] = Object.entries(group.rules).map(([targetColor, rule]) => {
        const g = +rule.g.toFixed(2);
        const interaction = g < 0 ? "attracts" : "repels";

        return {
            color: targetColor,
            g: g,
            interaction,
        };
    });

    return {
        name,
        info: {
            mass,
            velocity,
        },
        rules,
    };
};

const transformAllParticleGroups = (groups: ParticleGroup[]) => groups.map(transformParticleGroup);

const getParticleGroupsView = (engine: Engine) => transformAllParticleGroups(engine.getGroupManager().getParticleGroups());

export default getParticleGroupsView;