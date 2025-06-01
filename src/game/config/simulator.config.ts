export type SimulatorConfig = {
    particleGroups: {
        size: number;
        length: number;
    };
    particle: {
        generateId: () => string;
        minSize: number;
    };
    canvas: {
        id: string;
        width: number;
        height: number;
        bgColor: string;
    };
}

const config: SimulatorConfig = {
    particleGroups: {
        size: 3,
        length: 800
    },
    particle: {
        generateId: () => (Date.now() * 100).toString(16),
        minSize: 0.0
    },
    canvas: {
        id: "life",
        width: window.innerWidth > 500 ? window.innerWidth * 0.5 : window.innerWidth,
        height: window.innerWidth > 500 ? window.innerHeight * 0.8 : window.innerHeight * 0.9,
        bgColor: "rgba(0, 0, 0, 0.8)"
    }
};

export default config;