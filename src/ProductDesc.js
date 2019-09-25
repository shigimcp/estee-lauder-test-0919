import React from 'react';

import caret from './images/caret.png';

export const ProductDesc = ({ category, name, description, rating, features, shade }) =>
    <section class="prodDesc">
        <h4 class="prodDesc__cat">{category}</h4>
        <h2 class="prodDesc__name">{name}</h2>
        <p class="prodDesc__desc">{description}</p>
        <figure class="prodDesc__rating">
{/* 
            <img class="prodDesc__rating__stars" src={rating} alt="Product Rating" />
            <img class="prodDesc__rating__caret" src={caret} alt="View All Ratings" />
 */}
            <span class="prodDesc__rating_stars">&#9733;&#9733;&#9733;&#9733;<span class="prodDesc__rating_stars-lt">&#9733;</span></span> (102) &#9662;
        </figure>

        <section class="prodDesc__prodDetail">
            <div class="prodDesc__detail">
                <h4 class="prodDesc__detail-hedLf">Benefits</h4>
                <p class="prodDesc__detail-featLf">{features.benefits}</p>
            </div>
            <div class="prodDesc__detail">
                <h4 class="prodDesc__detail-hedRt">Finish</h4>
                <p class="prodDesc__detail-featRt">{features.finish}</p>
            </div>
            <div class="prodDesc__detail">
                <h4 class="prodDesc__detail-hedLf">Coverage</h4>
                <p class="prodDesc__detail-featLf">{features.coverage}</p>
            </div>
            <div class="prodDesc__detail">
                {/* <h4 class="prodDesc__detail-hedRt">Key Ingredients</h4> */}
                <h4 class="prodDesc__detail-hedRt">Key ingredients</h4>
                <p class="prodDesc__detail-featRt">{features.keyIngredients} &nbsp;<a class="prodDesc__detail-link" href="http://www.clinique.com">More</a></p>
            </div>
        </section>

        <section class="prodDesc__shade">
            <span>{shade.name}</span>
            <div class="prodDesc__shade-color" style={{ background: shade.color }}></div>
        </section>
    </section>
