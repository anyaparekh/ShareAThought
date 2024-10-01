import React from 'react';

interface ButtonProps {
    title: string;
    backgroundColor?: string;
    textColor?: string;
}

const Button: React.FC<ButtonProps> = ({ 
    title,
    backgroundColor = '#342A21',
    textColor = '#F1E0C5',
}) => {
    /*'bg-[#342A21] */
    return (
        <button className={`bg-[${backgroundColor}] text-[${textColor}]`}> 
            {title}
        </button>
    );
}

export default Button;