import DefaultLayout from '../../DefaultLayout';
import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import { Table } from 'react-bootstrap';

import MyButton from '~/components/Button';
import Price from '~/components/PriceDisplay/Price';
import { useContext } from 'react';
import { Context } from '../../../../stores';
import { AddressModal, PaymentModal } from '../../component/Modal';

const cx = classNames.bind(styles);
function Payment() {
    const [state, dispatch] = useContext(Context);

    console.log(state, dispatch);

    const products = state.listBooks.filter((item) => item.isSelected);
    const addresses = state.addresses;

    if (products.length === 0) {
        window.location.href = '/cart';
    }
    const totalPrice = products.reduce(
        (res, item) => (item.isSelected ? res + item.product.price * item.count : res),
        0,
    );

    console.log(products);
    return (
        <DefaultLayout>
            <div className={cx('heading')}>
                <h3>Thanh toán</h3>
            </div>

            <div className={cx('wrapper')}>
                <div className={cx('addr-info')}>
                    <h4>Địa chỉ nhận hàng</h4>
                    <div className={(cx('details'), 'd-flex align-items-center my-3 border-bottom py-2')}>
                        <div className="mr-5">
                            <p>
                                Người nhận: <b>{addresses[0].receiverName}</b>
                            </p>
                            <p>
                                Số điện thoại: <b>{addresses[0].phoneNumber}</b>
                            </p>
                        </div>

                        <span className="mx-4 font-weight-normal">
                            {`${addresses[0].addr.details}, 
                                ${addresses[0].addr.ward}, 
                                ${addresses[0].addr.district}, 
                                ${addresses[0].addr.city}`}
                        </span>

                        <div className={(cx('action'), 'ml-auto')}>
                            <MyButton outline disabled className="text-danger opacity-100 font-weight-normal">
                                Mặc định
                            </MyButton>
                            <AddressModal />
                        </div>
                    </div>
                </div>
                <div className={cx('products-info', 'border-bottom py-2')}>
                    <h4>Chi tiết sản phẩm</h4>
                    <Table borderless>
                        <thead className="border-bottom">
                            <tr className="">
                                <th className="py-3 pl-0 font-weight-normal">Tên sách</th>
                                <th className="text-center py-3 font-weight-normal">Đơn giá</th>
                                <th className="text-center py-3 font-weight-normal">Số lượng</th>
                                <th className="text-center py-3 font-weight-normal">Thành tiền</th>
                            </tr>
                        </thead>
                        {products.map((item, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td className="align-baseline p-0 py-3">
                                        <img src={item.product.image} alt="" width={50} className="mr-2" />
                                        <span>{item.product.title}</span>
                                    </td>
                                    <td className="align-baseline text-center py-3">
                                        <Price primary>{item.product.price}</Price>
                                    </td>
                                    <td className="align-baseline text-center py-3">{item.count}</td>
                                    <td className="align-baseline text-center py-3">
                                        <Price primary>{item.product.price * item.count}</Price>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
                <div className={(cx('payemnt-info'), 'd-flex align-items-center my-2 border-bottom py-2')}>
                    <h4>Phương thức thanh toán</h4>
                    <span className="ml-auto font-weight-normal">Thanh toán khi nhận hàng</span>
                    <PaymentModal />
                </div>
                <div className={(cx('cost-info'), 'my-3 border-bottom py-2')}>
                    <div className="d-flex justify-content-end mb-2 py-2">
                        <span className="mr-4 font-weight-normal">Tổng tiền hàng:</span>
                        <Price normal className="font-weight-normal">
                            {totalPrice}
                        </Price>
                    </div>
                    <div className="d-flex justify-content-end mb-2 py-2">
                        <span className="mr-4 font-weight-normal">Phí vận chuyển</span>
                        <Price normal className="font-weight-normal">
                            30000
                        </Price>
                    </div>
                    <div className="d-flex justify-content-end mb-2 py-2">
                        <span className="mr-4 font-weight-normal">Tổng thanh toán:</span>
                        <Price primary large className="font-weight-bold">
                            {totalPrice + 30000}
                        </Price>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <MyButton primary user large className="ml-auto my-3 py-2">
                        Đặt hàng
                    </MyButton>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Payment;
