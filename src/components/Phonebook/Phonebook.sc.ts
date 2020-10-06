import styled from 'styled-components';
import { SBox } from '../_shared/Box/Box.sc';

export const SPhonebook = styled.main`
    --color-big-stone: #122236;
    --color-big-stone-pale: rgba(18, 34, 54, 0.1);
    --color-regent-gray: #82909e;
    --color-mystic: #e4e9f0;

    margin: 60px auto 0;
    width: 320px;

    > ${SBox} {
        margin-top: 20px;

        &:first-child {
            margin-top: 0;
        }

        &:empty {
            margin-top: 0;
        }
    }
`;

export const SHeading = styled.h3`
    margin: 0 0 20px;

    &.enter {
        animation: 0.5s backInLeft ease;
    }
`;
