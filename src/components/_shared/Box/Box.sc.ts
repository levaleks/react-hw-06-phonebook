import styled, { StyledComponent } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getSBox = (tag: string): StyledComponent<any, any> => styled[tag]`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 10px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.75);
    border-radius: 2px;
    background: white;

    > * {
        margin-top: 10px;

        &:first-child {
            margin-top: 0;
        }
    }
`;

export const SBox = getSBox('div');
