import Engine from "@game/core/Engine";
import getParticleGroupsView from "@game/transformer/particleGroupsViewTransformer";
import { ParticleGroupContainerViewProps } from 'components/particle-group/ParticleGroup';
import { useCallback, useState } from 'react';

export const useParticleSimulation = () => {
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
        isPlaying,
        handleReset,
        handleGroupChange,
        togglePlayPause,
        engine,
        canvasReady
    };
};