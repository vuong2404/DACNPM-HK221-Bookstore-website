import { REMOVE_CART_ITEM, SELECT_ALL_CART_ITEM, SELECT_CART_ITEM, UPDATE_CART } from './constants';

export const products = [
    {
        product: {
            id: 'BOOK1',
            title: "Sophie's World (Sofies verden)",
            price: 160000,
        },
        count: 1,
        isSelected: false,
    },
    {
        product: {
            id: 'BOOK2',
            title: 'The Name of the Rose (Il Nome della Rosa)',
            price: 150000,
        },
        count: 1,
        isSelected: false,
    },
    {
        product: {
            id: 'BOOK4',
            title: "Sophie's World (Sofies verden)",
            price: 170000,
        },
        count: 2,
        isSelected: false,
    },
    {
        product: {
            id: 'BOOK3',
            title: 'How the Steel Was Tempered (Как закалялась сталь))',
            price: 160000,
        },
        count: 3,
        isSelected: false,
    },
];

const initState = {
    listBooks: products,
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
                count: action.payload,
            };
        }
        default:
            return new Error('Invalid action!');
    }
};

export { initState };

export default reducer;
