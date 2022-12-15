import { useContext, useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

import '../Modal.scss';

import MyButton from '~/components/Button';
import { Context } from '../../../../../stores';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AddrModalContext } from './AddressModal';

function CreateAddress() {
    const [state, dispatch] = useContext(Context);
    const addresses = state.addresses;

    const value = useContext(AddrModalContext);
    const { show, setShow, handleClose, modalShow, setModalShow, handleShow } = value;
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const [districts, setDistrict] = useState([]);
    const [wards, setWard] = useState([]);

    const handleChangeCity = (cityName) => {
        if (data.length > 0) {
            let districts = data.find((item) => item.name === cityName).districts;
            setDistrict(districts);
        }
    };

    const handleChangeDistricts = (districtName) => {
        if (districts.length > 0) {
            let district = districts.find((item) => item.name === districtName);
            if (district) {
                setWard(district.wards);
            } else {
                alert('Đã xảy ra lỗi');
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e);
    };
    useEffect(() => {
        fetch('https://provinces.open-api.vn/api/?depth=3%20')
            .then((res) => res.json())
            .then((result) => {
                setData(result);
            })
            .catch((err) => {
                console.log('Error :-S', err);
                setError(err);
            });
    }, []);

    if (error) {
        alert('Đã có lỗi xảy ra');
    } else
        return (
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                contentClassName="modal-height"
                dialogClassName="modal-width"
                backdrop="static"
            >
                <form action="submit" onSubmit={(e) => handleSubmit(e)}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h4>Địa chỉ mới</h4>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex align-items-center  w-100 mr-2">
                            {/* Họ và trrn */}
                            <div className="form-floating my-2 w-100">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address__fullname"
                                    placeholder="Họ và tên"
                                />
                                <label htmlFor="address__fullname">Họ và tên</label>
                            </div>

                            {/* Số điện thoại */}
                            <div className="form-floating my-2 w-100 ml-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address_phoneNumber"
                                    placeholder="Họ và tên"
                                />
                                <label htmlFor="address_phoneNumber">Số điện thoại</label>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            {/* Chọn tỉnh */}
                            <div className="form-floating w-100">
                                <select
                                    className="form-select"
                                    id="payment__selectCity"
                                    aria-label="Floating label select example"
                                    defaultValue={'----'}
                                    disabled={data.length <= 0}
                                    onChange={(e) => handleChangeCity(e.target.value)}
                                >
                                    <option>----</option>
                                    {data.map((item, index) => (
                                        <option key={index}>{item.name}</option>
                                    ))}
                                </select>
                                <label htmlFor="payment__selectCity">Tỉnh (thành phố)</label>
                            </div>

                            {/* Chọn quận / huyện */}
                            <div className="form-floating mx-2 w-100">
                                <select
                                    className="form-select"
                                    id="payment__selectDistricts"
                                    aria-label="Floating label select example"
                                    defaultValue={'----'}
                                    disabled={districts.length <= 0}
                                    onChange={(e) => handleChangeDistricts(e.target.value)}
                                >
                                    <option>----</option>
                                    {districts &&
                                        districts.map((item, index) => <option key={index}>{item.name}</option>)}
                                </select>
                                <label htmlFor="payment__selectDistricts">Quận (Huyện)</label>
                            </div>

                            {/* Chọn phường/ xã */}
                            <div className="form-floating w-100">
                                <select
                                    className={`form-select  ${wards.length > 0 ? '' : 'opacity-75'}`}
                                    id="payment__selectWards"
                                    aria-label="Floating label select example"
                                    disabled={wards.length <= 0}
                                    defaultValue={'----'}
                                    onChange={() => {}}
                                >
                                    <option>----</option>
                                    {wards && wards.map((item, index) => <option key={index}>{item.name}</option>)}
                                </select>
                                <label htmlFor="payment__selectWards">Phường (xã)</label>
                            </div>
                        </div>
                        {/*Nhập địa chỉ cụ thể */}
                        <div className="form-floating my-2">
                            <input
                                type="text"
                                className="form-control"
                                id="payment__SpecificAddrr"
                                placeholder="phone number"
                                defaultValue=""
                            />
                            <label htmlFor="payment__SpecificAddr">Địa chỉ cụ thể</label>
                        </div>

                        <label className="d-flex align-items-center py-2 my-2">
                            <input type={'checkbox'} defaultChecked={false} className="mr-2" />
                            Đặt làm địa chỉ mặt định
                        </label>
                    </Modal.Body>
                    <Modal.Footer>
                        <MyButton outline className="border font-weight-normal px-5" onClick={() => setModalShow(1)}>
                            Trở về
                        </MyButton>
                        <button type="submit" className="btn btn-danger">
                            Hoàn thành
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
}

export default CreateAddress;
