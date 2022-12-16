import axios from 'axios';

export const getBookLists = async () => {
    return await axios.get('http://localhost:8080/api/book').then((res) => res.data);
};

export const getBookById = async (id) => {
    return await axios.get(`http://localhost:8080/api/book/${id}`).then((res) => res.data);
};