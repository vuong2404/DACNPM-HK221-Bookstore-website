import axios from 'axios';

export const getFeedback = async (id) => {
    return await axios.get(`http://localhost:8080/api/feedback/${id}`).then((res) => res.data);
};

