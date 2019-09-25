import React from 'react';

// import caret from './images/caret.png';
// import minus from './images/minus.png';
// import plus from './images/plus.png';
import caret from './images/caret.svg';
import minus from './images/minus.svg';
import plus from './images/plus.svg';

export const ProductPurchase = ({ price }) =>
    <section class="prodPurch">
        <div class="prodPurch__quantity">
            Quantity <img class="prodPurch__quantity__img" src={minus} alt="Decrease Quantity" /> 1 <img class="prodPurch__quantity__img" src={plus} alt="Increase Quantity" />
        </div>
        <div class="prodPurch__freq">
            One time purchase  <img class="prodPurch__freq__img" src={caret} alt="Select Frequency" />
        </div>
        <div class="prodPurch__price">{price}</div>
        <button class="prodPurch__btn" name="AddToBag">Add To Bag</button>
    </section>