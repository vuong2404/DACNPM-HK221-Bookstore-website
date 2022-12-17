import { REMOVE_CART_ITEM, SELECT_ALL_CART_ITEM, SELECT_CART_ITEM, SET_CART, UPDATE_CART } from './constants';
import { addresses, products } from './fakeData';

const initState = {
    cart: { books: [] },
};

const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case SELECT_ALL_CART_ITEM: {
            let newCart = state.cart
            newCart.books = newCart.books.map((item) => ({ ...item, isSelected: action.payload }));
            return {
                ...state,
                cart: newCart,
            };
        }
        case SELECT_CART_ITEM: {
            let newCart = state.cart;
            console.log(newCart)
            let i = newCart.books.findIndex((item) => item.bookId === action.payload);
            console.log(i)
            if (i < 0) return { ...state };
            newCart.books[i].isSelected = !newCart.books[i].isSelected;
            console.log(newCart.books[i]);
            return {
                ...state,
                cart: newCart,
            };
        }

        case REMOVE_CART_ITEM: {
            let newListBooks = state.listBooks.filter((item) => item.product.id !== action.payload);
            console.log(newListBooks);
            return {
                ...state,
                listBooks: newListBooks,
            };
        }

        case UPDATE_CART: {
            return {
                ...state,
            };
        }

        case SET_CART: {
            return {
                ...state,
                cart: action.payload,
            };
        }
        default:
            return new Error('Invalid action!');
    }
};

export { initState };

export default reducer;
