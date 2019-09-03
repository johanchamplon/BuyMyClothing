import { createSelector } from 'reselect';


const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const cartSelectorHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce((accumalatedQuantity, CartItem) =>
            accumalatedQuantity + CartItem.quantity, 0)
)