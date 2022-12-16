import { useEffect, useReducer } from 'react';
import Context from './Context';

import reducer, { initState } from './cartReducer';
import { getCartAPI } from '~/api/CartAPI';
import { setCart } from './actions';
function Provider({ children }) {
    useEffect(() => {
        getCartAPI().then((res) => dispatch(setCart(res)));
      }, []);
    
    const [state, dispatch] = useReducer(reducer, initState);
    return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
}

export default Provider;
