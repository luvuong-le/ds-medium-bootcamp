import React from 'react';
import { styleConstants } from "../../style-constants";
import { css, cx } from 'emotion';

const styles = {
    container: css`
        border: 1px solid lightgrey;
        min-width: 450px;
        padding: ${styleConstants.paddings.small};
        display: flex;
        flex-direction: column;
        font-family: ${styleConstants.fontNames.default};
    `,
    categoryName: css`
        display: inline-block;
        font-size: ${styleConstants.fontSizes.t080};
        color: ${styleConstants.colors.grey};
        text-decoration: uppercase;
    `,
    popularTopic: css`
        display: inline-block;
        font-size: ${styleConstants.fontSizes.t080};
        color: ${styleConstants.colors.black};
        text-decoration: uppercase;
    `,
    titlesAndImage: css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 8px 0;
        color: ${styleConstants.colors.black};
        margin-top: 8px;
    `,
    title: css``,
    subHeading: css`
        color: ${styleConstants.colors.grey};
        font-size: ${styleConstants.fontSizes.t090};
        margin-top: 8px;
    `,
    image: css`
        width: 80px;
        height: 80px;
        background-color: lightblue;
    `,
    footer: css`
        display: flex;
        flex-direction: row;
        font-size: ${styleConstants.fontSizes.t080};
    `,
    author: css``,
    authorName: css`
        color: ${styleConstants.colors.black};
    `,
    nameDateSeparator: css`
        color: ${styleConstants.colors.grey};
    `,
    datePublished: css`
        color: ${styleConstants.colors.grey};
    `,
    icons: css`
        display: flex;
        flex-direction: row;
    `,
    icon: css`
        width: 24px;
        height: 24px;
        background-color: lightpurple;
        margin: 0 12px;
    `,
};

export default function ({ categoryName, isPopularTopic, title, subTitle, authorName, authorBlog, datePublished, readingTime, isStarred }) {
    return (
        <div className={cx(styles.container)}>
            <div classname={cx(styles.header)}>
                <span className={cx(styles.categoryName)}>{categoryName}</span>
                &nbsp;<span className={cx(styles.popularTopic)}>Popular topic</span>
            </div>
            <div className={cx(styles.titlesAndImage)}>
                <div className={cx(styles.title)}>
                    <div className={cx(styles.heading)}>{title}</div>
                    <div className={cx(styles.subHeading)}>{subTitle}</div>
                </div>
                <div className={cx(styles.image)}>
                </div>
            </div>
            <div className={cx(styles.footer)}>
                <div className={cx(styles.author)}>
                    <div className={cx(styles.authorName)}>
                        <span>{authorName}&nbsp;</span><span className={cx(styles.nameDateSeparator)}>in</span>&nbsp;<span className={cx(styles.authorBlog)}>{authorBlog}</span>
                    </div>
                    <div className={cx(styles.datePublished)}>08/11/2018 - 4 min read</div>
                </div>
                <div className={cx(styles.icons)}>
                    <div className={cx(styles.icon)}></div>
                    <div className={cx(styles.icon)}></div>
                </div>
            </div>
        </div>
    );
}
//   <Tile></tile>
