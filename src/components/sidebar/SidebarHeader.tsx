import { Info, Zap } from "lucide-react";

interface SidebarHeaderProps {

}

const SidebarHeader: React.FC<SidebarHeaderProps> = () => {
    return (
        <div className="p-4 border-b border-white/10">
            <div className="flex justify-end items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white">Particle Life</h1>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-white">Simulation Info</span>
                </div>
                <p className="text-xs text-gray-300">
                    Configure particle interactions below. Particles can attract 🧲 or repel ❌ each other based on color groups.
                </p>
            </div>
        </div>

    );
}

export default SidebarHeader;