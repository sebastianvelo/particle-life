const AnimatedBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none bg-slate-950/70 backdrop-blur-xl w-full h-full">
            {[...Array(50)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/50 rounded-full animate-pulse"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 3}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default AnimatedBackground;