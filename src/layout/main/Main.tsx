import AnimatedBackground from "components/background/AnimatedBackground";
import GameCanvas, { GameCanvasProps } from "components/canvas/GameCanvas";
import Header from "layout/header/Header";

interface MainProps extends GameCanvasProps {
    canvas?: React.ReactNode;
 }

const Main: React.FC<MainProps> = ({ sidebarIsOpen, canvasReady, resizeCanvas }) => {
    return (
        <>
            <Header className="flex lg:hidden fixed top-0 z-50 px-4 py-2 justify-center bg-black/90 backdrop-blur-xl w-screen" />
            <AnimatedBackground />
            <GameCanvas sidebarIsOpen={sidebarIsOpen} canvasReady={canvasReady} resizeCanvas={resizeCanvas} />
        </>
    );
};

export default Main;