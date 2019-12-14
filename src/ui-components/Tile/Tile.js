import { css, cx } from 'emotion'

import React from 'react'
import { styleConstants } from '../../style-constants'

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
  `,
  categoryName: css`
    color: ${styleConstants.colors.grey};
    text-decoration: uppercase;
  `,
  popularTopic: css`
    color: ${styleConstants.colors.black};
    text-decoration: uppercase;
  `,
  titlesAndImage: css``,
  title: css``,
  subHeading: css``,
  image: css``,
  footer: css``,
  author: css``,
  authorName: css``,
  datePublished: css``,
  icons: css``,
}

export default function({ className }) {
  return (
    <div className={cx(styles.container)}>
      <div>
        <span className={cx(styles.categoryName)}>TECHNOLOGY</span>
        <span className={cx(styles.popularTopic)}>Popular Topic</span>
      </div>
      <div className={cx(styles.titlesAndImage)}>
        <div className={cx(styles.title)}>
          <div className={cx(styles.heading)}>
            Incognito Mode Won't Keep Your Browsing Private
          </div>
          <div className={cx(styles.subHeading)}>
            For someone that reads books for a living.
          </div>
        </div>
        <div className={cx(styles.image)}></div>
      </div>
      <div className={cx(styles.footer)}>
        <div className={cx(styles.author)}>
          <div className={cx(styles.authorName)}>
            Jenifer Lowe in PS I love You
          </div>
          <div className={cx(styles.datePublished)}>
            08/11/2018 - 4 min read
          </div>
        </div>
        <div className={cx(styles.icons)}></div>
      </div>
    </div>
  )
}
//   <Tile></tile>
