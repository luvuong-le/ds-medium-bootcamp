import { css, cx } from 'emotion'

import React from 'react'
import { styleConstants } from '../../style-constants'

const styles = {
  responseCard: css`
    padding: 1rem;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.09);
    border-radius: 3px;
    line-height: 1.6;
    font-weight: light;

    .header {
    }

    .content {
      padding: 1rem;
    }

    .footer {
      display: flex;
      justify-content: space-between;
    }

    img {
      border-radius: 100%;
      height: 30px;
    }
  `,
}

export const Response = ({
  authorName = 'John Smith',
  authorProfileSrc = 'https://placehold.it/50x50',
  responseText = '',
}) => (
  <div className={cx(styles.responseCard)}>
    <section className="header">
      <img src={authorProfileSrc} alt={`${authorName}'s profile image`} />
      <p>{authorName}</p>
      <p>Oct 9</p>
    </section>
    <section className="content">{responseText}</section>
    <section className="footer">
      <span className="likes">Likes</span>
      <span className="bookmark">Bookmark</span>
      <span className="more">More</span>
    </section>
  </div>
)
