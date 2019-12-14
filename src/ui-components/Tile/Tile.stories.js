import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'

import React from 'react'
import Tile from './Tile'
import { unit } from '../../style-constants'

export default { title: 'Tile', decorators: [withKnobs] }

export const example = () => (
  <div style={{ display: 'inline-block', width: unit(13.5) }}>
    <Tile>{text('Content', 'This is my card Ian!')}</Tile>
  </div>
)
