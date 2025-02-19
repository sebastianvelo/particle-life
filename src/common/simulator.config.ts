const config = {
    particleGroups: {
        size: 4,
        length: 700
    },
    particle: {
        generateId: () => (Date.now() * 100).toString(16),
        minSize: 0.0
    },
    canvas: {
        id: "life",
        width: window.innerWidth > 500 ? window.innerWidth * 0.5 : window.innerWidth,
        height: window.innerHeight * 0.8,
        bgColor: "#000"
    }
};

export default config;