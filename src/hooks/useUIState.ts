import { useState, useCallback } from 'react';

export const useUIState = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [expandedGroups, setExpandedGroups] = useState<Set<number>>(new Set([]));
    const [hoveredRule, setHoveredRule] = useState<string | null>(null);

    const toggleSidebar = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const toggleGroupExpansion = useCallback((index: number) => {
        setExpandedGroups(prev => {
            const newExpanded = new Set(prev);
            if (newExpanded.has(index)) {
                newExpanded.delete(index);
            } else {
                newExpanded.add(index);
            }
            return newExpanded;
        });
    }, []);

    const setRuleHover = useCallback((ruleId: string | null) => {
        setHoveredRule(ruleId);
    }, []);

    return {
        isOpen,
        expandedGroups,
        hoveredRule,
        toggleSidebar,
        toggleGroupExpansion,
        setRuleHover
    };
};