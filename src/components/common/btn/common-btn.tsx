import React, { ButtonHTMLAttributes } from 'react';

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonType?: "submit" | "cancel" | "active" | "general",
}

const BaseButton: React.FC<BaseButtonProps> = ({ buttonType, ...buttonProps }) => {
    const buttonStyle = (buttonType: string | null | undefined) => {
        switch (buttonType) {
            case "submit":
                return "bg-green-500 hover:bg-green-700 text-white";
            case "cancel":
                return "bg-red-500 hover:bg-red-700 text-white";
            case "active":
                return "bg-blue-500 hover:bg-blue-700 text-white";
            default:
                return "bg-white hover:bg-gray-100 text-gray-800";
        }
    };
    return (
        <button
            className={`p-4 ${buttonStyle(buttonType)} border border-gray-300 rounded cursor-pointer`}
            {...buttonProps}
        >
            {buttonProps.children}
        </button>
    );
};

export default BaseButton;
