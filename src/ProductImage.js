import React from 'react';

export const ProductImage = ({ image }) =>
    <figure class="prodImg">
        <img src={image} alt="Product" class="prodImg__img" />
    </figure>
