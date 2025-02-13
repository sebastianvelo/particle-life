interface RuleInfoBadgeProps {
    interaction: string;
    ownerColor: string;
    ruleColor: string;
}

const RuleInfoBadge = (props: RuleInfoBadgeProps) => {
    const interactionWord = props.interaction === "❌" ? "repels" : "attracts";

    return (
        <div className="bg-black text-sm font-bold hidden group-hover:block group-hover:opacity-100 opacity-0 h-full w-64 absolute left-16 top-0 z-100 p-2 rounded-sm transition-all duration-300 ease-in-out">
            {props.interaction} {props.ownerColor} {interactionWord} {props.ruleColor}
        </div>
    );
};

export default RuleInfoBadge;