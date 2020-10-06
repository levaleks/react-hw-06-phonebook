import styled from 'styled-components';
import { getSBox } from '../../_shared/Box/Box.sc';

export const SContactsList = styled(getSBox('ul'))`
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    background: 0;
`;

export const SListWrapper = styled.div`
    margin-top: 20px;

    &.enter {
        animation: 0.25s fadeIn ease;
    }

    &.exit {
        animation: 0.25s fadeOut ease;
    }
`;
