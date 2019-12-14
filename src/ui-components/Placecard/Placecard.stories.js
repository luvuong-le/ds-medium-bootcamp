import React from 'react';
import Placecard from './Placecard';
import { unit } from "../../style-constants";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default { title: 'Placecard', decorators: [withKnobs] };

export const example = () => <div style={{display: 'inline-block', width: unit(13.5)}}>
    <Placecard>{text("Content", "This is my card Ian!")}</Placecard>
</div>;