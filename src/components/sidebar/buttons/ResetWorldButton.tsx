interface ResetWorldButtonProps {
    handleReset: () => void;
}

const ResetWorldButton = (props: ResetWorldButtonProps) => {
    return (
        <button className="bg-red-500 hover:bg-red-700 font-bold text-xl p-2 w-full rounded cursor-pointer bottom-0 left-0" onClick={props.handleReset}>
            Reset world
        </button>
    );
};

export default ResetWorldButton;