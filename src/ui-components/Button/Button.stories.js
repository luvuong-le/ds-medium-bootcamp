import React from 'react';
import Button from './Button';
import SecondaryButton from './SecondaryButton';
import { styleConstants } from '../../style-constants';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { css, cx } from 'emotion';


export default { title: 'Buttons', decorators: [withKnobs] };

export const Primary = () => (
    <Button>{text('Content', 'Primary Button')}</Button>
)

export const Secondary = () => (
    <SecondaryButton>{text('Content', 'Secondary Button')}</SecondaryButton>
)