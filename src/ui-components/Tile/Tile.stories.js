import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'
import { styleConstants, unit } from '../../style-constants'

import React from 'react'
import Tile from './Tile'

export default { title: 'Tile', decorators: [withKnobs] }

export const example = () => (
  <div style={{ display: 'inline-block', width: unit(13.5) }}>
    <Tile
      categoryName={text('Category Name', 'Technology')}
      isPopularTopic="true"
      title={text('Title', 'This is how google will collapse')}
      subTitle={text('Sub-Title', 'Reporting on Googles future')}
      authorName={text('Author Name', 'Tom Kuegler')}
      authorBlog={text('Author Blog', 'Mission.org')}
      datePublished={text('Date Published', '29/05/2018')}
      readingTime={text('Reading Time', '6 min read')}
      isStarred="false"
    ></Tile>
  </div>
)
