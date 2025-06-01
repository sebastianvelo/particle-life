import { Info } from "lucide-react";

const SidebarInfo: React.FC = () => {
    return (
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-white">Info</span>
            </div>
            <p className="text-xs text-gray-300 flex">
                Particles can attract or repel each other based on color groups. Configure particle interactions below.
            </p>
        </div>
    );
}

export default SidebarInfo;