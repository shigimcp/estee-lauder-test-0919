import React from 'react';
import { ProductDesc } from './ProductDesc';
import { ProductImage } from './ProductImage';
import { ProductPurchase } from './ProductPurchase';

import './styles/product.scss';

export const Product = ({ productData: { imgURL, category, name, description, ratingURL, features, shade, price } }) =>
    <main class="bodyContainer">
        <div class="bodyContainer__hero">
            <ProductImage image={imgURL} />
        </div>
        <div class="bodyContainer__info">
            <ProductDesc
                category={category}
                name={name}
                description={description}
                rating={ratingURL}
                features={features}
                shade={shade} />
            <hr />
            <ProductPurchase price={price} />
        </div>
    </main>
