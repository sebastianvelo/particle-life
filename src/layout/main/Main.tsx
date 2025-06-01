import AnimatedBackground from "components/background/AnimatedBackground";
import GameCanvas from "components/canvas/GameCanvas";

interface MainProps {
    sidebarIsOpen: boolean;
    canvasReady: (canvasRef: React.RefObject<HTMLCanvasElement>) => () => void;
}

const Main: React.FC<MainProps> = ({sidebarIsOpen, canvasReady}) => {
    return (
        <>
            <AnimatedBackground />
            <GameCanvas sidebarIsOpen={sidebarIsOpen} canvasReady={canvasReady} />
        </>
    );
};

export default Main;