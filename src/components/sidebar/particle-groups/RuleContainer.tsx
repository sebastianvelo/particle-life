import { IParticleRule } from "../../../common/rule/ParticleRule";
import InputChange from "./InputChange";

interface RuleContainerProps {
    rule: IParticleRule;
    ownerColor: string;
    onRuleChange: () => void;
}

const RuleContainer = ({ rule, ownerColor, onRuleChange }: RuleContainerProps) => {
    const interaction = rule.g > 0 ? "❌" : "🧲";
    const interactionWord = rule.g > 0 ? "repels" : "attracts";

    return (
        <li className="grid grid-cols-5 align-center justify-center">
            <div className="col-span-2 grid grid-cols-2 justify-between cursor-pointer hover:opacity-90 relative cursor-help group">
                <div className="h-full w-full flex justify-center items-center" style={{ backgroundColor: rule.color }}>
                    <p className="bg-zinc-900/90 rounded-full p-1">{interaction}</p>
                </div>
                <div className="h-full w-full flex justify-center items-center text-sm font-bold bg-zinc-900/80 p-2">
                    {rule.g.toFixed(2)}
                </div>
                <div className="bg-gray-900/95 text-sm font-bold hidden group-hover:block group-hover:opacity-100 opacity-0 h-full w-64 absolute left-16 top-0 z-100 p-2 rounded-sm transition-all duration-300 ease-in-out">
                    {interaction} {ownerColor} {interactionWord} {rule.color}
                </div>
            </div>
            <div className="col-span-3 p-2">
                <InputChange
                    ownerColor={ownerColor}
                    targetColor={rule.color}
                    value={rule.g}
                    onValueChange={onRuleChange}
                />
            </div>
        </li>
    );
};


export default RuleContainer;