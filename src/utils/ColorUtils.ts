export const createGradientFromColors = (colors: string[], angle: number = 135): string => {
    if (colors.length === 0) {
        return "linear-gradient(135deg, #1e293b, #312e81)"; // fallback
    }

    if (colors.length === 1) {
        return colors[0]; // color sólido si solo hay uno
    }

    // Calcular posiciones equidistantes para cada color
    const colorStops = colors.map((color, index) => {
        const position = (index / (colors.length - 1)) * 100;
        return `${color} ${position}%`;
    }).join(", ");

    return `radial-gradient(ellipse at top left, ${colorStops})`;
};