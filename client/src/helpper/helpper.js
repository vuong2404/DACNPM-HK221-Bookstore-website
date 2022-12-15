export const getAddress_str = (item) => `${item.specificAddress}, ${item.ward}, ${item.district}, ${item.city}`;
export const getPaymentMethod = (type) =>
    (type === 'momo' && 'Thanh toán bằng ví điện tử momo') ||
    (type === 'cash' && 'Thanh toán khi nhận hàng') ||
    (type === 'vnpay' && 'Thanh toán bằng VNPAY') ||
    (type === 'zalopay' && 'Thanh toán bằng ví điện tử ZaloPay');
