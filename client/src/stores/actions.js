import {SET_CART, REMOVE_CART_ITEM, SELECT_ALL_CART_ITEM, SELECT_CART_ITEM, UPDATE_CART } from './constants';

export const selectAllProducts = (payload) => ({
    type: SELECT_ALL_CART_ITEM,
    payload,
});

export const selectItem = (payload) => ({
    type: SELECT_CART_ITEM,
    payload,
});

export const updateCart = (payload) => ({
    type: UPDATE_CART,
    payload,
});

export const removeCartItem = (payload) => ({
    type: REMOVE_CART_ITEM,
    payload,
});

export const setCart = (payload) => ({
    type: SET_CART,
    payload,
});

