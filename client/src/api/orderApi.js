import axios from 'axios';

export const getOrderLists = async () => {
    return await axios.get('http://localhost:8080/api/order').then((res) => res.data);
};

export const getOrderById = async (id) => {
    return await axios.get(`http://localhost:8080/api/order/${id}`).then((res) => res.data);
};

export const confirmOrder = async (id) => {
    await axios({
        method: 'put',
        url: 'http://localhost:8080/api/order',
        data: {
            id,
            status: 'confirmed',
        },
    })
        .then((res) => {
            alert('Cập nhật thành công');
        })
        .catch((err) => alert('Đã xảy ra lỗi', err));
};

export const cancelOrder = async (id) => {
    await axios({
        method: 'put',
        url: 'http://localhost:8080/api/order',
        data: {
            id,
            status: 'cancel',
        },
    })
        .then((res) => {
            alert('Cập nhật thành công');
            // getOrderById(id).then((data) => setOrder(data));
        })
        .catch((err) => alert('Đã xảy ra lỗi', err));
};

export const updateOrderStatus = async (id, cur_status) => {
    let status = '';
    console.log(cur_status)
    if (cur_status === 'confirmed') {
        status = 'intrans';
    } else if (cur_status === 'intrans') {
        status = 'success';
    } else {
        alert('Đã xảy ra lỗi!');
        return;
    }
    await axios({
        method: 'put',
        url: 'http://localhost:8080/api/order',
        data: {
            id,
            status: status
        },
    })
        .then((res) => {
            alert('Cập nhật thành công');
            // getOrderById(id).then((data) => setOrder(data));
        })
        .catch((err) => alert('Đã xảy ra lỗi', err));
};
