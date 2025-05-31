import InputChange from "./InputChange";
import RuleInfoBadge from "./RuleInfoBadge";

export interface RuleViewProps {
    color: string;
    g: string;
    interaction: {
        emoji: "❌" | "🧲";
        word: "repels" | "attracts";
    };
    badge: string;
}

export interface RuleContainerProps extends RuleViewProps {
    ownerColor: string;
    onRuleChange: () => void;
}

const RuleContainer = (props: RuleContainerProps) => {

    return (
        <li className="grid grid-cols-5 align-center justify-center">
            <div className="col-span-2 grid grid-cols-2 justify-between hover:opacity-90 relative cursor-help">
                <div className="h-full w-full flex justify-center items-center group" style={{ backgroundColor: props.color }}>
                    <p className="bg-zinc-900/90 rounded-full p-1">{props.interaction.emoji}</p>
                    <RuleInfoBadge content={props.badge} />
                </div>
                <div className="h-full w-full flex justify-center items-center text-sm font-bold bg-zinc-900/80 p-2">
                    {props.g}
                </div>
            </div>
            <div className="col-span-3 p-2">
                <InputChange
                    ownerColor={props.ownerColor}
                    targetColor={props.color}
                    value={+props.g}
                    onValueChange={props.onRuleChange}
                />
            </div>
        </li>
    );
};


export default RuleContainer;