import React, { ChangeEventHandler, HTMLAttributes, InputHTMLAttributes } from 'react';
import { SInput, SLabel, SText } from './Input.sc';

export type InputProps = {
    label?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
    name?: string;
    type?: string;
    labelProps?: HTMLAttributes<HTMLLabelElement>;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
};

export const Input: React.FC<InputProps> = ({
    label,
    value,
    disabled,
    onChange,
    name,
    type,
    labelProps,
    inputProps,
}) => {
    return (
        <SLabel {...labelProps}>
            {label && <SText>{label}</SText>}
            <SInput value={value} onChange={onChange} disabled={disabled} name={name} type={type} {...inputProps} />
        </SLabel>
    );
};
