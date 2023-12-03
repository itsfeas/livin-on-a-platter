import React, { ButtonHTMLAttributes } from 'react';

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const BaseButton: React.FC<BaseButtonProps> = ({ ...buttonProps }) => {
    return (
        <button
            {...buttonProps}
            className="p-4 bg-white border border-gray-300 rounded cursor-pointer"
        >
            {buttonProps.children}
        </button>
    );
};

export default BaseButton;
