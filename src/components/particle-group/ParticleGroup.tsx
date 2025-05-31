import Engine from "@game/core/Engine";
import { ChevronRight, Settings, Target, Waves } from "lucide-react";
import React from 'react';
import InteractionRule from './InteractionRule';

export interface ParticleGroupInfoProps {
    mass: string;
    velocity: string;
};

export interface RuleViewProps {
    color: string;
    g: string;
    interaction: {
        emoji: "❌" | "🧲";
        word: "repels" | "attracts";
    };
    badge: string;
}

export interface RuleContainerProps extends RuleViewProps {
    ownerColor: string;
    onRuleChange: () => void;
}

export interface ParticleGroupContainerViewProps {
    name: string;
    info: ParticleGroupInfoProps;
    rules: RuleViewProps[];
}

interface ParticleGroupProps {
    group: ParticleGroupContainerViewProps;
    groupIndex: number;
    isExpanded: boolean;
    hoveredRule: string | null;
    onToggleExpansion: () => void;
    onRuleHover: (ruleId: string | null) => void;
    updateGroupRule: (fromColor: string, toColor: string, newValue: number) => number;
}

const ParticleGroup: React.FC<ParticleGroupProps> = ({
    group,
    groupIndex,
    isExpanded,
    hoveredRule,
    onToggleExpansion,
    onRuleHover,
    updateGroupRule
}) => {
    return (
        <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300">
            <button onClick={onToggleExpansion} className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg border-2 border-white/30" style={{ backgroundColor: group.name }} />
                    <div className="text-left">
                        <h3 className="font-medium text-white capitalize">{group.name}</h3>
                        <div className="flex gap-4 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                                <Target className="w-3 h-3" />
                                Mass: {group.info.mass}
                            </span>
                            <span className="flex items-center gap-1">
                                <Waves className="w-3 h-3" />
                                Vel: {group.info.velocity}
                            </span>
                        </div>
                    </div>
                </div>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-45' : ''}`} />
            </button>

            {isExpanded && (
                <div className="pb-4 space-y-3 animate-in slide-in-from-top-2 duration-300 p-3">
                    <div className="flex items-center gap-2 mb-3">
                        <Settings className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-medium text-white">Interaction Rules</span>
                    </div>

                    {group.rules.map((rule, ruleIndex) => (
                        <InteractionRule
                            key={rule.color}
                            rule={rule}
                            groupName={group.name}
                            groupIndex={groupIndex}
                            ruleIndex={ruleIndex}
                            hoveredRule={hoveredRule}
                            onMouseEnter={() => onRuleHover(`${groupIndex}-${ruleIndex}`)}
                            onMouseLeave={() => onRuleHover(null)}
                            updateGroupRule={updateGroupRule}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ParticleGroup;