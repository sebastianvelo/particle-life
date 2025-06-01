export const createGradientFromColors = (colors: string[], angle: number = 135): string => {
    if (colors.length === 0) {
        return "linear-gradient(135deg, #1e293b, #312e81)"; // fallback
    }

    if (colors.length === 1) {
        return colors[0]; // color sólido si solo hay uno
    }

    return `linear-gradient(${angle}deg, ${colors.join(", ")})`;
};

export const gradientStyle = (colors: string[]): React.CSSProperties => ({
    background: `${createGradientFromColors(colors, 0)} 0% 0% / 600% 600%`,
    height: "100vh",
    position: "relative" as const,
    overflow: "hidden" as const,
    transition: ""
});