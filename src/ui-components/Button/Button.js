import React from 'react';
import { styleConstants } from "../../style-constants";
import { css, cx } from 'emotion';

const buttonStyles = css`
    border: 1px solid ${styleConstants.colors.grey};
    padding: 1em 0;
    width: 150px;
    background: #ffffff;
    color: ${styleConstants.colors.grey};
    text-align: center;
    border-radius: 10px;
    font-family: ${styleConstants.fontNames.default};
`;

export default function ({ className, children }) {
    return <button className={cx(buttonStyles, className)}>{children}</button>;
}