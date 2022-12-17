import axios from 'axios';

export const getBookLists = async () => {
    return await axios.get('http://localhost:8080/api/book').then((res) => res.data).catch((err) => alert('Đã xảy ra lỗi', err));;
};

export const getBookById = async (id) => {
    return await axios.get(`http://localhost:8080/api/book/${id}`).then((res) => res.data).catch((err) => alert('Đã xảy ra lỗi', err));;
};

export const postBook = async (props) =>{
    return await axios.post(`http://localhost:8080/api/book`, props).then((res)=>{alert('Thêm thành công')}).catch((err) => alert('Đã xảy ra lỗi', err));;
}

export const searchBooks = async (props) =>{
    return await axios.get(`http://localhost:8080/api/book/advanced`, props).then((res)=>res.data).catch((err) => alert('Đã xảy ra lỗi', err));;
}

export const updateBook = async (id,props) => {
    return await axios.put(`http://localhost:8080/api/book/${id}`, props).then((res)=>{alert('Cập nhật thành công')}).catch((err) => alert('Đã xảy ra lỗi', err));;
};

export const deleteBook = async (id) => {
    return await axios.delete(`http://localhost:8080/api/book/${id}`).then((res) => {alert('Xóa thành công')}).catch((err) => alert('Đã xảy ra lỗi', err));;
};
