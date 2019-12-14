import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'

import React from 'react'
import { Response } from './Response'

export default { title: 'Response', decorators: [withKnobs] }

export const example = () => (
  <div className="response">
    <Response
      authorName={text('authorName', 'Yeah boy!')}
      responseText={text(
        'responseText',
        `
        What a pity — I could not dislike this article. So I would have to explain mistake you made, and gently ask you to extend the article this a proper solution.
        What mistake you made?
        You used a wrong tool to for a case. That’s in short. Look like you have a right intention in the beginning, and even named this article as “Media Query Breakpoints”, however the rest was just JavaScript.
        Why JavaScript is a wrong tool?
        JavaScript is not, there is just MUCH better tool for that — obviously MediaQueries.
        Instead of on-resize handler you may setup event handler to notify you when the active breakpoint is
        `
      )}
      authorProfileSrc={text(
        'authorProfileSrc',
        'https://avatars3.githubusercontent.com/u/1672703?s=64&v=4'
      )}
    />
  </div>
)
