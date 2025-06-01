import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";

export interface ToggleSidebarButtonProps {
    className?: string;
    onToggle: () => void;
    isOpen: boolean;
}

const ToggleSidebarButton: React.FC<ToggleSidebarButtonProps> = ({ onToggle, isOpen, className }) => {
    const chevronClassName = "w-5 h-5 text-white group-hover:scale-110 transition-transform";
    const desktop = "hidden lg:block";
    const mobile = "lg:hidden";
    
    return (
        <button className={`${className} z-50 border border-white/20 rounded-md p-2 hover:bg-white/20 transition-all duration-300 shadow-lg group ${!isOpen ? "bg-black/50" : "bg-white/10 backdrop-blur-md"}`} onClick={onToggle}>
            {isOpen ? (
                <>
                    <ChevronDown className={`${chevronClassName} ${desktop}`} />
                    <ChevronUp className={`${chevronClassName} ${mobile}`} />
                </>
            ) : (
                <>
                    <ChevronRight className={`${chevronClassName} ${desktop}`} />
                    <ChevronDown className={`${chevronClassName} ${mobile}`} />
                </>
            )}
        </button>
    );
};

export default ToggleSidebarButton;