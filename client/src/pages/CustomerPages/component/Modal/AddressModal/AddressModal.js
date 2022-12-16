import { createContext, useContext, useEffect, useState } from 'react';

import '../Modal.scss';

import MyButton from '~/components/Button';
import CreateAddress from './CreateAddr';
import SelectAddr from './SelectAddr';
import { Context } from '~/stores';

export const AddrModalContext = createContext();

function AddressModaL({addresses}) {
    const [state, dispatch] = useContext(Context);
    const [modalShow, setModalShow] = useState(1);
    
    // modalShow = 1 => show Select Address Modal
    // modalShow = 2 => show Create new Address Modal

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const value = {
        show,
        setShow,
        handleClose,
        handleShow,
        modalShow,
        setModalShow,
    };

    return (
        <AddrModalContext.Provider value={value} backdrop="static">
            <MyButton className="text-primary" onClick={handleShow}>
                Thay đổi
            </MyButton>
            {(modalShow === 1 && <SelectAddr />) || (modalShow === 2 && <CreateAddress />)}
        </AddrModalContext.Provider>
    );
}

export default AddressModaL;
