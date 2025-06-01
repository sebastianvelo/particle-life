import { Atom } from "lucide-react";

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <div className={`z-50 items-center gap-3 mb-4 ${className}`}>
            <div className="w-10 h-10 bg-gradient-to-br from-accent-700 to-primary-500 rounded-full flex items-center justify-center">
                <Atom className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Particle Life</h1>
        </div>
    );
}

export default Header;