import classNames from 'classnames/bind';
import { ccAmex } from 'fontawesome';
import styles from './OrderHistoryItem.module.scss';
import OrderHistoryProduct from './OrderHistoryProduct';
import { useContext } from 'react';
import { Context } from '../../../../stores';

const cx = classNames.bind(styles);

const Product = [
    {
        image: 'https://cf.shopee.vn/file/f8af2955a6bb8f5699ce26577fd26cb2',
        name: 'Người bán hàng vĩ đại nhất thế giới1',
        author: 'OG. Mardino1',
        price: '100000',
        amount: '6',
    },
    {
        image: 'https://cf.shopee.vn/file/f8af2955a6bb8f5699ce26577fd26cb2',
        name: 'Người bán hàng vĩ đại nhất thế giới2',
        author: 'OG. Mardino2',
        price: '200000',
        amount: '6',
    },
    {
        image: 'https://cf.shopee.vn/file/f8af2955a6bb8f5699ce26577fd26cb2',
        name: 'Người bán hàng vĩ đại nhất thế giới3',
        author: 'OG. Mardino3',
        price: '200000',
        amount: '3',
    },
    {
        image: 'https://cf.shopee.vn/file/f8af2955a6bb8f5699ce26577fd26cb2',
        name: 'Người bán hàng vĩ đại nhất thế giới4',
        author: 'OG. Mardino4',
        price: '250000',
        amount: '4',
    },
    {
        image: 'https://cf.shopee.vn/file/f8af2955a6bb8f5699ce26577fd26cb2',
        name: 'Người bán hàng vĩ đại nhất thế giới5',
        author: 'OG. Mardino5',
        price: '150000',
        amount: '9',
    },
    {
        image: 'https://cf.shopee.vn/file/f8af2955a6bb8f5699ce26577fd26cb2',
        name: 'Người bán hàng vĩ đại nhất thế giới6',
        author: 'OG. Mardino6',
        price: '294000',
        amount: '7',
    },
    {
        image: 'https://cf.shopee.vn/file/f8af2955a6bb8f5699ce26577fd26cb2',
        name: 'Người bán hàng vĩ đại nhất thế giới7',
        author: 'OG. Mardino7',
        price: '100000',
        amount: '5',
    },
    {
        image: 'https://cf.shopee.vn/file/f8af2955a6bb8f5699ce26577fd26cb2',
        name: 'Người bán hàng vĩ đại nhất thế giới8',
        author: 'OG. Mardino8',
        price: '300000',
        amount: '1',
    },
    {
        image: 'https://cf.shopee.vn/file/f8af2955a6bb8f5699ce26577fd26cb2',
        name: 'Người bán hàng vĩ đại nhất thế giới9',
        author: 'OG. Mardino9',
        price: '213000',
        amount: '3',
    },
    {
        image: 'https://cf.shopee.vn/file/f8af2955a6bb8f5699ce26577fd26cb2',
        name: 'Người bán hàng vĩ đại nhất thế giới10',
        author: 'OG. Mardino10',
        price: '206000',
        amount: '4',
    },
];

function OrderHistoryItem(props) {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const c = Math.floor(Math.random() * 10);
    return (
        <div className={cx('container')}>
            <div className={cx('item1')}>
                <div className={cx('item1-1')}>Mã đơn hàng: {props.orderID}</div>
                <div className={cx('item1-2')}>Mã đơn vị vận chuyển: {props.supID}</div>
            </div>
            <div className={cx('item2')}>
                <div className={cx('item2-1')}>Đã đặt ngày: {props.time}</div>
                <div className={cx('item2-2')}>{props.status}</div>
            </div>
            <div className={cx('item3')}>
                <OrderHistoryProduct
                    image={Product[a].image}
                    name={Product[a].name}
                    author={Product[a].author}
                    price={Product[a].price}
                    amount={Product[a].amount}
                ></OrderHistoryProduct>
                <OrderHistoryProduct
                    image={Product[b].image}
                    name={Product[b].name}
                    author={Product[b].author}
                    price={Product[b].price}
                    amount={Product[b].amount}
                ></OrderHistoryProduct>
                <OrderHistoryProduct
                    image={Product[c].image}
                    name={Product[c].name}
                    author={Product[c].author}
                    price={Product[c].price}
                    amount={Product[c].amount}
                ></OrderHistoryProduct>
            </div>
            <div className={cx('item4')}>
                Tổng số tiền:
                {Product[a].amount * Product[a].price +
                    Product[b].amount * Product[b].price +
                    Product[c].amount * Product[c].price}
            </div>
            <div className={cx('item5')}>
                <div className={cx('item5-1')}>{props.status2}</div>
                <div className={cx('item5-2')}>Mua lại</div>
                <div className={cx('item5-3')}>Liên hệ người bán</div>
            </div>
        </div>
    );
}

export default OrderHistoryItem;
