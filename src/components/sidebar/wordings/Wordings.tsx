export const InfoContainer = () => {
    return (
        <div className="text-justify space-y-4 px-4">
            <p className="text-white text-lg font-medium">
                Below you can configure the interactions between the particles: whether they attract <span role="img" aria-label="magnet">🧲</span> or repel <span role="img" aria-label="repel">❌</span>.
            </p>
            <p className="text-white text-lg font-medium">Enjoy the beautiful patterns that the particles form! 🚀</p>
        </div>
    );
};

export const NoteContainer = () => {
    return (
        <p className="text-white text-sm font-medium">Note: The rules are generated randomly.</p>
    );
};