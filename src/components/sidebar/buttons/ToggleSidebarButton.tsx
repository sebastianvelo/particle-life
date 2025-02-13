interface ToggleSidebarButtonProps {
    onClick: () => void;
    isOpen: boolean;
}

const ToggleSidebarButton = (props: ToggleSidebarButtonProps) => {
    return (
        <button className="sm:hidden fixed top-0 left-0 z-50 bg-blue-500 p-2 rounded" onClick={props.onClick}>
            {props.isOpen ? "X" : "O"}
        </button>
    )
}

export default ToggleSidebarButton;