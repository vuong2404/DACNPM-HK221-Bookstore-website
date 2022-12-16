import { Modal } from 'react-bootstrap';

import '../Modal.scss';

import MyButton from '~/components/Button';
import { useEffect, useState } from 'react';

function CreateAddress({ close, show, callback }) {
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const handleClose = () => close() ;

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {};
        let form = e.target;

        console.log(form);

        data.receiverName = form.address__fullname.value;
        data.phoneNumber = form.address_phoneNumber.value;
        data.city = form.payment__selectCity.value;
        data.district = form.payment__selectDistricts.value;
        data.ward = form.payment__selectWards.value;
        data.specificAddress = form.payment__SpecificAddrr.value;
        data.type = form.set_default.checked;

        if (
            !data.receiverName ||
            !data.phoneNumber ||
            !data.city ||
            !data.district ||
            !data.phoneNumber ||
            !data.specificAddress
        ) {
            alert("Vui lòng điền đầy đủ thông tin!")
        } else callback(data);
    };

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
                <form name="createAddress" onSubmit={(e) => handleSubmit(e)}>
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
                                    name="address__fullname"
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
                                    name="address_phoneNumber"
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
                                    name="payment__selectCity"
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
                                    name="payment__selectDistricts"
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
                                    name="payment__selectWards"
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
                                name="payment__SpecificAddrr"
                                placeholder="phone number"
                                defaultValue=""
                            />
                            <label htmlFor="payment__SpecificAddr">Địa chỉ cụ thể</label>
                        </div>

                        <label className="d-flex align-items-center py-2 my-2">
                            <input type={'checkbox'} defaultChecked={false} className="mr-2" name="set_default" />
                            Đặt làm địa chỉ mặt định
                        </label>
                    </Modal.Body>
                    <Modal.Footer>
                        <MyButton outline type="button" className="border font-weight-normal px-5" onClick={handleClose}>
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
