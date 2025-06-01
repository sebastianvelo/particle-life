import { Atom, Info, Zap } from "lucide-react";

const SidebarHeader: React.FC = () => {
    return (
        <div className="p-4 border-b border-white/10 space-y-4">
            <div className="flex justify-start items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-indigo-500 rounded-full flex items-center justify-center">
                    <Atom className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white">Particle Life</h1>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-white">Info</span>
                </div>
                <p className="text-xs text-gray-300 flex">
                    Particles can attract or repel each other based on color groups. Configure particle interactions below. 
                </p>
            </div>
        </div>
    );
}

export default SidebarHeader;