import { IParticleRule } from "../../../../common/rule/ParticleRule";
import InputChange from "../InputChange";
import RuleInfoBadge from "./RuleInfoBadge";

interface RuleContainerProps {
    rule: IParticleRule;
    ownerColor: string;
    onRuleChange: () => void;
}

const RuleContainer = ({ rule, ownerColor, onRuleChange }: RuleContainerProps) => {
    const interaction = rule.g > 0 ? "❌" : "🧲";

    return (
        <li className="grid grid-cols-5 align-center justify-center">
            <div className="col-span-2 grid grid-cols-2 justify-between cursor-pointer hover:opacity-90 relative cursor-help">
                <div className="h-full w-full flex justify-center items-center group" style={{ backgroundColor: rule.color }}>
                    <p className="bg-zinc-900/90 rounded-full p-1">{interaction}</p>
                    <RuleInfoBadge interaction={interaction} ownerColor={ownerColor} ruleColor={rule.color} />
                </div>
                <div className="h-full w-full flex justify-center items-center text-sm font-bold bg-zinc-900/80 p-2">
                    {rule.g.toFixed(2)}
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