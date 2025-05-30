import config from "../simulator.config";
import { randomVelocity } from "../utils";
import ParticleGroup, { IParticleGroup } from "./ParticleGroup";

const ParticleGroupImpl = (color: string): IParticleGroup =>
    ParticleGroup(color, config.particleGroups.length, randomVelocity());

export default ParticleGroupImpl;