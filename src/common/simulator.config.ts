const config = {
    particleGroups: {
        size: 4,
        length: 900
    },
    particle: {
        generateId: () => (Date.now() * 100).toString(16),
        minSize: 0.8
    },
    canvas: {
        id: "life",
        width: window.innerWidth > 500 ? window.innerWidth * 0.5 : window.innerWidth,
        height: window.innerWidth > 500 ? window.innerHeight * 0.8 : window.innerHeight * 0.9,
        bgColor: "#000"
    }
};

export default config;