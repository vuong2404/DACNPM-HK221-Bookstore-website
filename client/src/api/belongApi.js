import axios from 'axios';

export const getBelongById = async (id) => {
    return await axios.get(`http://localhost:8080/api/belong/${id}`).then((res) => res.data);
};