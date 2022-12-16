import { REMOVE_CART_ITEM, SELECT_ALL_CART_ITEM, SELECT_CART_ITEM, SET_CART, UPDATE_CART } from './constants';
import { addresses, products } from './fakeData';

const initState = {
    cart: {books: []},
    user: {
        id: 1000001,
        fullname: 'Nguyễn Văn Anh',
    }
};

const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case SELECT_ALL_CART_ITEM: {
            let newListBooks = state.listBooks.map((item) => ({ ...item, isSelected: action.payload }));
            return {
                ...state,
                listBooks: newListBooks,
            };
        }
        case SELECT_CART_ITEM: {
            let newListBooks = state.listBooks;
            let i = newListBooks.findIndex((item) => item.product.id === action.payload);
            newListBooks[i].isSelected = !newListBooks[i].isSelected;
            return {
                ...state,
                listBooks: newListBooks,
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
                cart: action.payload
            };
        }
        default:
            return new Error('Invalid action!');
    }
};

export { initState };

export default reducer;
