import React from 'react';
import { SBox } from './Box.sc';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BoxProps = any;

export const Box: React.FC<BoxProps> = ({ tag = 'div', children, ...props }) => {
    return (
        <SBox as={tag} {...props}>
            {children}
        </SBox>
    );
};
