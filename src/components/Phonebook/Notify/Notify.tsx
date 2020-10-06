import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { createPortal } from 'react-dom';
import { SNotify } from './Notify.sc';

export type NotifyProps = {
    isShowing: boolean;
};

export const Plate: React.FC = ({ children }) => {
    return createPortal(<SNotify>{children}</SNotify>, document.body);
};

export const Notify: React.FC<NotifyProps> = ({ isShowing, children }) => {
    return (
        <CSSTransition in={isShowing} timeout={200} mountOnEnter unmountOnExit>
            <Plate>{children}</Plate>
        </CSSTransition>
    );
};
