import Engine from '@game/core/Engine';
import React from 'react';

interface InteractionRuleProps {
    engine: Engine;
    rule: {
        color: string;
        g: string;
        interaction: {
            emoji: string;
            word: string;
        };
    };
    groupName: string;
    groupIndex: number;
    ruleIndex: number;
    hoveredRule: string | null;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const InteractionRule: React.FC<InteractionRuleProps> = ({
    rule,
    groupName,
    groupIndex,
    ruleIndex,
    hoveredRule,
    onMouseEnter,
    onMouseLeave,
    engine
}) => {
    const isHovered = hoveredRule === `${groupIndex}-${ruleIndex}`;

    return (
        <div
            className="bg-white/5 rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-all duration-200"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex items-center gap-3 mb-3">
                <div
                    className="w-5 h-5 rounded border border-white/30 flex items-center justify-center text-xs"
                    style={{ backgroundColor: rule.color }}
                >
                    {rule.interaction.emoji}
                </div>
                <div className="flex-1">
                    <div className="text-sm text-white font-medium">
                        {rule.interaction.word} {rule.color}
                    </div>
                    <div className="text-xs text-gray-400">
                        Force: {rule.g}
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">🧲 Attract</span>
                    <span className="flex items-center gap-1">Repel ❌</span>
                </div>
                <div className="relative">
                    <input
                        type="range"
                        min="-0.99"
                        max="0.99"
                        step="0.05"
                        value={parseFloat(rule.g)}
                        onChange={(e) => engine.updateGroupRule(rule.color, groupName, parseFloat(e.target.value))}
                        className="w-full h-2 bg-gradient-to-r from-blue-500 via-gray-400 to-red-500 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                            background: `linear-gradient(to right, 
                #3b82f6 0%, 
                #6b7280 ${((parseFloat(rule.g) + 1) / 2) * 100}%, 
                #ef4444 100%)`
                        }}
                    />
                    <div
                        className="absolute top-0 w-4 h-2 bg-white rounded-full shadow-lg transform -translate-x-1/2 transition-all duration-150"
                        style={{
                            left: `${((parseFloat(rule.g) + 1) / 2) * 100}%`,
                            transform: `translateX(-50%) ${isHovered ? 'scale(1.2)' : 'scale(1)'}`
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default InteractionRule;