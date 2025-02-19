import { IParticleGroup } from "../../common/particle-group/ParticleGroup";
import getParticleGroups from "../../common/particle-group/particleGroups";

const transformParticleGroup = (group: IParticleGroup) => {
    const name = group.color;//.charAt(0).toUpperCase() + group.color.slice(1);
    const mass = group.mass.toFixed(2);
    const velocity = group.velocityDecay.toFixed(2);

    const rules = Object.entries(group.rules).map(([targetColor, rule]) => {
        const gValue = rule.g;
        const gStr = gValue.toFixed(2);

        const interaction =
            gValue < 0
                ? { emoji: "🧲" as const, word: "attracts" as const }
                : { emoji: "❌" as const, word: "repels" as const };

        const badge = `${interaction.emoji}, ${name} ${interaction.word} ${targetColor}`;

        return {
            color: targetColor,
            g: gStr,
            interaction,
            badge,
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

const transformAllParticleGroups = (groups: IParticleGroup[]) =>
    groups.map(transformParticleGroup);

const getParticleGroupsView = () => transformAllParticleGroups(getParticleGroups());

export default getParticleGroupsView;