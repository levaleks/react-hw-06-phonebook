import React, { ButtonHTMLAttributes } from 'react';
import { SButton } from './Button.sc';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return <SButton {...props}>{children}</SButton>;
};
