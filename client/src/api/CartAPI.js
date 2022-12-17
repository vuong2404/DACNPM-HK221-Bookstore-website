import axios from 'axios';
export const getCartAPI = async () => {
    if (sessionStorage.getItem('user')) {
        let user_id = JSON.parse(sessionStorage.getItem('user')).id;
        return await axios
            .get(`http://localhost:8080/api/cart/${user_id}`)
            .then((res) => res.data)
           
    } else {
        console.log('Chưa đăng nhập');
    }
};
export const updateCartItemAPI = async (cart_item) => {
    if (sessionStorage.getItem('user')) {
        let user_id = JSON.parse(sessionStorage.getItem('user')).id;
        return await axios({
            method: 'put',
            url: `http://localhost:8080/api/cart/${user_id}`,
            data: cart_item,
        })
            .then((res) => res)
            .catch((err) => alert(err));
    } else {
        alert('Vui lòng đăng nhập để thực hiện chức năng này!');
    }
};

export const removeCartItemAPI = async (bookID) => {
    if (sessionStorage.getItem('user')) {
        let user_id = JSON.parse(sessionStorage.getItem('user')).id;
        return await axios({
            method: 'delete',
            url: `http://localhost:8080/api/cart/${user_id}`,
            data: { bookID },
        })
            .then((res) => res)
            .catch((err) => alert(err));
    } else {
        alert('Vui lòng đăng nhập để thực hiện chức năng này!');
    }
};

export const addToCartAPI = async (bookID) => {
    if (sessionStorage.getItem('user')) {
        let user_id = JSON.parse(sessionStorage.getItem('user')).id;
        return await axios({
            method: 'post',
            url: `http://localhost:8080/api/cart/${user_id}`,
            data: { bookID, quantity: 1 },
        })
            .then((res) => res)
            .catch((err) => alert(err));
    } else {
        alert('Vui lòng đăng nhập để thực hiện chức năng này!');
    }
};
