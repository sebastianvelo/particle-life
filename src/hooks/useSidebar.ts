import { useCallback, useState } from 'react';

const useSidebar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const toggle = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);


    return {
        isOpen,
        toggle,
    };
};

export default useSidebar;