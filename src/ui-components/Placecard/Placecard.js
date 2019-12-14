import React from 'react';
import { styleConstants } from "../../style-constants";
import { css, cx } from 'emotion';

const styles = {
    container: css`
        display: flex;
        flex-direction: column;
        width:450px;
      
    `,
    
    popularTopic: css`
        color: ${styleConstants.colors.black};
        text-decoration: uppercase;
    `,
    titlesAndImage: css` display:flex;`,
    title: css`
    
    `,
    heading: css`
    color: ${styleConstants.colors.black};
    font-size:${styleConstants.fontSizes.t100};
    font-weight:${styleConstants.fontWeights.bold};
    `,
    image: css` margin-left:50px;width:80px; height:80px; background-color:blue;`,
    footer: css``,
    author: css`display:flex;`,
    authorName: css`color: ${styleConstants.colors.grey}; font-size:${styleConstants.fontSizes.t100};`,
    datePublished: css`margin-left:5px; color: ${styleConstants.colors.black}; font-size:${styleConstants.fontSizes.t100};`,
    icons: css``,
};

export default function ({ className }) {
    return (
        <div className={cx(styles.container)}>
           
            <div className={cx(styles.titlesAndImage)}>
                <div className={cx(styles.title)}>
                    <div className={cx(styles.heading)}>The Golden Rule of Relationship</div>
                    <div className={cx(styles.author)}>
                    <div className={cx(styles.authorName)}>Barry Davret</div>
                    <div className={cx(styles.datePublished)}> . 4 min read</div>
                </div>            
                                   
                                   </div>
                <div className={cx(styles.image)}>
                </div>
            </div>
            <div className={cx(styles.footer)}>
                
            </div>
        </div>
    );
}
//   <Tile></tile>
