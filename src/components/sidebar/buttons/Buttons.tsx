interface ToggleSidebarButtonProps {
    onClick: () => void;
    isOpen: boolean;
}

export const ToggleSidebarButton = (props: ToggleSidebarButtonProps) => {
    return (
        <button className="sm:hidden fixed top-0 left-0 z-50 bg-blue-500 p-2 rounded" onClick={props.onClick}>
            {props.isOpen ? "X" : "O"}
        </button>
    )
}

interface ResetWorldButtonProps {
    handleReset: () => void;
}

export const ResetWorldButton = (props: ResetWorldButtonProps) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 font-bold text-xl p-2 w-full rounded cursor-pointer bottom-0 left-0" onClick={props.handleReset}>
            Reset world
        </button>
    );
};