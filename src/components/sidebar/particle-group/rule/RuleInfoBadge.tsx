interface RuleInfoBadgeProps {
    content: string;
}

const RuleInfoBadge = (props: RuleInfoBadgeProps) => {
    return (
        <div className="bg-black text-sm font-bold hidden group-hover:block group-hover:opacity-100 opacity-0 h-full w-64 absolute left-16 top-0 z-100 p-2 rounded-sm transition-all duration-300 ease-in-out">
            {props.content}
        </div>
    );
};

export default RuleInfoBadge;