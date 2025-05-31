import Engine from "@game/core/Engine";
import getParticleGroupsView, { ParticleGroupContainerViewProps } from "@game/transformer/particleGroupsViewTransformer";
import { useCallback, useState } from 'react';

const useParticleSimulation = () => {
    const [particleGroups, setParticleGroups] = useState<ParticleGroupContainerViewProps[]>([]);
    const [isPlaying, setIsPlaying] = useState(true);
    const [engine] = useState(new Engine());

    const initializeGroups = useCallback(() => {
        if (engine.getIsInitialized()) {
            setParticleGroups([...getParticleGroupsView(engine)]);
        }
    }, []);

    const handleReset = useCallback(() => {
        if (engine.getIsInitialized()) {
            engine.restart();
            setParticleGroups([...getParticleGroupsView(engine)]);
        }
    }, []);

    const handleGroupChange = useCallback(() => {
        if (engine.getIsInitialized()) {
            setParticleGroups([...getParticleGroupsView(engine)]);
        }
    }, []);

    const togglePlayPause = useCallback(() => {
        if (engine.getIsInitialized()) {
            engine.toggleStatus();
            setIsPlaying(engine.getStatus());
        }
    }, []);

    const updateGroupRule = useCallback((fromColor: string, toColor: string, newValue: number) => {
        const val = engine.updateGroupRule(fromColor, toColor, newValue);
        setParticleGroups([...getParticleGroupsView(engine)]);
        return val;
    }, []);

    const getColors = useCallback(() => { return engine.getGroupManager().getColors(); }, []);

    const canvasReady = useCallback((canvasRef: React.RefObject<HTMLCanvasElement>) => {
        if (canvasRef.current) {
            engine.setCanvas(canvasRef.current);
            engine.start();
            initializeGroups();
        }

        return () => {
            engine.stop();
        };
    }, [engine, initializeGroups]);

    return {
        particleGroups,
        updateGroupRule,
        isPlaying,
        handleReset,
        handleGroupChange,
        togglePlayPause,
        engine,
        canvasReady,
        getColors
    };
};

export default useParticleSimulation;