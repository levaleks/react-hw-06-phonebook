import styled from 'styled-components';

export const SNotify = styled.div`
    position: fixed;
    padding: 10px 20px;
    top: 50px;
    right: 10px;
    background: firebrick;
    text-align: left;
    color: white;
    font-weight: 100;

    &.enter {
        animation: 0.25s bounceInRight ease;
    }

    &.exit {
        animation: 0.25s bounceOutRight ease;
    }
`;
