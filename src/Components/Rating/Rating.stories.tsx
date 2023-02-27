import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import  { Rating } from "./Rating";

export default {
    title: 'Example/Rating',
    component: Rating
}

export const RatingStories = () => <Rating value={1} changeRating={()=>{}}/>