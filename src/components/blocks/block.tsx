import { HTMLAttributes } from "react";

interface BlockProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    padding?: boolean,
    minHeightScreen?: boolean,
}

const Block: React.FC<BlockProps> = ({
    children,
    className="",
    padding = true,
    minHeightScreen = false,
    ...props
}) => {
    return (
        <div className={`flex items-center p-12 ${minHeightScreen ? "h-screen min-h-screen" : "" } ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Block;