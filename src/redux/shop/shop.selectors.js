import { createSelector } from 'reselect';


const selectorShop = state => state.shop;

export const selectorCollections = createSelector(
    [selectorShop],
    shop => shop.collections
);