import React from 'react';
import { styleConstants } from "../../style-constants";
import { css, cx } from 'emotion';

export default function (props) {
    const colorStyle = css`
        text-align: center;
        font-family: "Arial";
    `;
    
    const colorBlockStyle = css`
        background-color: ${props.color};
        width: 150px;
        height: 200px;
        border: 1px solid grey;
        margin: 1em;
    `;
    
    const container = css`
        box-shadow: ${styleConstants.boxShadows.default};
        border-radius: ${styleConstants.borderRadiuses.default};
    `;

    return (<div>
        
        <div>
            <div className={cx(colorStyle)}>
                <div className={cx(colorBlockStyle)}></div>
                <h3 className="colorName">{props.name}</h3>
                <h4 className="colorHex">{props.color}</h4>
            </div>
        </div>
        {props.children}
    </div>)
}