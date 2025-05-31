import { useState, useCallback } from 'react';

const useUIState = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [expandedGroups, setExpandedGroups] = useState<Set<number>>(new Set([]));

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

    return {
        isOpen,
        expandedGroups,
        toggleSidebar,
        toggleGroupExpansion,
    };
};

export default useUIState;