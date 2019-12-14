import React from 'react';
import { storiesOf } from '@storybook/react';
import Color from '../ui-components/Colors/Color';
import { css, cx } from 'emotion';

const colorContainerStyles = css`
    display: flex;
`;

storiesOf('Design Tokens', module).add('Colors', () => (
    <>
        <h1>Colors</h1>
        <p>Basic Colors</p>
        <hr />
        <div className={cx(colorContainerStyles)}>
            <Color color={'grey'} name={'Grey'}></Color>
            <Color color={'green'} name={'Green'}></Color>
            <Color color={'#000000'} name={'Black'}></Color>
            <Color color={'#ecedbe'} name={'Yellow'}></Color>
            <Color color={'#b392b0'} name={'Violet'}></Color>
        </div>
    </>
));