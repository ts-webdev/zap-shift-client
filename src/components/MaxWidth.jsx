
const MaxWidth = ({children, paddingY}) => {
    return (
        <div className={`max-w-[1500px] mx-auto py-${paddingY ? paddingY : 0}`}>
            {children}
        </div>
    );
};

export default MaxWidth;